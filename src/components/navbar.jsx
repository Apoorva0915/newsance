import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" aria-label="Fifth navbar example">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/newsance">Newsance</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample05">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/newsance"style={{color:"red"}}  >Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/business" style={{color:"red"}}>Business</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entertainment" style={{color:"red"}}>Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/general" style={{color:"red"}}>General</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/health" style={{color:"red"}}>Health</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/science" style={{color:"red"}}>Science</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technology" style={{color:"red"}}>Technology</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sports" style={{color:"red"}}>Sports</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}


export default Navbar