export async function getAllEvents(){
  const res = await fetch('/api/events')
  return res.json()
}

export async function getSingleEvent(id){
  const res = await fetch(`/api/events/${id}`)
  return res.json()
}