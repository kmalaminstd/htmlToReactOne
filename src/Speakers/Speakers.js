function Speakers(){

    const spakersDetails = [
        {
            head: 'Simon Collins',
            desc: 'Simon is designer and partner at Fictivekin and has worked in a variety of situations for bands, record labels, governments, polar explorers, and most other things...',
            socialLinks: [
                {
                    link: 'facebook.com',
                    socialclassName: 'ti-facebook'
                },
                {
                    link: 'twitter.com',
                    socialclassName: 'ti-twitter-alt'
                },
                {
                    link: 'linkedin.com',
                    socialclassName: 'ti-linkedin'
                }
            ]
        },
        {
            head: 'Stephanie Troeth',
            desc: 'Stephie is a user experience researcher and designer. In over 15 years of working on the web, she has worn many hats, including a product lead for a tech startup in publishing...,',
            socialLinks: [
                {
                    link: 'facebook.com',
                    socialclassName: 'ti-facebook'
                },
                {
                    link: 'twitter.com',
                    socialclassName: 'ti-twitter-alt'
                },
                {
                    link: 'linkedin.com',
                    socialclassName: 'ti-linkedin'
                }
            ]
        },
        {
            head: 'Harry Roberts',
            desc: 'Harry is a freelance designer, developer, writer, speaker and front-end architect from the UK, previously working as sdfsds <br/> Senior UI Developer for Sky. He Tweets at...',
            socialLinks: [
                {
                    link: 'facebook.com',
                    socialclassName: 'ti-facebook'
                },
                {
                    link: 'twitter.com',
                    socialclassName: 'ti-twitter-alt'
                },
                {
                    link: 'linkedin.com',
                    socialclassName: 'ti-linkedin'
                }
            ]
        },
        {
            head: 'Geri Coad',
            desc: 'Harry is a freelance designer, developer, writer, speaker and front-end architect from the UK, previously working as Senior UI Developer for Sky. He Tweets at...',
            socialLinks: [
                {
                    link: 'facebook.com',
                    socialclassName: 'ti-facebook'
                },
                {
                    link: 'twitter.com',
                    socialclassName: 'ti-twitter-alt'
                },
                {
                    link: 'linkedin.com',
                    socialclassName: 'ti-linkedin'
                }
            ]
        },
        {
            head: 'Andy Budd',
            desc: 'Harry is a freelance designer, developer, writer, speaker and front-end architect from the UK, previously working as Senior UI Developer for Sky. He Tweets at...',
            socialLinks: [
                {
                    link: 'facebook.com',
                    socialclassName: 'ti-facebook'
                },
                {
                    link: 'twitter.com',
                    socialclassName: 'ti-twitter-alt'
                },
                {
                    link: 'linkedin.com',
                    socialclassName: 'ti-linkedin'
                }
            ]
        },
        {
            head: 'Christian Lauke',
            desc: 'Harry is a freelance designer, developer, writer, speaker and front-end architect from the UK, previously working as Senior UI  Developer for Sky. He Tweets at...',
            socialLinks: [
                {
                    link: 'facebook.com',
                    socialclassName: 'ti-facebook'
                },
                {
                    link: 'twitter.com',
                    socialclassName: 'ti-twitter-alt'
                },
                {
                    link: 'linkedin.com',
                    socialclassName: 'ti-linkedin'
                }
            ]
        }
        
    ]

    return(
        
        

          <div className="container">
            <div className="row me-row content-ct speaker" id="speakers">
                <h2 className="row-title">Meet the Speakers</h2>


                {spakersDetails.map( (speakerInfo, i) => {
                    return(
                        <div className="col-md-4 col-sm-6 feature" key={i}>
                        <img src={`img/speaker-${i+1}.png`} alt="icon" className="speaker-img" />
                        <h3>{speakerInfo.head}</h3>
                        <p>
                            {speakerInfo.desc}
                        </p>
                        <ul className="speaker-social">
                            {speakerInfo.socialLinks.map((socialLink, j) => {
                                return(
                                    <li key={j}>
                                        <a href={socialLink.link}><span className={socialLink.socialclassName}></span></a>
                                    </li>
                                )
                            })}
                        </ul>
                        </div>
                    )
                } )}

                

        
            </div>
          </div>
          

         

     
        
      
    
    )
}

export default Speakers