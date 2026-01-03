import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import LoginSignup from './components/auth/LoginSignup';
import EmployerDashboard from './pages/dashboard/EmployerDashboard';
import CandidateDashboard from './pages/dashboard/CandidateDashboard';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Jobs from './components/Jobs';


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <LoginSignup />
  },
  {
    path: '/signup',
    element: <LoginSignup />
  },
  {
    path: '/dashboard/employer',
    element: (
      <ProtectedRoute allowedRole="employer">
        <EmployerDashboard />
      </ProtectedRoute>
    )
  },
  {
    path: '/dashboard/candidate',
    element: (
      <ProtectedRoute allowedRole="candidate">
        <CandidateDashboard />
      </ProtectedRoute>
    )
  },
  {
    path: '/jobs',
    element: <Jobs/>
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;