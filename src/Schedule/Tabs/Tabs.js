/* eslint-disable no-lone-blocks */
function Tabs(){

    const tabContents = [
        {
            'day-1':[
                {
                    mediaHead: '10am to 10:30am',
                    bio: 'THE DESIGNER’S GUIDE TO BEING ESSENTIAL',
                    mediaContent: ' Simon is designer and partner at Fictivekin and has worked in a variety of situations for bands, record labels, governments, polar explorers, and most other things.',
                    icon: 'img/speaker-1.png'
                },
                {
                    mediaHead: '10:45am to 11:30am',
                    bio: 'MODULAR DESIGN AT WORK',
                    mediaContent: ' Simon is designer and partner at Fictivekin and has worked in a variety of situations for bands, record labels, governments, polar explorers, and most other things.',
                    icon: 'img/speaker-2.png'
                },
                {
                    mediaHead: '12:00pm to 01:30pm',
                    bio: 'AN INTRODUCTION TO TOUCH AND POINTER EVENTS',
                    mediaContent: ' Simon is designer and partner at Fictivekin and has worked in a variety of situations for bands, record labels, governments, polar explorers, and most other things.',
                    icon: 'img/speaker-3.png'
                },
                {
                    mediaHead: '02:00pm to 03.30pm',
                    bio: 'WEB FONTS PERFORMANCE',
                    mediaContent: ' Simon is designer and partner at Fictivekin and has worked in a variety of situations for bands, record labels, governments, polar explorers, and most other things.',
                    icon: 'img/speaker-4.png'
                }
            ]
        },
        {
            'day-2':[
                {
                    mediaHead: '10am to 10:30am',
                    bio: 'MAKING DOG FOOD PART OF A BALANCED DIET',
                    mediaContent: ' Simon is designer and partner at Fictivekin and has worked in a variety of situations for bands, record labels, governments, polar explorers, and most other things.',
                    icon: 'img/speaker-5.png'
                },
                {
                    mediaHead: '10:45am to 11:30am',
                    bio: 'HANDS-ON WEB AUDIO',
                    mediaContent: ' Simon is designer and partner at Fictivekin and has worked in a variety of situations for bands, record labels, governments, polar explorers, and most other things.',
                    icon: 'img/speaker-6.png'
                },
                {
                    mediaHead: '12:00pm to 02.30pm',
                    bio: 'CONVERSION RATE OPTIMIZATION TECHNIQUES IN ECOMMERCEE',
                    mediaContent: ' Simon is designer and partner at Fictivekin and has worked in a variety of situations for bands, record labels, governments, polar explorers, and most other things.',
                    icon: 'img/speaker-1.png'
                },
                {
                    mediaHead: '02:00pm to 03.30pm',
                    bio: 'WEB FONTS PERFORMANCE',
                    mediaContent: ' Simon is designer and partner at Fictivekin and has worked in a variety of situations for bands, record labels, governments, polar explorers, and most other things.',
                    icon: 'img/speaker-2.png'
                }
            ]
        },
        {
            'day-3':[
                {
                    mediaHead: '10am to 10:30am',
                    bio: 'MAKING DOG FOOD PART OF A BALANCED DIET',
                    mediaContent: ' Simon is designer and partner at Fictivekin and has worked in a variety of situations for bands, record labels, governments, polar explorers, and most other things.',
                    icon: 'img/speaker-3.png'
                },
                {
                    mediaHead: '10:45am to 11:30am',
                    bio: 'HANDS-ON WEB AUDIO',
                    mediaContent: ' Simon is designer and partner at Fictivekin and has worked in a variety of situations for bands, record labels, governments, polar explorers, and most other things.',
                    icon: 'img/speaker-4.png'
                },
                {
                    mediaHead: '12:00pm to 02.30pm',
                    bio: 'CONVERSION RATE OPTIMIZATION TECHNIQUES IN ECOMMERCEE',
                    mediaContent: ' Simon is designer and partner at Fictivekin and has worked in a variety of situations for bands, record labels, governments, polar explorers, and most other things.',
                    icon: 'img/speaker-5.png'
                },
                {
                    mediaHead: '02:00pm to 03.30pm',
                    bio: 'WEB FONTS PERFORMANCE',
                    mediaContent: ' Simon is designer and partner at Fictivekin and has worked in a variety of situations for bands, record labels, governments, polar explorers, and most other things.',
                    icon: 'img/speaker-6.png'
                }
            ]
        }
    ]

    return(

        <div className="tab-content">

            {
                tabContents.map( (tCont, i) => {
                    
                    return(
                        <div key={i} role="tabpanel" className={`tab-pane fade in ${i === 0? 'active': '' }`} id={`day-${i+1}`}>
                            <div className="row">

                                {tCont[`day-${i+1}`].map( (dayCont, j) => {
                                        return (
                                            <div key={j} className="col-md-6">
                                                <div className="media">
                                                    <div className="media-left">
                                                    <a href="a">
                                                        <img className="media-object" src={dayCont.icon}
                                                        alt="..."
                                                        />
                                                    </a>
                                                    </div>
                                                    <div className="media-body">
                                                    <h4 className="media-heading">{dayCont.mediaHead}</h4>
                                                    <h5>{dayCont.bio}</h5>
                                                    <p>
                                                        {dayCont.mediaContent}
                                                    </p>
                                                    </div>
                                                </div>
                                            </div> 
                                        )
                                    } )
                                } 

                            </div>
                         </div>
                    )
                } )
            }

            


        </div>
        
        
    )
}

export default Tabs



