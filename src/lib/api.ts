import axios from "axios";

export async function APIEXECUTE(path: string, options: any = {}) {
  const token = localStorage.getItem("token");

  const res = await axios({
    url: `${import.meta.env.VITE_API_URL}${path}`,
    method: options.method || "GET",
    data: options.body ? JSON.parse(options.body) : undefined,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  return res.data;
}
