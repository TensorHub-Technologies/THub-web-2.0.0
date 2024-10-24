import { useState, useEffect } from "react";
import axios from "axios";

function Github_Custom_Button() {
  const [userData, setUserData] = useState({});
  console.log(userData.id, userData.name, userData.avatar_url, "****");

  const client_id = "Ov23liLgDH9KQ9QZbAFc";

  useEffect(() => {
    const query = window.location.search;
    const urlParams = new URLSearchParams(query);
    const searchParams = urlParams.get("code");

    if (searchParams) {
      async function getAccessToken() {
        const response = await fetch(
          "http://localhost:2000/getAccessToken?code=" + searchParams,
          {
            method: "GET",
          },
        );
        const data = await response.json();

        if (data.access_token) {
          localStorage.setItem("access_token", data.access_token);
          await getUserData();
        } else {
          console.error("Failed to get access token:", data.error_description);
        }
      }
      getAccessToken();
    } else if (localStorage.getItem("access_token")) {
      getUserData();
    }
  }, []);

  async function getUserData() {
    try {
      const response = await fetch("http://localhost:2000/getuserData", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });

      if (!response.ok) {
        throw new Error(`Error fetching user data: ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data, "User Data");
      setUserData(data);

      // Call insertUserData with the fetched data
      await insertUserData(data);
    } catch (error) {
      console.error("Error getting user data:", error);
    }
  }

  async function insertUserData(userData) {
    const formData = new FormData();

    formData.append("uid", userData.id || null);
    formData.append("email", userData.email || null);
    formData.append(
      "access_token",
      localStorage.getItem("access_token") || null,
    );
    formData.append("name", userData.name || null);
    formData.append("login_type", "github");
    formData.append("picture", userData.avatar_url || null);
    formData.append("subscription_type", "free");
    formData.append("department", userData.department || null);
    formData.append("role", userData.role || null);
    formData.append("designation", userData.designation || null);
    formData.append("company", userData.company || null);
    formData.append("workspace", userData.workspace || null);
    formData.append("encryption_key", userData.encryption_key || null);
    formData.append(
      "subscription_duration",
      userData.subscription_duration || null,
    );
    formData.append("subscription_date", userData.subscription_date || null);
    formData.append("phone", userData.phone || null);
    formData.append("password_hash", userData.password_hash || null);

    try {
      const response = await axios.post(
        "http://localhost:2000/insertUserData",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // This is necessary for FormData
          },
        },
      );

      console.log("User data inserted:", response.data);
    } catch (error) {
      console.error(
        "Error inserting user data:",
        error.response ? error.response.data : error.message,
      );
    }
  }

  const loginWithGithub = () => {
    const link = `https://github.com/login/oauth/authorize?client_id=${client_id}`;
    window.location.assign(link);
  };

  return (
    <div>
      <button
        onClick={loginWithGithub}
        type="button"
        className="px-16 text-black bg-white border dark:border-gray-500 dark:hover:border-primary-dark hover:border-primary  focus:outline-none font-medium rounded-lg text-lg  py-2.5 text-center inline-flex items-center dark:bg-black dark:text-white"
      >
        <svg
          className="w-6 h-6 me-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
            clipRule="evenodd"
          />
        </svg>
        Continue with Github
      </button>
    </div>
  );
}

export default Github_Custom_Button;
