import CardPresent from "../../Components/CardPresent/CardPresent"
import CarouselService from "../../Components/CarouselService/CarouselService"
// import MattersWhite from '../../Assets/Image/AD-colchon-blanco.jpg'
// import FurnitureBlack from '../../Assets/Image/AD-mueble-negro.jpg'
// import CouchWhite from '../../Assets/Image/AD-sofa-blanco.jpg'
import Form from "../../Components/Form/Form"
import IndPresent from '../../Assets/Image/Particulares-present.jpg'
import IndCarouselOne from '../../Assets/Image/Particulares Green Self Love.png'
import IndCarouselTwo from '../../Assets/Image/Particulares-Cocina Grids Collage.png'
import IndCarouselThree from '../../Assets/Image/Particulares-cocinas2 Grids Collage.png'


const IndividualPage = () => {

    return (
        <article className="IndPage">
            <CardPresent title='¿Estás buscando una empresa que se ocupe de la limpieza en tu hogar?'
                paragraphOne='El equipo de profesionales de Mega Limpieza se encargará de hacer una limpieza completa de tu vivienda dejándola impecable. Disponemos del servicio de limpieza por horas que te proporciona el tiempo estrictamente necesario para despreocuparte de la limpieza doméstica.'
                paragraphTwo='Profesionalidad, experiencia, eficacia y flexibilidad son los valores que definen nuestro servicio de limpieza a domicilio.'
                src={IndPresent}
                alt='Baño-limpio'
                listOne='Mantenimiento de limpieza.'
                ListTwo='Limpieza de interiores.'
                listThree='Limpieza de cocinas.'
                ListFour='Limpieza de ventanas y cristales.'
                ListFive='Limpieza de espacios en construcción.'
                ListSix='Limpieza de Síndrome de Diógenes.'
            />
            <CarouselService srcOne={IndCarouselOne} srcTwo={IndCarouselTwo} srcThree={IndCarouselThree}
            captionOne='Hornos' captionTwo='Lavaderos' captionThree='Cocinas en general'
            />
            <div>
                <h1>Solicita tu presupuesto</h1>
                <p>¿Necesitas una limpieza en tu domicilio?</p>
                <Form />
            </div>
        </article>
    )

}

export default IndividualPage