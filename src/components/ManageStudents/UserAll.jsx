import React, { useState } from "react";
import AdminLayout from "../../layout/adminLayout";

const UserAll = () => {
  // Initial students data
  const [students, setStudents] = useState([
    {
      id: 1,
      picture:
        "https://media.istockphoto.com/id/2170854813/photo/businessman-smiling-while-working-on-laptop-in-modern-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=eVNRo0K7qv3-ljtAVEJCbWqi9Tdgj9aKkA7WZUVBQ_k=",
      name: "Fakhar",
      email: "fakharbhatti333@gmail.com",
      enrollmentYear: 2020,
      major: "Computer Science",
    },
    {
      id: 2,
      picture:
        "https://media.istockphoto.com/id/1405243325/photo/happy-and-smiling-man-typing-e-mail-to-his-customer-he-has-online-virtual-meeting-on-laptop.webp?a=1&b=1&s=612x612&w=0&k=20&c=YMm0BvheHBnWewxLIY6Sb_O6AixjcsXq2Zv1vMFUJEU=",
      name: "Ali",
      email: "alijutt@gmail.com",
      enrollmentYear: 2021,
      major: "Electrical Engineering",
    },
    {
      id: 3,
      picture:
        "https://media.istockphoto.com/id/1867533396/photo/young-asian-man-using-smart-phone-in-cafe.webp?a=1&b=1&s=612x612&w=0&k=20&c=_Bal1cuuXVr3luD6LkQkLkgNmqkV2WS_03M1d9Spez4=",
      name: "Waqas",
      email: "waqasbhatti@gmail.com",
      enrollmentYear: 2022,
      major: "Mechanical Engineering",
    },
    {
      id: 4,
      picture:
        "https://plus.unsplash.com/premium_photo-1723770023600-8083358720aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8fDB8fHww",
      name: "Shakeel",
      email: "shakeelgmail.com",
      enrollmentYear: 2023,
      major: "Civil Engineering",
    },
    {
      id: 5,
      picture:
        "https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
      name: "Gudo",
      email: "gudobuttgmail.com",
      enrollmentYear: 2024,
      major: "Architecture",
    },
    {
      id: 6,
      picture:
        "https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
      name: "Hamza",
      email: "hamza@gmail.com",
      enrollmentYear: 2025,
      major: "Physics",
    },
    {
      id: 7,
      picture:
        "https://images.unsplash.com/photo-1495603889488-42d1d66e5523?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
      name: "Faheem",
      email: "faheem@gmail.com",
      enrollmentYear: 2023,
      major: "Mathematics",
    },
    {
      id: 8,
      picture:
        "https://media.istockphoto.com/id/2017256409/photo/young-asian-man-on-the-metro.webp?a=1&b=1&s=612x612&w=0&k=20&c=BPUvlXun78PFL49ZqJwdhQsgAa_OhTh9Qpq-jvgdJmg=",
      name: "Waseem",
      email: "waseem@gmail.com",
      enrollmentYear: 2022,
      major: "Biology",
    },
  ]);

  // Function to delete a student
  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <AdminLayout>
      <div className="p-6 overflow-hidden">
        {/* Dashboard Heading */}
        <h1 className="text-xl sm:text-4xl font-bold text-center text-gray-800 mb-6">
          Student Management Dashboard
        </h1>

        {/* Table Heading */}
        <h2 className="text-lg sm:text-2xl font-bold mb-4">Student Table</h2>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-200">
                <th className="border text-nowrap border-gray-400 px-4 py-2">
                  Picture
                </th>
                <th className="border text-nowrap border-gray-400 px-4 py-2">
                  Student Name
                </th>
                <th className="border text-nowrap border-gray-400 px-4 py-2">
                  Email
                </th>
                <th className="border text-nowrap border-gray-400 px-4 py-2">
                  Enrollment Year
                </th>
                <th className="border text-nowrap border-gray-400 px-4 py-2">
                  Major
                </th>
                <th className="border text-nowrap border-gray-400 px-4 py-2">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="text-center hover:bg-gray-100 transition-colors duration-200"
                >
                  <td className="border border-gray-400 px-4 py-2">
                    <img
                      src={student.picture}
                      alt="Student"
                      className="w-10 h-10 object-cover mx-auto sm:w-20 sm:h-20 sm:object-cover sm:mx-auto"
                    />
                  </td>

                  <td className="border border-gray-400 px-4 py-2">
                    {student.name}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {student.email}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {student.enrollmentYear}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {student.major}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {/* Delete Button */}
                    <button
                      className="bg-red-500 text-white px-4 py-1 rounded"
                      onClick={() => handleDelete(student.id)}
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
    </AdminLayout>
  );
};

export default UserAll;
