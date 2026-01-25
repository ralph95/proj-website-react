// src/services/ImageService.ts
import axios from "axios";

export interface ImageItem {
  name: string;
  s3_key: string;
  url: string;
}

export const fetchImages = async (): Promise<ImageItem[]> => {
  try {
    const res = await axios.get("https://api.philippinesheadline.com/images");
    return res.data;
  } catch (err) {
    console.error("Failed to fetch images:", err);
    return []; // Return empty array on error
  }
};
