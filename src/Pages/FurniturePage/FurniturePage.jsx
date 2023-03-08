import CardPresent from "../../Components/CardPresent/CardPresent"
import CarouselService from "../../Components/CarouselService/CarouselService"
import FurniturePresent from '../../Assets/Image/Mueble-present.jpg'
import FurnitureCarouselOne from '../../Assets/Image/AlfombraAD.jpg'
import FurnitureCarouselTwo from '../../Assets/Image/Colchon AD Carousel Grids Collage.png'
import FurnitureCarouselThree from '../../Assets/Image/Mueble negro Grids Collage.png'
import ApplicationBudge from "../../Components/ApplicationBudge/ApplicationBudge"


const FurniturePage = () => {

    return (
        <article className="furniturePage">
            <CardPresent title='¿Estás buscando una empresa que se ocupe de la limpieza de tus muebles?'
                paragraphOne='El equipo de profesionales de Mega Limpieza se encargará de hacer una limpieza completa de tus muebles con la mas alta tecnologia. Disponemos del servicio de limpieza por horas que te proporciona el tiempo estrictamente necesario para despreocuparte de la limpieza.'
                paragraphTwo='Profesionalidad, experiencia, eficacia y flexibilidad son nuestros puntos fuertes, gracias a nuestros equipos tecnologicos adecuados a su mueble.'
                src={FurniturePresent}
                alt='chico-limpiando-un-sofá'
                listOne='Mantenimiento de limpieza.'
                ListTwo='Limpieza de ácaros.'
                listThree='Desinfeccion.'
                ListFour='Eliminacion de la mayoria de manchas.'
                ListFive='Uso de productos especificos según tipo de material.'
                ListSix='Cepillado profesional para remover.'
            />

            <CarouselService srcOne={FurnitureCarouselOne} srcTwo={FurnitureCarouselTwo} srcThree={FurnitureCarouselThree}
                captionOne='Alfombras' captionTwo='Colchones' captionThree='Sofás'
            />

            <ApplicationBudge paragraph='¿Necesitas una limpieza y desinfeccion para tus muebles?' />
        </article>
    )

}

export default FurniturePage