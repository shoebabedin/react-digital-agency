import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";
import Preloader from "../Preloader/Preloader";
import ToTop from "../ToTop/ToTop";

const Layout = () => {
  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      // We pretend to be fetching data from a server and it takes 3 seconds
      await new Promise((resolve) => setTimeout(resolve, 3000));
      // When the data "fetching" process is complete, we will set the title and content

      setLoading(false);
    };

    fetchData();
  }, [title]);

  return (
    <main id="main" className={`${loading && "overflow-hidden"}`}>
      <Helmet>
        <title>Numohive</title>
      </Helmet>
      {loading && <Preloader />}
      <NavBar />
      <Outlet />
      <ToTop />
      <Footer />
    </main>
  );
};

export default Layout;
