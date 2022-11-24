import Link from "next/link";

import React from "react";

//import hook react
import { useState, useEffect } from "react";

//import router
import Router from "next/router";

//import axios
import axios from "axios";

//import js cookie
import Cookies from "js-cookie";

const NavbarClient = () => {
  //get token
  const token = Cookies.get("token");
  //state user
  const [user, setUser] = useState({});

  //function "fetchData"
  const fetchData = async () => {
    //set axios header dengan type Authorization + Bearer token
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    //fetch user from Rest API
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/user`)
      .then((response) => {
        //set response user to state
        setUser(response.data);
      });
  };

  //hook useEffect
  useEffect(() => {
    //check token empty
    if (!token) {
      //redirect login page
      Router.push("/login");
    }

    //call function "fetchData"
    fetchData();
  }, []);

  //function logout
  const logoutHanlder = async () => {
    //set axios header dengan type Authorization + Bearer token
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    //fetch Rest API
    await axios
      .post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/logout`)
      .then(() => {
        //remove token from cookies
        Cookies.remove("token");

        //redirect halaman login
        Router.push("/login");
      });
  };

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark fixed-top border-0 shadow-sm">
          <div className="container">
            <Link href="/dashboard" className="navbar-brand">
              Selamat Datang, {user.name}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <button
                className="btn btn-sm btn-primary ms-auto"
                onClick={logoutHanlder}
              >
                Logout
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavbarClient;
