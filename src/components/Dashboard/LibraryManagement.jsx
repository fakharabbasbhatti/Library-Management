import React, { useState } from "react";
import AdminLayout from "../../layout/adminLayout";

const LibraryManagement = () => {
  const [books, setBooks] = useState([
    { id: 1, name: "George", author: "Lee", year: 2001 },
    { id: 2, name: "Fitzgerald", author: "Harper", year: 2002 },
    { id: 3, name: "Austen", author: "Christie", year: 2003 },
    { id: 4, name: "Salinger", author: "Agatha", year: 2004 },
    { id: 5, name: "Herman", author: "F. Scot", year: 2005 },
    { id: 6, name: "Leo", author: "Orwell", year: 2006 },
    { id: 7, name: "Tolkien", author: "Ernest", year: 2007 },
    { id: 8, name: "Aldous", author: "Fakhar", year: 2008 },
    { id: 9, name: "Huxley", author: "Abbas", year: 2009 },
    { id: 10, name: "Fyodor", author: "Bhatti", year: 2010 },
  ]);

  const [editingBook, setEditingBook] = useState(null);
  const [updatedBook, setUpdatedBook] = useState({
    name: "",
    author: "",
    year: "",
  });

  const handleDelete = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleUpdate = () => {
    setBooks(
      books.map((book) =>
        book.id === editingBook ? { ...book, ...updatedBook } : book
      )
    );
    setEditingBook(null);
    setUpdatedBook({ name: "", author: "", year: "" });
  };

  return (
    <AdminLayout>
      <div className="p-4 sm:p-6">
        <h1 className="text-xl sm:text-4xl font-bold text-center text-gray-800 mb-6">
          Library Management Dashboard
        </h1>
        <h2 className="text-lg sm:text-2xl font-bold mb-4">Book List</h2>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-200 sm:text-lg">
                <th className="border text-nowrap border-gray-400 px-2 sm:px-4 py-2">
                  Book Name
                </th>
                <th className="border text-nowrap  border-gray-400 px-2 sm:px-4 py-2">
                  Author Name
                </th>
                <th className="border text-nowrap border-gray-400 px-2 sm:px-4 py-2">
                  Publish Year
                </th>
                <th className="border text-nowrap border-gray-400 px-2 sm:px-4 py-2">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id} className="text-center  hover:bg-gray-100">
                  <td className="border border-gray-400 px-2 sm:px-4 py-2">
                    {book.name}
                  </td>
                  <td className="border border-gray-400 px-2 sm:px-4 py-2">
                    {book.author}
                  </td>
                  <td className="border border-gray-400 px-2 sm:px-4 py-2">
                    {book.year}
                  </td>
                  <td className="border border-gray-400 flex justify-center items-center px-2 sm:px-4 py-2">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium px-4 py-2 rounded mr-2"
                      onClick={() => {
                        setEditingBook(book.id);
                        setUpdatedBook({
                          name: book.name,
                          author: book.author,
                          year: book.year,
                        });
                      }}
                    >
                      Update
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white  text-xs sm:text-sm font-medium px-4 py-2 rounded"
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

        {editingBook && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center ">
            <div className="bg-white p-4 sm:p-6 rounded-md shadow-md w-full max-w-sm sm:max-w-md mx-4">
              <h2 className="text-lg sm:text-xl font-bold mb-4">Edit Book</h2>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Book Name"
                  value={updatedBook.name}
                  onChange={(e) =>
                    setUpdatedBook({ ...updatedBook, name: e.target.value })
                  }
                  className="w-full p-2 border rounded text-sm sm:text-base"
                />
                <input
                  type="text"
                  placeholder="Author Name"
                  value={updatedBook.author}
                  onChange={(e) =>
                    setUpdatedBook({ ...updatedBook, author: e.target.value })
                  }
                  className="w-full p-2 border rounded text-sm sm:text-base"
                />
                <input
                  type="number"
                  placeholder="Publish Year"
                  value={updatedBook.year}
                  onChange={(e) =>
                    setUpdatedBook({ ...updatedBook, year: e.target.value })
                  }
                  className="w-full p-2 border rounded text-sm sm:text-base"
                />
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <button
                  onClick={() => setEditingBook(null)}
                  className="bg-gray-500 text-white text-sm sm:text-base py-1 px-3 sm:px-4 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdate}
                  className="bg-green-500 text-white text-sm sm:text-base py-1 px-3 sm:px-4 rounded"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default LibraryManagement;
