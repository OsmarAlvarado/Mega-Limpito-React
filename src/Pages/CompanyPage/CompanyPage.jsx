import AboutUs from "../../Components/AboutUs/AboutUs"
import Target from '../../Assets/Image/Tarjetas.jpg'
import CardCategory from "../../Components/CardCategory/CardCategory"
import Form from "../../Components/Form/Form"


const CompanyPage = () => {

    return (
        <section className="CompanySection">
            <AboutUs title='Bienvenid@s a MegaLimpieza' src={Target} alt='tarjeta-de-presentacion' />
            <div className="sectCategory">
                <h1>
                    Nuestros servicios
                </h1>
                <div className="cardwrapp">
                    <CardCategory src='' title='Particulares' text='hola1' />
                    <CardCategory src='' title='Empresa' text='hola' />
                    <CardCategory src='' title='Fin de obra' text='hola1' />
                    <CardCategory src='' title='Muebles' text='hola1' />
                    <CardCategory src='' title='Eventos' text='hola1' />
                    <CardCategory src='' title='Consejos' text='hola1' />
                </div>
            </div>
            <Form href="#" />
            
        </section>
    )

}
export default CompanyPage