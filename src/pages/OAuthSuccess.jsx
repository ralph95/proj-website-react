import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function OAuthSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);

      // Decode JWT to get user
      const payload = JSON.parse(atob(token.split(".")[1]));
      localStorage.setItem("user", JSON.stringify(payload));

      navigate("/main", { replace: true });
    } else {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  return null;
}
