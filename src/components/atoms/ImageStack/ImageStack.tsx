"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fetchImages, ImageItem } from "@/services/ImageService";

export default function MasonryGallery() {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [hovered, setHovered] = useState<number | null>(null);
  const [loading, setLoading] = useState(true); // optional loading state
  const [error, setError] = useState<string | null>(null); // optional error state

  useEffect(() => {
    const loadImages = async () => {
      try {
        const data = await fetchImages();
        if (!Array.isArray(data)) {
          console.warn("fetchImages returned invalid data:", data);
          setImages([]); // fallback to empty array
        } else {
          setImages(data);
        }
      } catch (err) {
        console.error("Error fetching images:", err);
        setImages([]); // fallback to empty array
        setError("Failed to load images"); // optional error message
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  // Optionally, show a loading or error message
  if (loading) return <p className="text-center py-10">Loading images...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;

  return (
    <div className="min-h-screen px-4 py-20 md:px-6">
      <div className="columns-1 gap-4 space-y-4 transition-all sm:columns-2 md:columns-3 lg:columns-4">
        {Array.isArray(images) && images.length > 0 ? (
          images.map((img, index) => (
            <motion.div
              key={img.s3_key || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 ease-in-out"
            >
              <motion.img
                src={img.url}
                alt={img.name || "Image"}
                className={`w-full rounded-lg object-cover transition-all duration-300 ease-in-out ${
                  hovered === null
                    ? "blur-0 scale-100"
                    : hovered === index
                      ? "blur-0 scale-105"
                      : "blur-xs"
                }`}
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
          ))
        ) : (
          <p className="text-center w-full col-span-full py-10 text-gray-400">
            No images to display
          </p>
        )}
      </div>
    </div>
  );
}
