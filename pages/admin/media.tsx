import React, { useState } from "react";
import Image from "next/image";

// Admin Media Manager for RWE
// Lets owners upload and manage match photos, promos, and videos
export default function AdminMedia() {
  const [media, setMedia] = useState([]);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    if (!file || !title) return;

    const newMedia = {
      id: Date.now(),
      title,
      preview: URL.createObjectURL(file),
    };

    setMedia([newMedia, ...media]);
    setTitle("");
    setFile(null);
  };

  const removeMedia = (id) => {
    setMedia(media.filter((item) => item.id !== id));
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-10">
        🎥 Media Uploads
      </h1>

      <section className="max-w-3xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold mb-4">Upload New Media</h2>

        <input
          type="text"
          placeholder="Title / Description"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-3 rounded text-black"
        />

        <input
          type="file"
          accept="image/*,video/*"
          onChange={(e) => setFile(e.target.files[0])}
          className="mb-4"
        />

        <button
          onClick={handleUpload}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
        >
          Upload
        </button>

        <p className="text-sm text-gray-400 mt-2">
          📌 Tip: For now, this saves files temporarily in-browser only. Full upload support will need backend or cloud setup (e.g., Firebase or Cloudinary).
        </p>
      </section>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Uploaded Media</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {media.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 p-4 rounded-xl flex flex-col items-center"
            >
              {String(item.preview).includes("video") ? (
                <video src={String(item.preview)} controls className="w-full rounded mb-2" />
              ) : String(item.preview).startsWith("blob:") ? (
                // blob URLs can't be handled by next/image
                // eslint-disable-next-line @next/next/no-img-element
                <img src={String(item.preview)} alt={item.title} className="w-full rounded mb-2" />
              ) : (
                <div className="relative w-full h-48 mb-2">
                  <Image src={String(item.preview)} alt={item.title} fill className="object-cover rounded" />
                </div>
              )}
              <p className="text-white mb-2">{item.title}</p>
              <button
                onClick={() => removeMedia(item.id)}
                className="text-sm bg-gray-700 hover:bg-red-700 px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
