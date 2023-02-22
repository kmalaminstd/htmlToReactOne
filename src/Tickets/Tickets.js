


function Tickets(){

    const TicketInfo = [
        {
            type: 'Early Bird Ticket',
            price: '$399',
            desc: 'All days entry pass for all the events.',
            remaining: 6
        },
        {
            type: 'Workshop Pass',
            price: '$199',
            desc: 'Entry pass for each workshop',
            remaining: 42
        }

    ]

    return (
        <div className="container-fluid tickets" id="buy tickets">
            <div className="row me-row content-ct">
                <h2 className="row-title">Buy Tickets</h2>

                    {
                        TicketInfo.map( (ticketDet, i) => {
                            return(
                                <div key={i} className={`col-md-4 col-sm-6 ${i === 0? 'col-md-offset-2': ''} `}>
                                    <h3>{ticketDet.type}</h3>
                                    <p className="price">{ticketDet.price}</p>
                                    <p>{ticketDet.desc}</p>
                                    <a href="a" className="btn btn-lg btn-red"
                                        >Buy <small>({ticketDet.remaining} remaining)</small></a
                                    >
                                 </div>
                            )
                        })
                    }
                    
                    
            </div>
        </div>
    )
}

export default Tickets