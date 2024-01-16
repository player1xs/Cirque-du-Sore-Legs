import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.scss'

// page components
import App from './App'
import Home from './components/Home'
import EventIndex from './components/EventIndex'
import EventSingle from './components/EventSingle'
import EventCreate from './components/EventCreate'
import EventUpdate from './components/EventUpdate'
import ErrorPage from './components/ErrorPage'
import Profile from './components/Profile'
import Blog from './components/Blog'
// add Blog and Cookies and Terms

// Loaders
import { getAllEvents, getSingleEvent } from './utils/loaders/event'

//aciotns
import { createOrDeleteComment, createEvent, updateOrDeleteEvent } from './utils/actions/event'
import { getSingleUser } from './utils/loaders/user'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: getAllEvents
      },
      {
        path: '/eventIndex',
        element: <EventIndex />,
        loader: getAllEvents
      },
      {
        path: '/eventIndex/:eventId',
        element: <EventSingle />,
        loader: async ({ params }) => getSingleEvent(params.eventId),
        action: async ({ request, params }) => createOrDeleteComment(request, params.eventId, params.commentId)
      },
      {
        path: '/eventIndex/create',
        element: <EventCreate />,
        action: async ({ request }) => createEvent(request)
      },
      {
        path: '/eventIndex/:eventId/update',
        element: <EventUpdate />,
        loader: async ({ params }) => getSingleEvent(params.eventId),
        action: async ({ request, params }) => updateOrDeleteEvent(request, params.eventId)
      },
      {
        path: '/profile',
        element: <Profile />,
        loader: getSingleUser
      },
      {
        path: '/blog',
        element: <Blog />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
