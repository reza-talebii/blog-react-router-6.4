import React from "react";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  const errorMassage = useRouteError();

  return (
    <>
      <MainNavigation />
      <main>{errorMassage.message}</main>
    </>
  );
};

export default ErrorPage;
