import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "@/layouts/AppLayout"
import LandingPage from "@/pages/landing"
import OnboardingPage from "./pages/onboarding"
import JoblistingPage from "./pages/job-listing"
import JobPage from "./pages/job"
import PostJob from "./pages/post-job"
import SavedJobs from "./pages/saved-job"
import MyJobs from "./pages/my-jobs"
import { ThemeProvider } from "./components/theme-provider"
import "./App.css"

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/onboarding',
        element: <OnboardingPage />
      },
      {
        path: '/my-jobs',
        element: <MyJobs />
      },
      {
        path: '/jobs',
        element: <JoblistingPage />
      },
      {
        path: '/jobs/:id',
        element: <JobPage />
      },
      {
        path: '/post-job',
        element: <PostJob />
      },
      {
        path: '/saved-jobs',
        element: <SavedJobs />
      },
    ]
  }
])

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
