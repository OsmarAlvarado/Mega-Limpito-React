import FooterDown from '../FooterDown/FooterDown'
import './Footer.css'
import LopoMegaBlack from '../../Assets/Image/Logo-backBlack.png'
import FacebookLogo from '../../Assets/Image/facebook-logo-3-1.png'
import Instagramlogo from '../../Assets/Image/instagram-logo.png'
import GmailLogo from '../../Assets/Image/logo.gmail.png'
import { Link } from 'react-router-dom'


const Footer = () => {

    return (
        <article className='footer'>
            <div className='rowFooter'>
                <div className='TextContent'>
                    <h4>Tambien puedes.</h4>
                    <p>Ubicarnos por nuestras redes sociales o escribirnos a nuestro correo electrónico</p>
                </div>
                <div className='imgLogo'>
                    <Link to={'/'} >
                        <img src={LopoMegaBlack} alt="Logo-megalimpieza" />
                    </Link>
                </div>
                <div className='RowSocial'>

                    <a href="https://www.facebook.com/profile.php?id=100076604168289">
                        <img className='faceLogo' src={FacebookLogo} alt="facebook-logo" />
                    </a>

                    <a href="https://instagram.com/mega_limpieza.es?igshid=ZDdkNTZiNTM=">
                        <img className='instLogo' src={Instagramlogo} alt="instagram-logo" />
                    </a>
                    <a href="https://mail.google.com/mail/u/0/#inbox">
                        <img className='gmailLogo' src={GmailLogo} alt="gmail-logo" />
                    </a>
                </div>

            </div>

            <FooterDown />
        </article>
    )


}

export default Footer