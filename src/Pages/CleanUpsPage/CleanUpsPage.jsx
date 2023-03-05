import './CleanUpsPage.css'
import { Link } from "react-router-dom"
import Button from "../../Components/Button/Button"
import CardCategory from "../../Components/CardCategory/CardCategory"
import Particulares from '../../Assets/Image/Particulares-Cocina Grids Collage.png'
import Empresa from '../../Assets/Image/limpieza-oficinas.jpg'
import FinDeObra from '../../Assets/Image/Fin de Obra Servicio Grids Collage.png'
import Muebles from '../../Assets/Image/Mueble negro Grids Collage.png'
import Events from '../../Assets/Image/Eventos 1 Grids Collage.png'
import Consejos from '../../Assets/Image/Consejos2Img.jpg'



const CleanUpsPage = () => {

    return (
        <section className="cleanUp">
            <div className="UsService">
                <h1>Nuestros servicios de limpieza</h1>
                <p>En Mega Limpieza contamos con una amplia experiencia en todo tipo de servicios de limpieza y desinfección
                    para oficinas, empresas, locales comerciales, fin de obras, muebles (sofá, sillas, colchones, alfombras), consejos.
                    Ofrecemos un servicio integral de limpieza.
                </p>
                <div className="cardwrapper2">
                    <Link to={'/Particulares'} className='indivualPage'>
                        <CardCategory src={Particulares} title='Particulares' />
                    </Link>
                    <Link to={'/Servicio-empresa'} className=''>
                        <CardCategory src={Empresa} title='Empresa' />
                    </Link>
                    <Link to={'/Fin-de-obra'} className=''>
                        <CardCategory src={FinDeObra} title='Fin de obra' />
                    </Link>
                    <Link to={'/Muebles'} className=''>
                        <CardCategory src={Muebles} title='Muebles' />
                    </Link>
                    <Link to={'/Eventos'} className=''>
                        <CardCategory src={Events} title='Eventos' />
                    </Link>
                    <Link to={'/Consejos'} className=''>
                        <CardCategory src={Consejos} title='Consejos' />
                    </Link>
                </div>
            </div>
            <div className="">
                <h1>Solicita presupuesto</h1>
                <p>Describe a continuación cuáles son tus necesidades y recibirás un presupuesto sin compromiso</p>
                <Link to={'/Presupuesto'} className='blog' >
                    <Button classButton='' nameButton='PRESUPUESTO' />
                </Link>
            </div>

        </section>
    )

}

export default CleanUpsPage