import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// layouts
import RootLayout from './layouts/RootLayout'

// pages
import NotFound from './pages/NotFound'
import Today from './pages/Today'
import Tomorrow from './pages/Tomorrow'
import Habits from './pages/Habits'
import History from './pages/History'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route path='today' element={<Today />} />
      <Route path='tomorrow' element={<Tomorrow />} />
      <Route path='habits' element={<Habits />} />
      <Route path='history' element={<History />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
