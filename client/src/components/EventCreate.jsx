import { useEffect, useState } from "react" //useMemo (perhaps for date)
import { useActionData, useNavigate, Form } from "react-router-dom"
import Container from "react-bootstrap/esm/Container"
import Button from "react-bootstrap/Button"

import ImageUploadField from "./ImageUploadField.jsx"


export default function EventCreate() {
  
  // const options = useMemo(() => countryList().getData(), []) - perhaps for date
  const res = useActionData()
  const navigate = useNavigate()
  
  
  const [ image, setIamge ] = useState('')

  useEffect(() => {
    if (res?.status === 201) {
      console.log(' create success ')
      navigate(`/eventIndex/${res.data.id}`)
    }
  }, [res, navigate])

  return (
    <>
      <div className="content">
        <h2>Event Create</h2>
        <Container fluid className="create-container overflow-auto">
          <Form className="create-form" method="POST">
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
            </select>
            <ImageUploadField image={image} setImage={setIamge} />
            <Button className="createBtn" type="submit">Create Event</Button>
            {res?.data?.message && <p className="danger bold mt-4">{res.data.message}</p>}
          </Form>
        </Container>
      </div>
    </>
  )
}