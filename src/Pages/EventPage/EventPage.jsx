import CardPresent from "../../Components/CardPresent/CardPresent"
import CarouselService from "../../Components/CarouselService/CarouselService"
import EventPresent from '../../Assets/Image/Limpieza-Eventos.png'
import EventCarouselOne from '../../Assets/Image/Eventos 1 Grids Collage.png'
import EventCarouselTwo from '../../Assets/Image/Evento 2.jpeg'
import EventCarouselThree from '../../Assets/Image/Evento 3.jpg'
import ApplicationBudge from "../../Components/ApplicationBudge/ApplicationBudge"


const EventPage = () => {

    return (
        <article className="EventPage">
            <CardPresent title='¿Estás buscando una empresa que se ocupe de la limpieza de tus eventos?'
                paragraphOne='El equipo de profesionales de Mega Limpieza se encargará de hacer una limpieza completa de tus eventos dejándolo impecable. Vamos, como si no hubiera pasado nada.'
                paragraphTwo='Profesionalidad, experiencia, eficacia y flexibilidad son nuestros fuertes. Disponemos de servicios por horas para su mejor comodidad y planificación'
                src={EventPresent}
                alt='Chica-limpiando-mesa'
                listOne='Limpieza para ferias.'
                ListTwo='Limpieza para stand.'
                listThree='Limpieza para congresos y comvenciones.'
                ListFour='Limpieza para fiestas.'
                ListFive='Limpieza para recepciones.'
                ListSix='Limpieza para exposiciones.'
            />

            <CarouselService srcOne={EventCarouselOne} srcTwo={EventCarouselTwo} srcThree={EventCarouselThree}
                captionOne='Fiestas en locales' captionTwo='Convenciones' captionThree='Fiestas y recepciones'
            />

            <ApplicationBudge paragraph='¿Necesitas una limpieza para tus eventos?' />

        </article>
    )


}

export default EventPage