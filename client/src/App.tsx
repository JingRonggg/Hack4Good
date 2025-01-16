import React from "react";
import { useAuth } from "contexts/AuthContext";
import { Routes, Route } from "react-router";
import AuthModal from "components/AuthModal";
import Header from "components/Header";
import "styles/ReactWelcome.css";
import Navbar from "components/NavBar";
import HomePage from "./pages/User/HomePage";
import StorePage from "./pages/User/StorePage";
import RewardsPage from "./pages/User/RewardsPage";
import HistoryPage from "./pages/User/HistoryPage";
import ProfilePage from "./pages/User/ProfilePage";
import DetailedTaskPage from "./pages/User/DetailedTaskPage";
import DetailedListingPage from "./pages/User/DetailedListingPage";
import AdminTaskPage from "./pages/Admin/Task/AdminTaskPage";
import AdminManageTasksPage from "./pages/Admin/Task/AdminManageTasksPage";
import AdminEditTasksPage from "./pages/Admin/Task/AdminEditTaskPage";
import AdminAddTasksPage from "./pages/Admin/Task/AdminAddTaskPage";
import AdminVerifyTaskPage from "./pages/Admin/Task/AdminVerifyTaskPage";
import AdminManageUsersPage from "./pages/Admin/User/AdminManageUsersPage";
import AdminUpdateUserPage from "./pages/Admin/User/AdminUpdateUserPage";
import AdminChangePasswordPage from "./pages/Admin/User/AdminChangePassword";
import AdminAddUserPage from "./pages/Admin/User/AdminAddUserPage";
import AdminStorePage from "./pages/Admin/AdminStorePage";
import AdminManageItemsPage from "./pages/Admin/Item/AdminManageItemsPage";
import AdminEditItemPage from "./pages/Admin/Item/AdminEditItemPage";
import AdminAddItemPage from "./pages/Admin/Item/AdminAddItemPage";
import AdminApprovePurchasesPage from "./pages/Admin/AdminApprovePurchasesPage";

const App = () => {
  return (
    <div className="App">
      <Header />
      <LoggedInStatus />
      <AuthModal />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/rewards" element={<RewardsPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/detailed-task" element={<DetailedTaskPage />} />
        <Route path="/detailed-listing" element={<DetailedListingPage />} />
        <Route path="/admin/tasks" element={<AdminTaskPage />} />
        <Route path="/admin/manage-tasks" element={<AdminManageTasksPage />} />
        <Route path="/admin/edit-tasks" element={<AdminEditTasksPage />} />
        <Route path="/admin/add-tasks" element={<AdminAddTasksPage />} />
        <Route path="/admin/verify-tasks" element={<AdminVerifyTaskPage />} />
        <Route path="/admin/manage-users" element={<AdminManageUsersPage />} />
        <Route path="/admin/update-user" element={<AdminUpdateUserPage />} />
        <Route
          path="/admin/change-password"
          element={<AdminChangePasswordPage />}
        />
        <Route path="/admin/add-user" element={<AdminAddUserPage />} />
        <Route path="/admin/store" element={<AdminStorePage />} />
        <Route path="/admin/manage-items" element={<AdminManageItemsPage />} />
        <Route path="/admin/edit-item" element={<AdminEditItemPage />} />
        <Route path="/admin/add-item" element={<AdminAddItemPage />} />
        <Route
          path="/admin/approve-purchases"
          element={<AdminApprovePurchasesPage />}
        />
      </Routes>
      <Navbar />
    </div>
  );
};

const LoggedInStatus = () => {
  const { isLoggedIn, account } = useAuth();

  if (isLoggedIn && !!account) {
    return (
      <p>
        Hey, {account.username}! I'm happy to let you know: you are
        authenticated!
      </p>
    );
  }

  return (
    <p>
      Don't forget to start your backend server, and then authenticate yourself.
    </p>
  );
};

export default App;
