

function SideBtn(){

  const menuNames = ['Home', 'Speakers', 'Buy Tickets', 'Schedule']

    return(
        <nav className="side-menu">
      <ul>
        {menuNames.map( (menuname, i) => {
          return (
            <li key={i}>
              <a href={"#" + menuname.toLowerCase()} className="page-scroll">
                <span className="menu-title">{menuname}</span>
                <span className="dot"></span>
              </a>
        </li>
          )
        } )}

      </ul>
    </nav>
    )
}

export default SideBtn;