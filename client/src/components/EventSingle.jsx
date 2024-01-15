import { useLoaderData } from "react-router-dom"
// import Container from 'react-bootstrap/Container'
// import { activeUser } from '../utils/helper/common'

export default function EventSingle() {
  
  const event = useLoaderData()
  const { event_name, description } = event

  return (
    <>
      <div className="content">
        <h2>{event_name}</h2>
        <div className="event-description">{description}</div>
      </div>
    </>
  )
}