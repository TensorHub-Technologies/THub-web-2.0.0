import { graphConfig } from "../../../config/msalConfig";

/**
 * Attaches a given access token to a MS Graph API call. Returns information about the user
 * @param accessToken
 */
export async function callMsGraph(accessToken) {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;
  console.log(bearer);

  headers.append("Authorization", bearer);

  const options = {
    method: "GET",
    headers: headers,
  };

  try {
    const response = await fetch(graphConfig.graphMeEndpoint, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}
