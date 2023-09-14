import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './Layout.css'





const Layout = () => {

    const linkStyle = {
        color: 'black', // Set the color to black
        textDecoration: 'none', // Remove underlines from the links
        marginRight: '20px' // Add some spacing between the links
    };

  return (
    <>

      <div className='container'>
            <header className='navbar'>
                <img
                    alt=""
                    src={'./assets/RGLogo.png'}
                    width="45"
                    height="50"
                    className="d-inline-block align-top"
                    />{''}

                    <Link to="/" style={linkStyle}>Home</Link>
                    <Link to="/blogs" style={linkStyle}>Portfolio</Link>
                    <Link to="/contact" style={linkStyle}>Contact</Link>
                    <Link to="/skills" style={linkStyle}>Skills</Link>
            </header>  

            

            <footer className='myFooter'>

            </footer>

      </div>
     

      <Outlet />
    </>
  )
};

export default Layout;


/*
 <Navbar className="bg-body-tertiary" >
        <Container class="mynavbar">
          <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
        </ul>

        </Container>
      </Navbar>
*/

/*
   <Button variant="outline-light" > 
            <Link to="/">Home</Link>
            </Button>

            <Button variant="outline-dark" > 
            <Link to="/blogs">Portfolio</Link>
            </Button>

            <Button variant="outline-dark" > 
            <Link to="/contact">Contact</Link>
            </Button>

            <Button variant="outline-dark" > 
            <Link to="/skills">Skills</Link>
            </Button>
          
            <Link to="/">Homee</Link>
*/