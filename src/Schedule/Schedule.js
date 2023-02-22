import TabNavs from "./Tabs/TabNavs"
import Tabs from "./Tabs/Tabs"

function Schedule(){
    return (
        <div className="container">
            <div className="row me-row schedule" id="schedule">
                <h2 className="row-title content-ct">Event Schedule</h2>
                <div className="col-md-12">
                
                {/* tab navs  */}
                <TabNavs />

                {/* tab panes */}

                <Tabs />
                
                </div>
            </div>
        </div>
    )
}

export default Schedule