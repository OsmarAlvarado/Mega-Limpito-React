import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import './AboutUs.css'


const AboutUs = (props) => {

    return (
        <div className='aboutUs'>
            <h1 className=''>{props.title}</h1>
            <article className=''>
                <div className=''>
                    <h3>¿Quienes somos?
                    </h3>
                    <p><span>Mega Limpieza</span> es una empresa de talento joven y dinámico
                        especializado en la realizacion y gestion de servicios de limpieza profesional, servicios de indole específico
                        de desinfeccion y consejos por medio de nuestras redes sociales y web para nuestros clientes.
                    </p>
                    <br />
                    <p>Tenemos mas de 15 años de experiencia desarrollando nuestra actividad. con inicios en Venezuela
                        y radicacion actual en España. Con el objetivo de ofrecer nuestra excelente calidad en cada uno de
                        nuestros servicios.
                    </p>
                    <Link to={'/Catalogo'} className='cleanUp' >
                        <Button classButton='' nameButton='Catálogo' />
                    </Link>

                </div>
                <div className=''>
                    <img src={props.src} alt={props.alt} />
                </div>
            </article>
        </div>
    )

}

export default AboutUs