import React from "react";
import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="https://home.philippinesheadline.com/" replace />;
  }

  try {
    const decoded: any = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Convert ms → seconds

    if (decoded.exp && decoded.exp < currentTime) {
      localStorage.removeItem("token");
      return <Navigate to="https://home.philippinesheadline.com/" replace />;
    }
  } catch (err) {
    localStorage.removeItem("token");
    return <Navigate to="https://home.philippinesheadline.com/" replace />;
  }

  return children;
}
