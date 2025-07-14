import React from "react";

// Podcast & Blog Page
// Displays embedded podcast episodes and backstage blog posts
export default function PodcastBlogPage() {
  const episodes = [
    {
      id: 1,
      title: "Behind the Mic - Episode 1",
      embedUrl: "https://open.spotify.com/embed/episode/your-podcast-id",
      transcript: "Nova Black talks training routines and fan energy."
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Training Tips from El Diablo",
      summary: "Our champ shares his top 3 endurance secrets from the ring.",
      link: "/blog/training-tips-el-diablo"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-10">🎙️ Podcast & Backstage Blog</h1>

      {/* Podcast Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">Latest Podcast Episodes</h2>
        {episodes.map((ep) => (
          <div key={ep.id} className="mb-6 bg-gray-800 p-4 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">{ep.title}</h3>
            <iframe
              src={ep.embedUrl}
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded mb-2"
            ></iframe>
            <p className="text-gray-400">{ep.transcript}</p>
          </div>
        ))}
      </section>

      {/* Blog Section */}
      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">Backstage Blog</h2>
        {blogPosts.map((post) => (
          <div key={post.id} className="mb-6 bg-gray-800 p-4 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2 text-red-500">{post.title}</h3>
            <p className="text-gray-300 mb-2">{post.summary}</p>
            <a
              href={post.link}
              className="text-blue-400 hover:underline"
            >
              Read More
            </a>
          </div>
        ))}
      </section>
    </main>
  );
}
