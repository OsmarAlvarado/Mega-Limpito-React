import './NavBar.css'
import LogoBlue from '../../Assets/Image/Logo-backBlue.png'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from '../Button/Button';




const NavBar = (props) => {

    const { alt } = props

    return (
        <header className='header'>
            <Link to={'/'} >
                <img className='logoBlue' src={LogoBlue} alt={alt} />
            </Link>

            <article className='menu'>
                <Link to={'/'} className='homepage'>INICIO</Link>
                <Link to={'/Empresa'} className='company'>EMPRESA</Link>
                <Link to={'/Limpiezas'} className='cleanUp' >
                    LIMPIEZAS
                    <NavDropdown title="" id="nav-dropdown">
                        <NavDropdown.Item ><Link to={'/Particulares'} className=''>Particulares</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to={'/Fin-de-obra'} className=''>Fin de obra</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to={'/Muebles'} className=''>Muebles</Link></NavDropdown.Item>
                    </NavDropdown>
                </Link>
                <Link to={'/Blog'} className='blog'>BLOG</Link>
                <Link to={'/Contacto'} className='contact'>CONTACTO</Link>
            </article>

            <Link to={'/Presupuesto'} className='budge'>
                <Button classButton='budgeHome' nameButton='PRESUPUESTO' />
            </Link>

        </header>
    )
}

export default NavBar