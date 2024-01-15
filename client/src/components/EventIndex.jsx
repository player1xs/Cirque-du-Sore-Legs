import { useLoaderData, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


export default function EventIndex() {
  
  const allEvents = useLoaderData()

  const [idList, setIdList] = useState([])
  const [idRnd, setIdRnd] = useState(0)

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


  useEffect(() => {
    const ids = allEvents.map(event => {
      return event._id
    })
    setIdList(ids)
  }, [allEvents])


  useEffect(() => {
    const i = Math.floor(Math.random() * idList.length)
    setIdRnd(idList[i])
  }, [idList])




  return (
    <>
    <div className="content">
      <div className="content-title">  
        <h2>Event List</h2>
      </div>
      <div className="content-filter">
        <input id="search" name="search" placeholder="Search..." value={filters.search} onChange={handleChange} className="searchbar"/>
        <Link to={`/eventIndex/${idRnd}`} className="randomBtn">Random Button</Link>
      </div>
      <Container fluid className="eventList overflow-auto">
        {filteredEvents.map(event => {
          const { id, event_name, distance, genres, image, date } = event
          return (
            <Col
              key={id}
              as={Link}
              to={`/eventIndex/${id}`}
            >
              <div className="eventSgl-container">
                <div className="eventImage">{image}</div>
                <div className="infobox">
                  <div className="detailsbox">
                    <div className="name">{event_name}</div>
                    <div className="detailsbox-inner">
                      <div className="genre-type">{genres}</div>
                      <div className="distance">{distance}</div>
                    </div>
                  </div>
                  <div className="datebox">
                    <div className="datedisplay">{date}</div>
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