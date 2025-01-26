import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './components/auth/Login'
import Home from './components/Home'
import Register from './components/auth/Register'
import { Toaster } from './components/ui/sonner'
import Jobs from './components/jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
import Companies from './components/admin/Companies'
import CompanyCreate from './components/admin/CompanyCreate'
import CompanySetup from './components/admin/CompanySetup'
import AdminJobs from './components/admin/AdminJobs'
import PostJob from './components/admin/PostJob'
import Applicants from './components/admin/Applicants'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setUser } from './redux/authSlice'
import { toast } from 'sonner'
import ProtectedRoute from './components/admin/protectedRoute'


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/jobs',
    element: <Jobs />
  },
  {
    path: '/description/:id',
    element: <JobDescription />
  },
  {
    path: '/browse',
    element: <Browse />
  },
  {
    path: '/profile',
    element: <Profile />
  },


  // Let's turn to the admin section as a recruiter
  {
    path: '/admin/companies',
    element: <ProtectedRoute><Companies /></ProtectedRoute>
  },
  {
    path: '/admin/companies/create',
    element: <ProtectedRoute><CompanyCreate /></ProtectedRoute>
  },
  {
    path: '/admin/companies/:id',
    element: <ProtectedRoute><CompanySetup /></ProtectedRoute>
  },
  {
    path: '/admin/jobs',
    element: <ProtectedRoute><AdminJobs /></ProtectedRoute>
  },
  {
    path: '/admin/jobs/create',
    element: <ProtectedRoute><PostJob /></ProtectedRoute>
  },
  {
    path: '/admin/jobs/:id/applicants',
    element: <ProtectedRoute><Applicants /></ProtectedRoute>
  }
])

function App() {
  const { user } = useSelector((store) => store.auth); // Access user data from Redux
  const dispatch = useDispatch();

  useEffect(() => {
    if (user?.tokenExpiry) {
      const timeout = setTimeout(() => {
        dispatch(setUser(null)); // Clear user data
        toast.error('Session expired. Please log in again.');
        window.location.href = '/login'; // Redirect to login page
      }, user.tokenExpiry - Date.now());
      return () => clearTimeout(timeout); // Cleanup timer is unmounted
    }
  }, [user, dispatch]);

  return (
    <>
      <RouterProvider router={appRouter} />
      <Toaster />
    </>
  )
}

export default App
