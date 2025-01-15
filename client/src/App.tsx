import React, { ReactNode } from "react";
import { useAuth } from "contexts/AuthContext";
import { Routes, Route, Navigate } from "react-router";
import AuthModal from "components/AuthModal";
import Header from "components/Header";
import "styles/ReactWelcome.css";
import Navbar from "components/NavBar";
import AdminNavbar from "components/AdminNavBar";
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
  const { isLoggedIn, account } = useAuth();
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  if (account?.role === 'admin') {
    return <Navigate to="/admin/store" replace />;
  }
  return <>{children}</>;
};

const AdminRoute = ({ children }: { children: ReactNode }) => {
  const { isLoggedIn, account } = useAuth();
  return isLoggedIn && account?.role === 'admin' ? <>{children}</> : <Navigate to="/login" replace />;
};

// Define routes in an array with component and path
const routes = [
  { path: "/login", component: LoginPage, protected: false, admin: false },
  { path: "/", component: HomePage, protected: true, admin: false },
  { path: "/store", component: StorePage, protected: true, admin: false },
  { path: "/rewards", component: RewardsPage, protected: true, admin: false },
  { path: "/history", component: HistoryPage, protected: true, admin: false },
  { path: "/profile", component: ProfilePage, protected: true, admin: false },
  { path: "/detailed-task", component: DetailedTaskPage, protected: true, admin: false },
  { path: "/detailed-listing", component: DetailedListingPage, protected: true, admin: false },
  { path: "/admin/tasks", component: AdminTaskPage, protected: true, admin: true },
  { path: "/admin/manage-tasks", component: AdminManageTasksPage, protected: true, admin: true },
  { path: "/admin/edit-tasks", component: AdminEditTasksPage, protected: true, admin: true },
  { path: "/admin/add-tasks", component: AdminAddTasksPage, protected: true, admin: true },
  { path: "/admin/verify-tasks", component: AdminVerifyTaskPage, protected: true, admin: true },
  { path: "/admin/manage-users", component: AdminManageUsersPage, protected: true, admin: true },
  { path: "/admin/update-user", component: AdminUpdateUserPage, protected: true, admin: true },
  { path: "/admin/change-password", component: AdminChangePasswordPage, protected: true, admin: true },
  { path: "/admin/add-user", component: AdminAddUserPage, protected: true, admin: true },
  { path: "/admin/store", component: AdminStorePage, protected: true, admin: true },
  { path: "/admin/manage-items", component: AdminManageItemsPage, protected: true, admin: true },
  { path: "/admin/edit-item", component: AdminEditItemPage, protected: true, admin: true },
  { path: "/admin/add-item", component: AdminAddItemPage, protected: true, admin: true },
  { path: "/admin/approve-purchases", component: AdminApprovePurchasesPage, protected: true, admin: true },
];

const App = () => {
  return (
    <div className="App">
      <Header />
      <LoggedInStatus />
      <AuthModal />
      <Routes>
        {routes.map(({ path, component: Component, protected: isProtected, admin }) => (
          <Route
            key={path}
            path={path}
            element={
              isProtected ? (
                admin ? (
                  <AdminRoute>
                    <Component />
                    <AdminNavbar />
                  </AdminRoute>
                ) : (
                  <ProtectedRoute>
                    <Component />
                    <Navbar />
                  </ProtectedRoute>
                )
              ) : (
                <Component />
              )
            }
          />
        ))}
      </Routes>
    </div>
  );
};

const LoggedInStatus = () => {
  const { isLoggedIn, account } = useAuth();
  return isLoggedIn && account ? <p>Welcome back, {account.username}!</p> : null;
};

export default App;
