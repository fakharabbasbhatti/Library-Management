import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebars from "./pages/Sidebars";
import LibraryManagement from "./components/Dashboard/LibraryManagement";
import BookManagement from "./components/Dashboard/BookManagement";
import AddNew from "./components/AddNew/AddNew";
import AddNewStudent from "./components/ManageStudents/AddNewStudent";
import UserAll from "./components/ManageStudents/UserAll";
import Plans from "./components/Subscription/Plans";
import PurchaseHistory from "./components/Subscription/PurchaseHistory";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import LogOut from "./components/LogOut/LogOut";


const App = () => {
  return (
    <Router>
      <Navbar /> 
      <div className="flex" >
      <Sidebars />
        <div className="flex-1 p-6 h-screen overflow-auto">
          <Routes>
            <Route path="/librarymanagement" element={<LibraryManagement />} />
            <Route path="/bookmanagement" element={<BookManagement />} />
            <Route path="/addnew" element={<AddNew />} />
            <Route path="/addnewstudent" element={<AddNewStudent />} />
            <Route path="/userall" element={<UserAll />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/purchasehistory" element={<PurchaseHistory />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<LogOut />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;





