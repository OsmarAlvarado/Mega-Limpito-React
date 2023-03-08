
import CardPresent from "../../Components/CardPresent/CardPresent"
import CarouselService from "../../Components/CarouselService/CarouselService"
import CompanyPresent from '../../Assets/Image/Empresa-Present.jpeg'
import CleanCompanyOne from '../../Assets/Image/Limpieza-empresa.jpg'
import CleanCompanyTwo from '../../Assets/Image/limpieza-oficinas.jpg'
import CleanCompanyThree from '../../Assets/Image/Empresa-CarouselThree.jpg'
import ApplicationBudge from "../../Components/ApplicationBudge/ApplicationBudge"


const ServicePageComp = () => {

    return (
        <article className="CompanyService">
            <CardPresent
                title='¿Estás buscando una empresa que se ocupe de la limpieza en tus negocios?'
                paragraphOne='Mantener limpio tu lugar de trabajo es fundamental ya que es donde pasamos gran parte de nuestros días. Además de ser la imagen que proyectas de tu empresa.'
                paragraphTwo='En Mega Limpieza realizamos la limpieza profesional de cualquier tipo de empresa, desde pequeñas oficinas hasta edificios industriales de gran tamaño.'
                src={CompanyPresent}
                alt='chica-limpiando'
                listOne='Mantenimiento de limpieza.'
                ListTwo='Limpieza de interiores.'
                listThree='Limpieza de fachadas.'
                ListFour='Limpieza de ventanas y cristales.'
                ListFive='Limpieza de espacios en construcción.'
                ListSix='Limpieza de letreros y rótulos publicitarios.'
            />

            <CarouselService srcOne={CleanCompanyOne} srcTwo={CleanCompanyTwo} srcThree={CleanCompanyThree}
                captionOne='Oficinas' captionTwo='Hooks' captionThree='Naves'
            />

            <ApplicationBudge paragraph='¿Necesitas una limpieza para tu empresa o negocio?' />
        </article>
    )

}

export default ServicePageComp