{/* <div className="tab-content">
            <div role="tabpanel" className="tab-pane fade in active" id="day-1">
              <div className="row">

                <div className="col-md-6">
                  <div className="media">
                    <div className="media-left">
                      <a href="a">
                        <img
                          className="media-object"
                          src="img/speaker-1.png"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading">10am to 10:30am</h4>
                      <h5>THE DESIGNER’S GUIDE TO BEING ESSENTIAL</h5>
                      <p>
                        Simon is designer and partner at Fictivekin and has
                        worked in a variety of situations for bands, record
                        labels, governments, polar explorers, and most other
                        things.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="media">
                    <div className="media-left">
                      <a href="a">
                        <img
                          className="media-object"
                          src="img/speaker-2.png"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading">10:45am to 11:30am</h4>
                      <h5>MODULAR DESIGN AT WORK</h5>
                      <p>
                        Simon is designer and partner at Fictivekin and has
                        worked in a variety of situations for bands, record
                        labels, governments, polar explorers, and most other
                        things.
                      </p>
                    </div>
                  </div>
                </div>


                <div className="col-md-6">
                  <div className="media">
                    <div className="media-left">
                      <a href="a">
                        <img
                          className="media-object"
                          src="img/speaker-3.png"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading">12:00pm to 01:30pm</h4>
                      <h5>AN INTRODUCTION TO TOUCH AND POINTER EVENTS</h5>
                      <p>
                        Simon is designer and partner at Fictivekin and has
                        worked in a variety of situations for bands, record
                        labels, governments, polar explorers, and most other
                        things.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="media">
                    <div className="media-left">
                      <a href="a">
                        <img
                          className="media-object"
                          src="img/speaker-4.png"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading">02:00pm to 03.30pm</h4>
                      <h5>WEB FONTS PERFORMANCE</h5>
                      <p>
                        Simon is designer and partner at Fictivekin and has
                        worked in a variety of situations for bands, record
                        labels, governments, polar explorers, and most other
                        things.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>


            <div role="tabpanel" className="tab-pane fade" id="day-2">
              <div className="row">

                <div className="col-md-6">
                  <div className="media">
                    <div className="media-left">
                      <a href="a">
                        <img
                          className="media-object"
                          src="img/speaker-4.png"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading">10am to 10:30am</h4>
                      <h5>MAKING DOG FOOD PART OF A BALANCED DIET</h5>
                      <p>
                        Simon is designer and partner at Fictivekin and has
                        worked in a variety of situations for bands, record
                        labels, governments, polar explorers, and most other
                        things.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="media">
                    <div className="media-left">
                      <a href="a">
                        <img
                          className="media-object"
                          src="img/speaker-3.png"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading">10:45am to 11:30am</h4>
                      <h5>HANDS-ON WEB AUDIO</h5>
                      <p>
                        Simon is designer and partner at Fictivekin and has
                        worked in a variety of situations for bands, record
                        labels, governments, polar explorers, and most other
                        things.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="media">
                    <div className="media-left">
                      <a href="a">
                        <img
                          className="media-object"
                          src="img/speaker-2.png"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading">12:00pm to 01:30pm</h4>
                      <h5>
                        CONVERSION RATE OPTIMIZATION TECHNIQUES IN ECOMMERCE
                      </h5>
                      <p>
                        Simon is designer and partner at Fictivekin and has
                        worked in a variety of situations for bands, record
                        labels, governments, polar explorers, and most other
                        things.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="media">
                    <div className="media-left">
                      <a href="a">
                        <img
                          className="media-object"
                          src="img/speaker-1.png"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading">02:00pm to 03.30pm</h4>
                      <h5>PAPER PROTOTYPING APPLICATIONS</h5>
                      <p>
                        Simon is designer and partner at Fictivekin and has
                        worked in a variety of situations for bands, record
                        labels, governments, polar explorers, and most other
                        things.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>


            <div role="tabpanel" className="tab-pane fade" id="day-3">
              <div className="row">

                <div className="col-md-6">
                  <div className="media">
                    <div className="media-left">
                      <a href="a">
                        <img
                          className="media-object"
                          src="img/speaker-6.png"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading">10am to 10:30am</h4>
                      <h5>THE DESIGNER’S GUIDE TO BEING ESSENTIAL</h5>
                      <p>
                        Simon is designer and partner at Fictivekin and has
                        worked in a variety of situations for bands, record
                        labels, governments, polar explorers, and most other
                        things.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="media">
                    <div className="media-left">
                      <a href="a">
                        <img
                          className="media-object"
                          src="img/speaker-5.png"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading">10:45am to 11:30am</h4>
                      <h5>THE DESIGNER’S GUIDE TO BEING ESSENTIAL</h5>
                      <p>
                        Simon is designer and partner at Fictivekin and has
                        worked in a variety of situations for bands, record
                        labels, governments, polar explorers, and most other
                        things.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="media">
                    <div className="media-left">
                      <a href="a">
                        <img
                          className="media-object"
                          src="img/speaker-3.png"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading">12:00pm to 01:30pm</h4>
                      <h5>THE DESIGNER’S GUIDE TO BEING ESSENTIAL</h5>
                      <p>
                        Simon is designer and partner at Fictivekin and has
                        worked in a variety of situations for bands, record
                        labels, governments, polar explorers, and most other
                        things.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="media">
                    <div className="media-left">
                      <a href="a">
                        <img
                          className="media-object"
                          src="img/speaker-4.png"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading">02:00pm to 03.30pm</h4>
                      <h5>THE DESIGNER’S GUIDE TO BEING ESSENTIAL</h5>
                      <p>
                        Simon is designer and partner at Fictivekin and has
                        worked in a variety of situations for bands, record
                        labels, governments, polar explorers, and most other
                        things.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>


          </div> */}