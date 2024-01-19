import { useEffect, useState } from "react"
import { useActionData, useLoaderData, useNavigate, Link } from "react-router-dom"
import { updateEvent } from "../utils/actions/event"
import Container from "react-bootstrap/esm/Container"
import ImageUploadField from "./ImageUploadField"


export default function EventUpdate() {
  
  const res = useActionData()
  const navigate = useNavigate()
  const event = useLoaderData()

  useEffect(() => {
    console.log(res)
    if (res?.status === 202) {
      console.log('update success')
      navigate(`/eventIndex/${res.data.id}/`)
    }
  }, [res, navigate])

  const [formData, setFormData] = useState({
    event_name: event.event_name,
    company: event.company,
    address: event.address,
    date: event.date,
    description: event.description,
    distance: event.distance,
    image: event.image,
    website: event.website,
    genres: event.genres,
  })

  function handleChange(e) {
    if (e.target.name === 'genres') {
      console.log('anything')
    setFormData({ ...formData, [e.target.name]: [parseInt(e.target.value)] })
    }
    else {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    }
  }

  async function handleSubmit(e, id) {
    console.log('handle submit reached')
    try {e.preventDefault()
      const res = await updateEvent(formData, id)
      if (res?.status === 200) {
        console.log('update success')
        navigate(`/eventIndex/${res.data.id}/`)
      }
      console.log(res.status)
      console.log(res.data)}
    catch (error){console.log()}
  }

  return (
    <>
      <div className="content">
        <h2>EventUpdate</h2>
        <Container fluid className="create-container overflow-auto">
          <form onSubmit={(e) => handleSubmit(e, event.id)} >
            <label form="event_name">Event Name</label>
            <input type="text" name="event_name" placeholder="Event Name..." onChange={handleChange} defaultValue={event.event_name} />
            <label form="company">Organiser</label>
            <input type="text" name="company" placeholder="Organiser..." onChange={handleChange} defaultValue={event.company} />
            <label form="address">Address</label>
            <input type="text" name="address" placeholder="Address..." onChange={handleChange} defaultValue={event.address} />
            <label form="data">Date</label>
            <input type="date" name="date" placeholder="Date..." onChange={handleChange} defaultValue={event.date} />
            <label form="description">Description</label>
            <input type="text" name="description" placeholder="Description..." onChange={handleChange} defaultValue={event.description} />
            <label form="distance">Distance</label>
            <input type="number" name="distance" placeholder="Distance" onChange={handleChange} defaultValue={event.distance} />
            <label form="website">Website</label>
            <input type="text" name="website" placeholder="Website..." onChange={handleChange} defaultValue={event.website} />
            <label form="genres">Genre</label>
            <select name="genres" id="genres" onChange={handleChange} defaultValue={event.genres}>
              <option value="1">Road</option>
              <option value="2">Trail</option>
              <option value="5">Cross-Country</option>
              <option value="3">OCR</option>
              <option value="6">Ninja-Sport</option>
              <option value="4">Multi-Sport</option>
            </select>
            {/* <ImageUploadField image={image} setImage={setIamge} /> */}
            <ImageUploadField setFormData={setFormData} formData={formData} />
            <button type="submit">Create Event</button>
            {/* <Button type="submit">Create Event2</Button> */}
          </form>
          <Link to={`/eventIndex`} className="backBtn">Delete</Link>
          </Container>
      </div>
    </>
  )
}