import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import Home from './components/Home/Home.jsx'
import First from './components/First/First.jsx'
import Friends from './components/Friends/Friends.jsx'
import FriendDetail from './components/FriendDetail/FriendDetail.jsx'
import Posts from './components/Posts/Posts.jsx'
import PostDetails from './components/PostDetails/PostDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    children: [
      {
        path: '/',
        element: <First/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'posts',
        element: <Posts/>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: 'post/:postId',
        element: <PostDetails/>,
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path: 'friends',
        element: <Friends/>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: 'friend/:friendId',
        element: <FriendDetail/>,
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path: 'contact',
        element: <Contact/>
      },
      {
        path: '*',
        element: <ErrorPage/>
      }
    ]
  }
])
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App></App>,
//     errorElement: <ErrorPage></ErrorPage>
//   },
//   {
//     path: '/about',
//     element: <About/>
//   },
//   {
//     path: '/contact',
//     element: <Contact/>
//   },

// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
