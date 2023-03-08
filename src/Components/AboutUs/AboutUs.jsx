import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import './AboutUs.css'


const AboutUs = (props) => {

    const { about, aboutT, abaoutR, rowO, aboutH, abaoutP, abaouPT, abaoutB, imgR, imgC } = props

    return (
        <div className={about}>
            <h1 className={aboutT}>{props.title}</h1>
            <article className={abaoutR}>
                <div className={rowO}>
                    <h3 className={aboutH}>¿Quienes somos?
                    </h3>
                    <p className={abaoutP}><span>Mega Limpieza</span> es una empresa de talento joven y dinámico
                        especializado en la realizacion y gestion de servicios de limpieza profesional, servicios de indole específico
                        de desinfeccion y consejos por medio de nuestras redes sociales y web para nuestros clientes.
                    </p>

                    <p className={abaouPT}>Tenemos mas de 15 años de experiencia desarrollando nuestra actividad. con inicios en Venezuela
                        y radicacion actual en España. Con el objetivo de ofrecer nuestra excelente calidad en cada uno de
                        nuestros servicios.
                    </p>
                    <Link to={'/Catalogo'} >
                        <Button classButton={abaoutB} nameButton='Catálogo' />
                    </Link>

                </div>
                <div className={imgR}>
                    <img className={imgC} src={props.src} alt={props.alt} />
                </div>
            </article>
        </div>
    )

}

export default AboutUs