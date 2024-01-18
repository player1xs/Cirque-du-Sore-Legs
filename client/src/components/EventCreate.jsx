import { useEffect, useState } from "react" //useMemo (perhaps for date)
import { useActionData, useNavigate } from "react-router-dom"
import Container from "react-bootstrap/esm/Container"
// import Button from "react-bootstrap/Button"
import { createEvent } from "../utils/actions/event.js"

import ImageUploadField from "./ImageUploadField.jsx"


export default function EventCreate() {
  
  // const options = useMemo(() => countryList().getData(), []) - perhaps for date
  const res = useActionData()
  const navigate = useNavigate()
  
  // const [ image, setIamge ] = useState('')

  const [formData, setFormData] = useState({
    event_name: '',
    company: '',
    address: '',
    date: '',
    description: '',
    distance: '',
    image: '',
    website: '',
    genres: [1],
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

  async function handleSubmit(e) {
    console.log('handle submit reached')
    try {e.preventDefault()
      const res = await createEvent(formData)
      if (res?.status === 200) {
        console.log('update success')
        navigate(`/eventIndex/${res.data.id}/`)
      }
      console.log(res.status)
      console.log(res.data)}
    catch (error){console.log()}
  }

  useEffect(() => {
    if (res?.status === 201) {
      console.log(' create success ')
      navigate(`/eventIndex/${res.data.id}/`)
    }
  }, [res, navigate])

  return (
    <>
      <div className="content">
        <h2>Event Create</h2>
        <Container fluid className="create-container overflow-auto">
          <form onSubmit={handleSubmit} >
            <label form="event_name">Event Name</label>
            <input type="text" name="event_name" placeholder="Event Name..." onChange={handleChange} value={formData.event_name} />
            <label form="company">Organiser</label>
            <input type="text" name="company" placeholder="Organiser..." onChange={handleChange} value={formData.company} />
            <label form="address">Address</label>
            <input type="text" name="address" placeholder="Address..." onChange={handleChange} value={formData.address} />
            <label form="data">Date</label>
            <input type="date" name="date" placeholder="Date..." onChange={handleChange} value={formData.date} />
            <label form="description">Description</label>
            <input type="text" name="description" placeholder="Description..." onChange={handleChange} value={formData.description} />
            <label form="distance">Distance</label>
            <input type="number" name="distance" placeholder="Distance" onChange={handleChange} value={formData.distance} />
            <label form="website">Website</label>
            <input type="text" name="website" placeholder="Website..." onChange={handleChange} value={formData.website} />
            <label form="genres">Genre</label>
            <select name="genres" id="genres" onChange={handleChange} value={formData.genres}>
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
          {/* <Form className="create-form" method="POST">
            <label hidden htmlFor="event_name">Event Name</label>
            <input type="text" name="event_name" placeholder="* Event Name"/>
            <label hidden htmlFor="company">Organiser/Company</label>
            <input type="text" name="company" placeholder="* Organiser/ Company"/>
            <label hidden htmlFor="address">Address</label>
            <input type="text" name="address" placeholder="* Address"/>
            <label hidden htmlFor="date">Date</label>
            <input type="date" name="date" placeholder="* Date" />
            <label hidden htmlFor="description">Description</label>
            <input type="text" name="description" placeholder="* Description"/>
            <label hidden htmlFor="distance">Distance</label>
            <input type="number" name="distance" placeholder="* Distance"/>
            <label hidden htmlFor="website">Website</label>
            <input type="text" name="website" placeholder="* Website"/>
            <label hidden htmlFor="genres">Genres</label>
            <select className="genreselect">
              <option value="default">Genre</option>
              <option value="Road">Road</option>
              <option value="Trail">Trail</option>
              <option value="Cross-Country">Cross-Country</option>
              <option value="OCR">OCR</option>
              <option value="Multi">Multi</option>
              <option value="Multi-Sport">Multi-Sport</option>
            </select> */}
            
            {/* <Button className="createBtn" type="submit">Create Event</Button> */}
            {res?.data?.message && <p className="danger bold mt-4">{res.data.message}</p>}
          {/* </Form> */}
        </Container>
      </div>
    </>
  )
}