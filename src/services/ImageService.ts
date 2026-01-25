// src/services/ImageService.ts
import axios from "axios";

export interface ImageItem {
  name: string;
  s3_key: string;
  url: string;
}

const API_URL = import.meta.env.VITE_API_URL;

export const fetchImages = async (): Promise<ImageItem[]> => {
  try {
    const res = await axios.get("https://api.philippinesheadline.com/images");
    return res.data;
  } catch (err) {
    console.error("Failed to fetch images:", err);
    return []; // Return empty array on error
  }
};
