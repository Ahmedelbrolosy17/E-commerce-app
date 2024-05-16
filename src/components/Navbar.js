import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function NavBar(){
    let cart = useSelector(state=>state.soldProducts)
    return(
        <>
            <Navbar expand="lg" style={{backgroundColor:"rgb(20 54 73)"}}>
                <Container>
                    <Link to='/' className='navbar-brand' >our website</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className=" me-auto">
                        <Link to='/' className='nav-link m-lg-2'>Home</Link>
                        <Link to='cart' className='nav-link m-lg-2'>cart-{cart.length}</Link>
                        <Link to='shipping' className='nav-link m-lg-2'>shipping</Link>
                        <Link to='about' className='nav-link m-lg-2'>about</Link>
                        <Link to='contact' className='nav-link m-lg-2'>contact us</Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}