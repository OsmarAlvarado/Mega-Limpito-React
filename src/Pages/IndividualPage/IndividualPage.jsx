import CardPresent from "../../Components/CardPresent/CardPresent"
import CarouselService from "../../Components/CarouselService/CarouselService"
import MattersWhite from '../../Assets/Image/AD-colchon-blanco.jpg'
import FurnitureBlack from '../../Assets/Image/AD-mueble-negro.jpg'
import CouchWhite from '../../Assets/Image/AD-sofa-blanco.jpg'
import Form from "../../Components/Form/Form"
import { Link } from "react-router-dom"
import Button from "../../Components/Button/Button"


const IndividualPage = () => {

    return (
        <article className="IndPage">
            <CardPresent title='¿Estás buscando una empresa que se ocupe de la limpieza en tu hogar?' paragraph='Texto largo' src='' alt=''
                listOne='Mantenimiento de limpieza.'
            />
            <CarouselService srcOne={MattersWhite} srcTwo={FurnitureBlack} srcThree={CouchWhite} />
            <Form />
            <div className="">
                <h1>Solicita presupuesto</h1>
                <p>texto</p>
                <Link to={'/Presupuesto'} className='blog' >
                    <Button classButton='' nameButton='PRESUPUESTO' />
                </Link>
            </div>



        </article>
    )

}

export default IndividualPage