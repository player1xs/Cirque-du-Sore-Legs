import discount from '../images/add.jpg'

export default function AdColumn() {
  return (
    <>
      <div className="advert">
        {/* <div className="sponsored">sponsored Event</div> */}
        <div className="discount">
          <img src={discount} className="discount-imaage"/>
          <p className="discount-text">To get 20% off all UK Spartan events, use: SPARTANBENEDICT</p>
        </div>
      </div>
    </>
  )
}