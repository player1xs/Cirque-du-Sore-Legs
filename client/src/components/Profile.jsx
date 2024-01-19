import { Link } from "react-router-dom"
// import { activeUser } from "../utils/helpers/common"

export default function Profile() {

  // const user = useLoaderData()
  


  return (
    <>
      <div className="content">
        <div className="profile-container">
          <h2>Profile</h2>
          <Link to={`/eventIndex/create`} className="backBtn">Create Event</Link>
          {/* <div className="profile-list">
            <ul className="list">
              {user.data.eventsCreated.map(event => {
                const { id, event_name} = event
                return <li key={id} className="listed">{event_name}</li>
                })}
            </ul>
          </div> */}
        </div>
      </div>
    </>
  )
}