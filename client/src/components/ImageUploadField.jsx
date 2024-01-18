import axios from "axios"

// eslint-disable-next-line react/prop-types
export default function ImageUploadField({ formData, setFormData }) {

  async function handleImageUpload(e) {
    const preset = import.meta.env.VITE_UPLOAD_PRESET
    const file = e.target.files[0]
    const endpoint = import.meta.env.VITE_UPLOAD_URL

    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', preset)

    const { data: { secure_url} } = await axios.post(endpoint, data)
    setFormData({ ...formData, image:secure_url})
    // setImage(secure_url)
  }

  return (
    <>
      {formData.image ?
      <img src={formData.image} />
      :
      <input type="file" name="image" onChange={handleImageUpload} />
      }
      {/* <img src={image} alt='Event-Image' />
      <input type="hidden" name="image" value={image} className="imageUpload" />
      <input type="file" onChange={handleImageUpload} /> */}
    </>
  )

}