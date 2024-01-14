import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)
  console.log('Specific error layouts ->', error.status)
  return (
    <>
      <div id='error-page'>
        <div className="error-box">
        <iframe src="https://chromedino.com/color/" frameBorder="0" scrolling="no" width="100%" height="100%" loading="lazy"></iframe>
        <style type="text/css"></style>
        </div>
      </div>
    </>
  )
}