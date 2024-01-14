import { ReactDOM } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/main.scss'

// page components
import App from './App'
import Home from './components/Home'
import EventIndex from './components/EventIndex'
// import EventSingle from './components/EventSingle'
// import EventCreate from './components/EventCreate'
import ErrorPage from './components/ErrorPage'
// add Blog and Cookies and Terms

// Loaders
import { getAllEvents } from './utils/loaders/event' //add getSingleEvent into crulies

// import { createOrDeleteComment, createEvent, updateOrDeleteEvent } from './utils/actions/event' //NEED TO ADD THIS< ONCE USER AND AUTHENTICATION ARE IN
// import EventUpdate from './components/EventUpdate' //need to add this and remember to add population to fields
// import { getSingleUser } from './utils/loaders/user' // Make sure to update this

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
      // {
      //   path: '/eventIndex/:eventId',
      //   element: <EventSingle />,
      //   loader: async ({ params }) => getSingleEvent(params.eventId),
      //   action: async ({ request, params }) => createOrDeleteComment(request, params.eventId, params.commentId)
      // },
      // {
      //   path: '/eventIndex/create',
      //   element: <EventCreate />,
      //   action: async ({ request }) => createEvent(request)
      // },
      // {
      //   path: '/eventIndex/:eventId/update',
      //   element: <EventUpdate />,
      //   loader: async ({ params }) => getSingleEvent(params.eventId),
      //   action: async ({ request, params }) => updateOrDeleteEvent(request, params.eventId)
      // }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
