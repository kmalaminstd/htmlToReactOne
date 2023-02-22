// import meetup from '../img/meetup-logo.png'
// import rocket from '../img/rocket.png'

function HeroArea(){
    return (
        <div>
          <div className="container-fluid">
        
        <div className="row hero-header" id="home">
          <div className="col-md-7">
            <img src="img/meetup-logo.png" alt="meetup logo" className="logo" />
            <h1>Attend the most awaited Conference of 2023</h1>
            <h3>to start you up with your business!</h3>
            <h4>20<sup>th</sup> to 22<sup>nd</sup> October, 2015</h4>
            <a href="#home" className="btn btn-lg btn-red"
              >Buy Tickets Now <span className="ti-arrow-right"></span
            ></a>
          </div>
          <div className="col-md-5 hidden-xs">
            <img src="img/rocket.png" alt="rocket logo" className="rocket animated bounce" />
          </div>
        </div>
        
      </div>

    </div>
    )
}

export default HeroArea