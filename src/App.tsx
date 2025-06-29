import HomePage from './pages/Home/HomePage'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider, Outlet } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
])

function App() {
    return (
        <>
            <RouterProvider router={router} />
            <Outlet />
        </>
    )
}

export default App
