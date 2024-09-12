import React from 'react';
import {createBrowserRouter} from "react-router-dom";
//import { ROUTES } from "./route";
import Home from "../components/HomePage/Home"
import About from "../components/AboutPage/About"
import ErrorComponent from "./ErrorComponent";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorComponent />
    },
    {
      path: "/About",
      element: <About />,
      errorElement: <ErrorComponent />
    },
    // add more routes as needed
  ]);