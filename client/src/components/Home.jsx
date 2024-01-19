import Hero from "./Hero.jsx"

export default function Home() {
  return (
    <>
      <div className="content">
        <h2 className="hometitle">Welcome to Cirque du Sore-Legs!</h2>
        <Hero />
        <p className="hometext">
          Formerly known as: <cite>Chafing the Dream</cite>, <cite>Kiss my Asphalt</cite>, or up until recently <cite>We&apos;ve got the Runs...</cite> We are an event running listing site, covering all genres and types of racing; from road and trail to OCR and Multi-Sport.</p>
          <p className="hometext"> Disclaimer: We are not affiliated with any race-organistaion. (This page is not an official company.)
        </p>
      </div>
    </>
  )
}