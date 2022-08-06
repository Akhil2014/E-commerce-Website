import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../Components/PrivateRoute";
import Cart from "../Pages/Cart";
import ErrorPage from "../Pages/ErrorPage";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import MainProducts from "../Pages/MainProducts";
import SinglePage from "../Pages/SinglePage";

const AllRotes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<MainProducts />} />
        <Route
          path="/products/single/:id"
          element={
            <PrivateRoute>
              <SinglePage />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />{" "}
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default AllRotes;
