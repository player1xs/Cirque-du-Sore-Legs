import { useLoaderData, Link } from "react-router-dom"
import { activeUser } from "../utils/helpers/common"
import Button from 'react-bootstrap/Button'

import { GiRunningShoe } from "react-icons/gi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { TbWorldWww } from "react-icons/tb";
import { BsPersonVideo3 } from "react-icons/bs";

import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
// import Container from 'react-bootstrap/Container'
// import { activeUser } from '../utils/helper/common'

const customIcon = new Icon({
  iconUrl: "../src/images/running_1445114.png",
  iconSize: [38, 38]
})

export default function EventSingle() {
  
  const event = useLoaderData()
  const { event_name, description, id, date, image, distance, website, genres, company, lat, long} = event

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
          <div className="information">
            <div className="deeets">
              <div className="info"><FaRegCalendarAlt /> Date: {date}</div>
              <div className="info"><GiRunningShoe /> Distance: {distance} km</div>        
              <div className="info"><BiCategory /> Category: {genres[0].name}</div>
              <div className="info" ><TbWorldWww /> Website: <a className="info2" href={website}>Click here to book!</a></div>
              <div className="info"><BsPersonVideo3 /> Organiser: {company}</div>
            </div>
            <div className="single-map">
              <MapContainer center={[lat, long]} zoom={7} className="map2">
            
                <TileLayer
                // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
                />
                <Marker position={[lat, long]} icon={customIcon}></Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}