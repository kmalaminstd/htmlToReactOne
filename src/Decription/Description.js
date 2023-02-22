function Description(){

    const contents = [{
        head: 'Buy Early Bird Tickets',
        desc: "Super cool discounts if you purchase early bird tickets now. Limited tickets available with some awesome perks and goodies!",
        titleImg: 'ti-ticket'
    },{
        head: 'Expert Speakers',
        desc: "Best in className expert speakers who have extensive knowledge of the topic. All speakers are curated by the panel of experts.",
        titleImg: 'ti-microphone'
    },{
        head: 'People around the globe!',
        desc: "eet the people attending this event around the globe. This will be the best opportunity to meet and greet people from your industry.",
        titleImg: 'ti-world'
    }]

    return (
        <div className="container">

        <div className="row me-row content-ct">

            <h2 className="row-title">Why This Event Is Super Cool?</h2>

            {contents.map( (cont, i) => {
                return (
                    <div key={i} className="col-md-4 feature">
                        <span className={cont.titleImg}></span>
                        <h3>{cont.head}</h3>
                        <p>
                            {cont.desc}
                        </p>
                    </div>
                )
            })}

            

            
        </div>
      </div>
    )
}

export default Description