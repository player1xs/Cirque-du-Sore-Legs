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
          <Link to={`/eventIndex`} className="backBtn">Back to List</Link>
          {activeUser() === event.owner.id && <Button className="update-delete"><Link to={`/eventIndex/${id}/update`} calassName="update-delete-link">Update / Delete</Link></Button> }


          <div className="event-description">{description}</div>
          <div className="">{date}</div>
          <div className="">{distance} km</div>        
          <div className="">{website}</div>
          <div className="">{genres[0].name}</div>
          <div className="">{company}</div>
          <div className=""></div>
          <img className="imgDr" src={ image }/>
        </div>
      </div>
    </>
  )
}