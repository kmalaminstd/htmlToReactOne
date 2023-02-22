import Form from "./Form"
import TwitterPostSec from "./TwitterPostSec"
import CreditArea from "./CreditArea"

function Footer(){
    return (
            <div className="container-fluid footer">
                <div className="row contact">
                    <div className="col-md-6 contact-form">
                        

                        <Form />
                        
                    </div>

                      <TwitterPostSec />
                    
                        </div>

                        <CreditArea />
                    
            </div>
    )
}

export default Footer