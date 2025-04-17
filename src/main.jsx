
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App'
import Home from './Components/Navbar/Home/Home'
import About from './Components/Navbar/About/About'
import Gallery from './Components/Navbar/Gallery/Gallery'
import Loader from './Components/Loader/Loader'
import LoaderFun from './Components/Loader/LoaderFun'
import { Suspense } from 'react'
import UserDetails from './Components/UserDetails/UserDetails'






const fetcher = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())



const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "gallery", Component: Gallery },

      {
        path: "loader",
        hydrateFallbackElement: <div>Hello</div>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Loader
      },
      {
        path: "loader/:loaderId",
        loader: ({params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.loaderId}`),
        Component: UserDetails
      },
      {
        path: "loaderfun",
        element:
          <Suspense fallback={<h1>Loading.......</h1>}>
            <LoaderFun fetcher={fetcher}></LoaderFun>
          </Suspense>

      },
    ]
  }
])


createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}></RouterProvider>

)
