import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddNew from "./components/AddNew/AddNew";
import BookManagement from "./components/Dashboard/BookManagement";
import LibraryManagement from "./components/Dashboard/LibraryManagement";
import Login from "./components/Login/Login";
import LogOut from "./components/LogOut/LogOut";
import AddNewStudent from "./components/ManageStudents/AddNewStudent";
import UserAll from "./components/ManageStudents/UserAll";
import Profile from "./components/Profile/Profile";
import Plans from "./components/Subscription/Plans";
import PurchaseHistory from "./components/Subscription/PurchaseHistory";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/admin/librarymanagement"
          element={<LibraryManagement />}
        />
        <Route path="/admin/bookmanagement" element={<BookManagement />} />
        <Route path="/admin/addnew" element={<AddNew />} />
        <Route path="/admin/addnewstudent" element={<AddNewStudent />} />
        <Route path="/admin/userall" element={<UserAll />} />
        <Route path="/admin/plans" element={<Plans />} />
        <Route path="/admin/purchasehistory" element={<PurchaseHistory />} />
        <Route path="/admin/profile" element={<Profile />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/logout" element={<LogOut />} />
      </Routes>
    </Router>
  );
};

export default App;
