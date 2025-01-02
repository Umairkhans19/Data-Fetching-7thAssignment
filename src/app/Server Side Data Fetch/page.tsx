import React from "react";

// Server-side fetch in Server Component
const ServerSideRendering = async () => {
  // Fetch data from the server
  const response = await fetch("https://simple-books-api.glitch.me/books/");
  const data = await response.json();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center w-full mx-auto py-10">
      <h1 className="uppercase text-center text-[#68a63f] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-5xl mb-10">
        Books Collection
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:px-10 px-6">
        {data.map((book: { id: number; name: string; type: string; available: boolean }) => (
          <div
            key={book.id}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-2xl transform transition hover:scale-105 hover:border-[#68a63f]"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">{book.name}</h3>
            <p className="text-gray-600 text-sm mb-3">
              <strong>Type:</strong> {book.type}
            </p>
            <p
              className={`text-sm mb-3 ${book.available ? "text-green-600" : "text-red-600"}`}
            >
              <strong>Available:</strong> {book.available ? "Yes" : "No"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServerSideRendering;
