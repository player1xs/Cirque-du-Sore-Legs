import axios from 'axios'
import { formToObj, getToken } from '../helpers/common'
import { redirect } from 'react-router-dom'

export async function createEvent(request) {
  console.log(request)
  // const data = await formToObj(request)
  // setTimeout(console.log(data), 5000)
  return await axios.post('/api/events/', request, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}

// export async function updateOrDeleteEvent(request, id) {
//   // console.log(request)
//   // console.log(id)
//   let data = await formToObj(request)
//   // setTimeout(console.log(data), 5000)

export async function updateEvent(data, id) {
  return await axios.put(`/api/events/${id}/`, data, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}

export async function deleteEvent(request, id) {
  return await axios.delete(`/api/events/${id}/`, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}


export async function createOrDeleteComment(request, eventId, commentId) {
  let data = await formToObj(request)

  if (data.intent === 'create') {
    return await axios.post(`/api/events/${eventId}/comments`, data, {
      validateStatus: () => true,
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  }
  if (data.intent === 'delete') {
    await axios.delete(`/api/events/${eventId}/comments/${commentId}`, {
      validateStatus: () => true,
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
    return redirect(`/eventIndex/${eventId}`)
  }
}