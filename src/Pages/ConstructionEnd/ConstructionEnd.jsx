import CardPresent from "../../Components/CardPresent/CardPresent"
import CarouselService from "../../Components/CarouselService/CarouselService"
import CleanConstructionEnd from '../../Assets/Image/limpieza-final-obra.jpg'
import EndCarouselOne from '../../Assets/Image/Fin de obra Carousel 3 Grids Collage.png'
import EndCarouselTwo from '../../Assets/Image/Fin de obra Collage Blank.png'
import EndCarouselThree from '../../Assets/Image/Fin de Obra Servicio Grids Collage.png'
import ApplicationBudge from "../../Components/ApplicationBudge/ApplicationBudge"



const ConstructionEnd = () => {

    return (
        <article className="ConstructionEndPage">
            <CardPresent
                title='¿Estás buscando una empresa que se ocupe de la limpieza de fin de obra?'
                paragraphOne='La limpieza de final de obra es uno de los servicios de limpieza más exigentes a la hora de satisfacer a nuestros clientes. Las necesidades específicas y la urgencia de este trabajo requiere de profesionales que realicen una limpieza exhaustiva y rápida, dejando el espacio listo para su uso.'
                paragraphTwo='En Mega Limpieza realizamos limpiezas de fin de obra en domicilios particulares, empresas, locales comerciales, naves industriales y en cualquier lugar donde haya un espacio recientemente construido o reformado que tenga que quedar limpio y preparado para su uso.'
                src={CleanConstructionEnd}
                alt='limpieza-fin-de-obra'
                listOne='Mantenimiento de limpieza.'
                ListTwo='Limpieza de interiores y exteriores.'
                listThree='Limpieza de cocinas.'
                ListFour='Limpieza de ventanas y cristales.'
                ListFive='Limpieza de espacios en construcción.'
                ListSix='Limpieza específica de mobiliario.'
            />

            <CarouselService srcOne={EndCarouselOne} srcTwo={EndCarouselTwo} srcThree={EndCarouselThree}
                captionOne='Cocinas' captionTwo='Baños y lavaderos' captionThree='Baños'
            />

            <ApplicationBudge paragraph='¿Necesitas una limpieza de fin de obra?' />
        </article>
    )

}

export default ConstructionEnd