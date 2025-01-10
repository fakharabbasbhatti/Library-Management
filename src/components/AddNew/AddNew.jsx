import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
const AddNew = () => {
  // const notify = () => toast("Wow so easy!");
  const navigate = useNavigate();
  // State for books
  const [books, setBooks] = useState([]);

  const [form, setForm] = useState({
    id: null,
    picture: "",
    name: "",
    author: "",
    year: "",
    description: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Save a new book
  const handleSave = () => {
    const newBook = {
      ...form,
      id: Date.now(), // Unique ID using the current timestamp
    };
    setBooks([...books, newBook]);

    // Log the new book data to console
    console.log("New Book Saved:", newBook);

    setForm({ id: null, picture: "", name: "", author: "", year: "", description: "" });

    // Navigate to the book management page after saving
    navigate("/bookmanagement");
  };

  // Edit an existing book
  const handleEdit = (book) => {
    setIsEditing(true);
    setForm(book);
  };

  // Update the book
  const handleUpdate = () => {
    setBooks(
      books.map((book) => (book.id === form.id ? form : book)) // Update book by ID
    );

    // Log the updated book data to console
    console.log("Book Updated:", form);

    setIsEditing(false);
    setForm({ id: null, picture: "", name: "", author: "", year: "", description: "" });

    // Navigate to the book management page after updating
    navigate("/bookmanagement");
  };

  return (
    <div className="p-8 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      {/* <ToastContainer /> */}
      {/* Form for Adding / Editing a Book */}
      <div className="mt-8">
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-4 text-gray-800">
          {isEditing ? "Edit Book" : "Add New Book"}
        </h2>
        <form className="space-y-6">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="picture"
              value={form.picture}
              onChange={handleInputChange}
              placeholder="Picture URL"
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleInputChange}
              placeholder="Book Name"
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="author"
              value={form.author}
              onChange={handleInputChange}
              placeholder="Author Name"
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              name="year"
              value={form.year}
              onChange={handleInputChange}
              placeholder="Publish Year"
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="description"
              value={form.description}
              onChange={handleInputChange}
              placeholder="Description"
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div className="flex justify-center gap-4">
            {isEditing ? (
              <button
                type="button"
                onClick={handleUpdate}
                className="bg-green-500 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Update
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSave}  // Trigger the save function and then navigate
                className="bg-blue-500 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Save
              </button>
              
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNew;
