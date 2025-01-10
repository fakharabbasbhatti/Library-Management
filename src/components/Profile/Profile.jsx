import React, { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "Fakhar Bhatti",
    email: "fakharbhatti@gmail.com",
    contact: "+92 3072157486",
    major: "Computer Science",
    picture:
      "https://www.w3schools.com/w3images/avatar2.png", // default profile picture
  });

  const [isEditing, setIsEditing] = useState(false);
  const [newUser, setNewUser] = useState({ ...user });

  // Function to handle editing the profile
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const saveChanges = () => {
    setUser(newUser);
    setIsEditing(false);
  };

  // Function to handle deleting the profile
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete your profile?")) {
      setUser(null); // Removing the user
    }
  };

  if (!user) {
    return <div className="text-center text-red-500 font-semibold  ">Profile Deleted</div>;
  }

  return (
    <div className="p-8 max-w-lg mx-auto bg-gray-50 rounded-2xl shadow-xl">
  <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">
    Profile
  </h1>

  {/* Profile Picture */}
  <div className="flex justify-center mb-6">
    <img
      src={user.picture}
      alt="Profile"
      className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-lg"
    />
  </div>

  {isEditing ? (
    <div>
      <div className="mb-6">
        <label className="block text-blue-700 text-lg font-bold mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={newUser.name}
          onChange={handleChange}
          className="w-full px-5 py-3 border border-blue-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 bg-blue-50 text-blue-900"
        />
      </div>

      <div className="mb-6">
        <label className="block text-blue-700 text-lg font-bold mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={newUser.email}
          onChange={handleChange}
          className="w-full px-5 py-3 border border-blue-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 bg-blue-50 text-blue-900"
        />
      </div>

      <div className="mb-6">
        <label className="block text-blue-700 text-lg font-bold mb-2">Contact</label>
        <input
          type="text"
          name="contact"
          value={newUser.contact}
          onChange={handleChange}
          className="w-full px-5 py-3 border border-blue-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 bg-blue-50 text-blue-900"
        />
      </div>

      <div className="mb-8">
        <label className="block text-blue-700 text-lg font-bold mb-2">Major</label>
        <input
          type="text"
          name="major"
          value={newUser.major}
          onChange={handleChange}
          className="w-full px-5 py-3 border border-blue-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 bg-blue-50 text-blue-900"
        />
      </div>

      <div className="flex justify-between gap-4">
        <button
          onClick={saveChanges}
          className="w-full sm:w-auto bg-green-600 text-white px-5 py-3 rounded-md shadow-md hover:bg-green-700 transition-all duration-300"
        >
          Save
        </button>
        <button
          onClick={() => setIsEditing(false)}
          className="w-full sm:w-auto bg-gray-500 text-white px-5 py-3 rounded-md shadow-md hover:bg-gray-600 transition-all duration-300"
        >
          Cancel
        </button>
      </div>
    </div>
  ) : (
    <div>
      <div className="mb-6">
        <label className="block text-blue-700 text-lg font-bold mb-2">Name</label>
        <p className="text-lg font-semibold text-gray-800">{user.name}</p>
      </div>

      <div className="mb-6">
        <label className="block text-blue-700 text-lg font-bold mb-2">Email</label>
        <p className="text-lg font-semibold text-gray-800">{user.email}</p>
      </div>

      <div className="mb-6">
        <label className="block text-blue-700 text-lg font-bold mb-2">Contact</label>
        <p className="text-lg font-semibold text-gray-800">{user.contact}</p>
      </div>

      <div className="mb-8">
        <label className="block text-blue-700 text-lg font-bold mb-2">Major</label>
        <p className="text-lg font-semibold text-gray-800">{user.major}</p>
      </div>

      <div className="flex justify-between gap-4">
        <button
          onClick={handleEdit}
          className="w-full sm:w-auto bg-blue-600 text-white px-5 py-3 rounded-md shadow-md hover:bg-blue-700 transition-all duration-300"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="w-full sm:w-auto bg-red-600 text-white px-5 py-3 rounded-md shadow-md hover:bg-red-700 transition-all duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  )}
</div>

  );
};

export default Profile;
