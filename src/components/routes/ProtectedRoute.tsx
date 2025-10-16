import React from "react";
import { jwtDecode } from "jwt-decode";

export default function ProtectedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const token = localStorage.getItem("token");

  // ✅ Helper function to redirect safely outside React Router
  const redirectToHome = () => {
    window.location.href = "https://home.philippinesheadline.com/";
    return null;
  };

  // ✅ 1. No token → redirect to home
  if (!token) {
    return redirectToHome();
  }

  try {
    // ✅ 2. Decode token and check expiration
    const decoded: any = jwtDecode(token);
    const currentTime = Date.now() / 1000; // convert ms → seconds

    if (decoded.exp && decoded.exp < currentTime) {
      // ✅ 3. Token expired → clear storage and redirect
      localStorage.removeItem("token");
      return redirectToHome();
    }
  } catch (err) {
    // ✅ 4. Invalid token → clear storage and redirect
    localStorage.removeItem("token");
    return redirectToHome();
  }

  // ✅ 5. Token is valid → allow access
  return children;
}
