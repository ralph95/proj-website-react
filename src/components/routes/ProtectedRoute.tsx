// src/components/ProtectedRoute.tsx
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const token = localStorage.getItem("token");

  if (!token) {
    // If no token → redirect to login
    return <Navigate to="/" replace />;
  }

  return children;
}
