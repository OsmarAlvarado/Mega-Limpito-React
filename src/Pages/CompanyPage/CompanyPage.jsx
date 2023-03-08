import AboutUs from "../../Components/AboutUs/AboutUs"
import Target from '../../Assets/Image/Tarjetas.jpg'
import CardCategory from "../../Components/CardCategory/CardCategory"
import Form from "../../Components/Form/Form"
import Particulares from '../../Assets/Image/Particulares Green Self Love.png'
import Empresa from '../../Assets/Image/Empresa Grids Collage.png'
import FinDeObra from '../../Assets/Image/Fin de obra Collage Blank.png'
import Muebles from '../../Assets/Image/Muebles Grids Collage.png'
import Eventos from '../../Assets/Image/Eventos 1 Grids Collage.png'
import Consejos from '../../Assets/Image/Consejos2Img.jpg'
import './CompanyPage.css'


const CompanyPage = () => {

    return (
        <section className="CompanySection">
            <AboutUs title='Bienvenid@s a MegaLimpieza' src={Target} alt='tarjeta-de-presentacion'
                about='aboutUsC'
                aboutT='abaoutTitleC'
                abaoutR='abaoutRowC'
                rowO='rowOneC'
                aboutH='aboutH3C'
                abaoutP='aboutParagraphC'
                abaouPT='aboutParagraphTwoC'
                abaoutB='aboutButtonC'
                imgR='imgRowC'
                imgC='imgCleanC'
            />
            <div className="sectCategory">
                <h1 className="weService">
                    Nuestros servicios
                </h1>
                <div className="cardwrappOne">
                    <CardCategory src={Particulares} title='Particulares' text='Profesionalidad, experiencia, eficacia y flexibilidad son los valores que definen nuestro servicio de limpieza a domicilio.' 
                    categories='categoriesC'
                    imgCateg='imgCategoryC'
                    categoryH='categoriesH3C'
                    categoryP='categoriesParagraphC'
                    />
                    
                    <CardCategory src={Empresa} title='Empresa' text='En Mega Limpieza realizamos la limpieza profesional de cualquier tipo de empresa, desde pequeñas oficinas hasta edificios industriales de gran tamaño.' 
                    categories='categoriesC'
                    imgCateg='imgCategoryC'
                    categoryH='categoriesH3C'
                    categoryP='categoriesParagraphC'
                    />                    
                   <CardCategory src={FinDeObra} title='Fin de obra' text='Utilizamos maquinaria, materiales y productos de limpieza específicos y de la máxima calidad para cada una de las exigencias que un final de obra requiere.' 
                   categories='categoriesC'
                   imgCateg='imgCategoryC'
                   categoryH='categoriesH3C'
                   categoryP='categoriesParagraphC'
                   />
                </div>
                <br />
                <div className="cardwrappTwo">
                    <CardCategory src={Muebles} title='Muebles' text='Limpieza detallada y cuidadosa segun especificaciones del tipo de tela del mueble, usando la mejor tecnologia y profesionalidad.' 
                    categories='categoriesC'
                    imgCateg='imgCategoryC'
                    categoryH='categoriesH3C'
                    categoryP='categoriesParagraphC'
                    />
                    <CardCategory src={Eventos} title='Eventos' text='Antes del evento para que el espacio quede listo para disfrutarlo, durante el evento para cubrir posibles eventualidades y después del evento para dejar el lugar como si nada hubiera pasado.' 
                    categories='categoriesC'
                    imgCateg='imgCategoryC'
                    categoryH='categoriesH3C'
                    categoryP='categoriesParagraphC'
                    />
                    <CardCategory src={Consejos} title='Consejos' text='Puedes consultar nuestros espacios de contacto para solicitarnos consejos de limpieza para distintos momentos y eventualidades. ' 
                    categories='categoriesC'
                    imgCateg='imgCategoryC'
                    categoryH='categoriesH3C'
                    categoryP='categoriesParagraphC'
                    />
                </div>
            </div>
            <div className="FormC">
                <h1 className="FormCH">Presupuesto sin compromiso</h1>
                <p FormCP>Solicita en este formulario la información que necesites sobre cualquiera de nuestros servicios. Recibirás un presupuesto inmediato sin compromiso</p>
                <Form href="#" />
            </div>

        </section>
    )

}
export default CompanyPage