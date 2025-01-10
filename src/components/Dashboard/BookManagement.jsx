import React, { useState } from "react";

const BookManagement = () => {
  // Initial books data (Updated with 8 more books)
  const [books, setBooks] = useState([
    {
      id: 1,
      picture:
        "https://media.istockphoto.com/id/2170854813/photo/businessman-smiling-while-working-on-laptop-in-modern-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=eVNRo0K7qv3-ljtAVEJCbWqi9Tdgj9aKkA7WZUVBQ_k=",
        name: "George", author: "Lee",
      year: 2001,
      description: "This is a description George.",
    },
    {
      id: 2,
      picture:
        "https://media.istockphoto.com/id/1405243325/photo/happy-and-smiling-man-typing-e-mail-to-his-customer-he-has-online-virtual-meeting-on-laptop.webp?a=1&b=1&s=612x612&w=0&k=20&c=YMm0BvheHBnWewxLIY6Sb_O6AixjcsXq2Zv1vMFUJEU=",
        name: "Fitzgerald", author: "Harper",
      year: 2002,
      description: "This is a description Harper.",
    },
    {
      id: 3,
      picture:
        "https://media.istockphoto.com/id/1867533396/photo/young-asian-man-using-smart-phone-in-cafe.webp?a=1&b=1&s=612x612&w=0&k=20&c=_Bal1cuuXVr3luD6LkQkLkgNmqkV2WS_03M1d9Spez4=",
        name: "Austen", author: "Christie",
      year: 2003,
      description: "This is a description Austen.",
    },
    {
      id: 4,
      picture:
        "https://plus.unsplash.com/premium_photo-1723770023600-8083358720aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8fDB8fHww",
        name: "Salinger", author: "Agatha",
      year: 2004,
      description: "This is a description Salinger.",
    },
    {
      id: 5,
      picture:
        "https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
        name: "Herman", author: "F. Scot",
      year: 2005,
      description: "This is a description Herman.",
    },
    {
      id: 6,
      picture:
        "https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
        name: "Leo", author: "Orwell",
      year: 2006,
      description: "This is a description Leo.",
    },
    {
      id: 7,
      picture:
        "https://images.unsplash.com/photo-1495603889488-42d1d66e5523?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
        name: "Tolkien", author: "Ernest",
      year: 2007,
      description: "This is a description Tolkien.",
    },
    {
      id: 8,
      picture:
        "https://media.istockphoto.com/id/2017256409/photo/young-asian-man-on-the-metro.webp?a=1&b=1&s=612x612&w=0&k=20&c=BPUvlXun78PFL49ZqJwdhQsgAa_OhTh9Qpq-jvgdJmg=",
        name: "Aldous", author: "Fakhar",
      year: 2008,
      description: "This is a description Aldous.",
    },
    {
      id: 9,
      picture:
        "https://media.istockphoto.com/id/2066301960/photo/man-with-eyeglasses-stand-at-home-use-mobile-phone-sms-texting.jpg?s=612x612&w=0&k=20&c=6WBKuAaKy43cColcv9TaSIN1gu_rIF_q-o0WtPBZ3Z8=",
        name: "Huxley", author: "Abbas",
      year: 2009,
      description: "This is a description Huxley.",
    },
    {
      id: 10,
      picture:
        "https://media.istockphoto.com/id/2172317014/photo/happy-hispanic-man-working-on-laptop-at-home.jpg?s=612x612&w=0&k=20&c=9evc002hmjsuha6TiO8OftVTuZIE71Hr3qhmq8vRRH0=",
        name: "Fyodor", author: "Bhatti",
      year: 2010,
      description: "This is a description Bhatti.",
    },
  ]);

// Function to delete a book
  const handleDelete = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="p-6">
      {/* Dashboard Heading */}
      <h1 className="text-xl sm:text-4xl font-bold text-center text-gray-800 mb-6">
        Book Management Dashboard
      </h1>

      {/* Table Heading */}
      <h2 className="text-lg sm:text-2xl font-bold mb-4">Book Table</h2>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table-auto sm:w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200 text-sm sm:text-lg">
              <th className="border text-nowrapborder-gray-400 px-2 sm:px-4 py-2">Picture</th>
              <th className="border text-nowrap border-gray-400 px-2 sm:px-4 py-2">Book Name</th>
              <th className="border text-nowrap border-gray-400 px-2 sm:px-4 py-2">Author Name</th>
              <th className="border text-nowrap border-gray-400 px-2 sm:px-4 py-2">Publish Year</th>
              <th className="border text-nowrap border-gray-400 px-2 sm:px-4 py-2">Description</th>
              <th className="border text-nowrap border-gray-400 px-2 sm:px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr
                key={book.id}
                className="text-center hover:bg-gray-100 transition duration-200"
              >
                <td className="border border-gray-400 px-4 py-2">
                  <img
                    src={book.picture}
                    alt="Book"
                    className="w-10 h-10 object-cover mx-auto sm:w-20 sm:h-20 sm:object-cover sm:mx-auto"
                  />
                </td>

                <td className="border border-gray-400 px-2 sm:px-4 py-2">
                  {book.name}
                </td>
                <td className="border border-gray-400 px-2 sm:px-4 py-2">
                  {book.author}
                </td>
                <td className="border border-gray-400 px-2 sm:px-4 py-2">
                  {book.year}
                </td>
                <td className="border text-justify  sm:text-center border-gray-400 px-3 py-3 sm:px-4  sm:py-2">
                  {book.description}
                </td>
                <td className="border border-gray-400 px-3 py-3 sm:px-4 sm:py-2">
                  {/* Delete Button */}
                  <button
                    className="bg-red-500 text-white font-thin sm:font-semibold  px-4 py-2 rounded"
                    onClick={() => handleDelete(book.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookManagement;
















