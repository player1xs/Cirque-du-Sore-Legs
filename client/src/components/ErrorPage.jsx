import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)
  console.log('Specific error layouts ->', error.status)
  return (
    <>
      <div id='error-page'>
        <div className="error-box">
          <h2 className="error-title">404 Not Found</h2>
          <iframe src="https://chromedino.com/" scrolling="no" width="100%" height="100%" loading="lazy" className="dino"></iframe>
          <Link to={`/eventIndex`} className="backBtn">Back to List</Link>
        </div>
      </div>
    </>
  )
}