import React, { ReactNode } from "react";
import { useAuth } from "contexts/AuthContext";
import { Routes, Route, Navigate } from "react-router";
import AuthModal from "components/AuthModal";
import Header from "components/Header";
import "styles/ReactWelcome.css";
import Navbar from "components/NavBar";
import HomePage from "./pages/HomePage";
import StorePage from "./pages/StorePage";
import RewardsPage from "./pages/RewardsPage";
import HistoryPage from "./pages/HistoryPage";
import ProfilePage from "./pages/ProfilePage";
import DetailedTaskPage from "./pages/DetailedTaskPage";
import DetailedListingPage from "./pages/DetailedListingPage";
import AdminTaskPage from "./pages/AdminTaskPage";
import AdminManageTasksPage from "./pages/AdminManageTasksPage";
import AdminEditTasksPage from "./pages/AdminEditTaskPage";
import AdminAddTasksPage from "./pages/AdminAddTaskPage";
import AdminVerifyTaskPage from "./pages/AdminVerifyTaskPage";
import AdminManageUsersPage from "./pages/AdminManageUsersPage";
import AdminUpdateUserPage from "./pages/AdminUpdateUserPage";
import AdminChangePasswordPage from "./pages/AdminChangePassword";
import AdminAddUserPage from "./pages/AdminAddUserPage";
import AdminStorePage from "./pages/AdminStorePage";
import AdminManageItemsPage from "./pages/AdminManageItemsPage";
import AdminEditItemPage from "./pages/AdminEditItemPage";
import AdminAddItemPage from "./pages/AdminAddItemPage";
import AdminApprovePurchasesPage from "./pages/AdminApprovePurchasesPage";
import LoginPage from "./pages/LoginPage";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <>{children}</> : <Navigate to="/login" replace />;
};

// Define routes in an array with component and path
const routes = [
  { path: "/login", component: LoginPage, protected: false },
  { path: "/", component: HomePage, protected: true },
  { path: "/store", component: StorePage, protected: true },
  { path: "/rewards", component: RewardsPage, protected: true },
  { path: "/history", component: HistoryPage, protected: true },
  { path: "/profile", component: ProfilePage, protected: true },
  { path: "/detailed-task", component: DetailedTaskPage, protected: true },
  { path: "/detailed-listing", component: DetailedListingPage, protected: true },
  { path: "/admin/tasks", component: AdminTaskPage, protected: true },
  { path: "/admin/manage-tasks", component: AdminManageTasksPage, protected: true },
  { path: "/admin/edit-tasks", component: AdminEditTasksPage, protected: true },
  { path: "/admin/add-tasks", component: AdminAddTasksPage, protected: true },
  { path: "/admin/verify-tasks", component: AdminVerifyTaskPage, protected: true },
  { path: "/admin/manage-users", component: AdminManageUsersPage, protected: true },
  { path: "/admin/update-user", component: AdminUpdateUserPage, protected: true },
  { path: "/admin/change-password", component: AdminChangePasswordPage, protected: true },
  { path: "/admin/add-user", component: AdminAddUserPage, protected: true },
  { path: "/admin/store", component: AdminStorePage, protected: true },
  { path: "/admin/manage-items", component: AdminManageItemsPage, protected: true },
  { path: "/admin/edit-item", component: AdminEditItemPage, protected: true },
  { path: "/admin/add-item", component: AdminAddItemPage, protected: true },
  { path: "/admin/approve-purchases", component: AdminApprovePurchasesPage, protected: true },
];

const App = () => {
  return (
    <div className="App">
      <Header />
      <LoggedInStatus />
      <AuthModal />
      <Routes>
        {routes.map(({ path, component: Component, protected: isProtected }) => (
          <Route
            key={path}
            path={path}
            element={isProtected ? <ProtectedRoute><Component /></ProtectedRoute> : <Component />}
          />
        ))}
      </Routes>
      <Navbar />
    </div>
  );
};

const LoggedInStatus = () => {
  const { isLoggedIn, account } = useAuth();
  return isLoggedIn && account ? <p>Welcome back, {account.username}!</p> : null;
};

export default App;
