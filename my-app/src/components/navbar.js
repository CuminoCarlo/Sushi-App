import logo from '../images/logo.png'
function Navbar (){
    return(
        <nav class="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
                <span className="navbar-brand mb-0 h1">Fullstack Sushi</span>
            </div>
    </nav>
    );
}

export default Navbar;