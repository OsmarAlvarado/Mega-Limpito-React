import FooterDown from '../FooterDown/FooterDown'
import './Footer.css'
import LopoMegaBlack from '../../Assets/Image/Logo-backBlack.png'
import FacebookLogo from '../../Assets/Image/logo-facebook.png'
import Instagramlogo from '../../Assets/Image/instagram-logo.png'
import GmailLogo from '../../Assets/Image/logo.gmail.png'


const Footer = () => {

    return (
        <article className='footer'>
            <div className=''>
                <div className=''>
                    <h4>Tambien puedes..</h4>
                    <p>Ubicarnos por nuestras redes sociales o escribirnos a nuestro correo electrónico</p>
                </div>
                <div>
                    <img src={LopoMegaBlack} alt="Logo-megalimpieza" />
                </div>
                <div>
                    <img src={FacebookLogo} alt="facebook-logo" />
                    <img src={Instagramlogo} alt="instagram-logo" />
                    <img src={GmailLogo} alt="gmail-logo" />
                </div>

            </div>

            <FooterDown />
        </article>
    )


}

export default Footer