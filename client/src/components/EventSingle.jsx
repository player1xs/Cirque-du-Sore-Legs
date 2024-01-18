import { useLoaderData, Link } from "react-router-dom"
import { activeUser } from "../utils/helpers/common"
import Button from 'react-bootstrap/Button'
// import Container from 'react-bootstrap/Container'
// import { activeUser } from '../utils/helper/common'

export default function EventSingle() {
  
  const event = useLoaderData()
  const { event_name, description, id, date, image, distance, website, genres, company} = event

  return (
    <>
      <div className="content">
        <div className="singlePage">
          <h2>{event_name}</h2>
          <div className="singleBtns-container">
            <Link to={`/eventIndex`} className="backBtn">Back to List</Link>
            {activeUser() === event.owner.id && <Button className="update-delete"><Link to={`/eventIndex/${id}/update`} className="update-delete-link">Update / Delete</Link></Button> }
          </div>
          <div className="about-container">
            <img className="imgDr" src={ image }/>
            <div className="event-description">About: {description}</div>
          </div>
          <div className="deeets">
            <div className="info">Date: {date}</div>
            <div className="info">Distance: {distance} km</div>        
            <div className="info">Category: {genres[0].name}</div>
            <div className="info">Website: {website}</div>
            <div className="info">Organiser: {company}</div>
          </div>
        </div>
      </div>
    </>
  )
}