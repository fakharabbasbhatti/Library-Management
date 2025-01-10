import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddNewStudent = () => {
  const navigate = useNavigate();
  // State for students
  const [students, setStudents] = useState([]);

  const [form, setForm] = useState({
    id: null,
    picture: "",
    name: "",
    email: "",
    enrollmentYear: "",
    major: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Save a new student
  const handleSave = () => {
    const newStudent = {
      ...form,
      id: Date.now(), // Unique ID using the current timestamp
    };
    setStudents([...students, newStudent]);

    // Log the new student data to console
    console.log("New Student Saved:", newStudent);

    setForm({ id: null, picture: "", name: "", email: "", enrollmentYear: "", major: "" });

    // Navigate to the student management page after saving
    navigate("/userall");
  };

  // Edit an existing student
  const handleEdit = (student) => {
    setIsEditing(true);
    setForm(student);
  };

  // Update the student
  const handleUpdate = () => {
    setStudents(
      students.map((student) => (student.id === form.id ? form : student)) // Update student by ID
    );

    // Log the updated student data to console
    console.log("Student Updated:", form);

    setIsEditing(false);
    setForm({ id: null, picture: "", name: "", email: "", enrollmentYear: "", major: "" });

    // Navigate to the student management page after updating
    navigate("/userall");
  };

  return (
    <div className="p-8 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      {/* Form for Adding / Editing a Student */}
      <div className="mt-8">
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-4 text-gray-800">
          {isEditing ? "Edit Student" : "Add New Student"}
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
              placeholder="Student Name"
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              name="enrollmentYear"
              value={form.enrollmentYear}
              onChange={handleInputChange}
              placeholder="Enrollment Year"
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="major"
              value={form.major}
              onChange={handleInputChange}
              placeholder="Major"
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
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
                onClick={handleSave} // Trigger the save function and then navigate
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

export default AddNewStudent;
