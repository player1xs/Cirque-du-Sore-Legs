import { useLoaderData, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import { FaRegCalendarAlt } from "react-icons/fa";
// import { GiPathDistance } from "react-icons/gi";
import { GiRunningShoe } from "react-icons/gi";
import Mapbox from "./Mapbox.jsx";
import '../styles/components/MapBox.scss';

export default function EventIndex() {
  
  const allEvents = useLoaderData()

  // const [idList, setIdList] = useState([])
  // const [idRnd, setIdRnd] = useState(0)

  const [distance, setDistance] = useState([])
  const [filters, setFilters] = useState({
    Distance: 'All'
  })
  const [filteredEvents, setFilteredEvents] = useState([])


  //Filter Function
  function handleChange(e) {
    const newObj = {
      ...filters,
      [e.target.name]: e.target.value
    }
    setFilters(newObj)
  }



  // EFFECTS -------------------------------------------------------------------------
  useEffect(() => {
    const pattern = new RegExp(filters.search, 'i')
    const filteredArray = allEvents.filter(event => {
      return (pattern.test(event.event_name) || pattern.test(event.genres) || pattern.test(event.company) || pattern.test(event.distance))
      //might change above to an && so sort and search by distance (check vinous)
    })
    setFilteredEvents(filteredArray)

    if (allEvents.length > 0 && distance.length === 0) {
      const distanceArr = [...new Set(allEvents.map(event => event.distance))].filter(Boolean)
      setDistance(distanceArr)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters])


  // useEffect(() => {
  //   const ids = allEvents.map(event => {
  //     return event._id
  //   })
  //   setIdList(ids)
  // }, [allEvents])


  // useEffect(() => {
  //   const i = Math.floor(Math.random() * idList.length)
  //   setIdRnd(idList[i])
  // }, [idList])

  


  return (
    <>
    <div className="content">
      <div className="content-title">  
        <h2>Event List</h2>
        <div className="indexmap">
          <Mapbox />
        </div>
        <p className="indextext">
          Browse the events below if there is something you are looking to join or find some inspiration, use the search bar to specify, or take a stab at the map above and book a trip!
        </p>
        <div className="content-filter">
          <input id="search" name="search" placeholder="Search..." value={filters.search} onChange={handleChange} className="searchbar"/>
        </div>
      </div>
      <Container fluid className="eventList overflow-auto">
        {filteredEvents.map(event => {
          const { id, event_name, distance, genres, image, date } = event
          console.log(genres)
          return (
            <Col
              key={id}
              as={Link}
              to={`/eventIndex/${id}`}
            >
              <div className="eventSgl-container">
                <div className="eventImage" style={{ backgroundImage: `url(${image})`}}></div>
                <div className="infobox">
                  <div className="detailsbox">
                    <div className="name">{event_name}</div>
                    <div className="detailsbox-inner">
                      <div className="genre-type">{genres[0].name}</div>
                      <div className="distance"><GiRunningShoe /> {distance}km</div>
                    </div>
                  </div>
                  <div className="datebox">
                    <div className="datedisplay"><FaRegCalendarAlt />{date}</div>
                  </div>
                </div>
              </div>
            </Col>
          )
        })}
      </Container>
    </div>
    </>
  )
}