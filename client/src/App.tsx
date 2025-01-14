import React from 'react'
import { useAuth } from 'contexts/AuthContext'
import { Routes, Route } from "react-router";
import AuthModal from 'components/AuthModal'
import Header from 'components/Header'
import 'styles/ReactWelcome.css'
import Navbar from 'components/NavBar';
import HomePage from "./pages/HomePage";
import StorePage from "./pages/StorePage";
import RewardsPage from "./pages/RewardsPage";
import HistoryPage from "./pages/HistoryPage";
import ProfilePage from "./pages/ProfilePage";
import DetailedTaskPage from "./pages/DetailedTaskPage"

const App = () => {
  return (
    <div className='App'>
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
      </Routes>
      <Navbar />
    </div>
  )
}

const LoggedInStatus = () => {
  const { isLoggedIn, account } = useAuth()

  if (isLoggedIn && !!account) {
    return <p>Hey, {account.username}! I'm happy to let you know: you are authenticated!</p>
  }

  return <p>Don't forget to start your backend server, and then authenticate yourself.</p>
}

export default App
