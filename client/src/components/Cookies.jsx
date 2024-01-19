import { Link } from "react-router-dom"

export default function Cookie() {
  return (
    <>
      <div className="content">
        <h2 className="hometitle">COOOOOOOOKIIIIIIIIEEEEEEES</h2>
        <div className="cookies-page">
          <img src="https://img.buzzfeed.com/buzzfeed-static/static/2017-05/31/7/enhanced/buzzfeed-prod-fastlane-02/original-28853-1496228970-6.png?crop=967:506;0,29%26downsize=1250:*" />
        </div>
          <Link to={`/eventIndex`} className="backBtn">Back to List</Link>
      </div>
    </>
  )
}



