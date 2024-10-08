import Grid from "@mui/material/Grid2";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function RootLayout() {
  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Navbar />
      </Grid>
      <Grid size={12} mt="100px">
        <main className="relative">
          <Outlet />
        </main>
      </Grid>
      <Grid size={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default RootLayout;
