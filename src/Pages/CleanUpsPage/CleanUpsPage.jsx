import './CleanUpsPage.css'
import { Link } from "react-router-dom"
import Button from "../../Components/Button/Button"
import CardCategory from "../../Components/CardCategory/CardCategory"


const CleanUpsPage = () => {

    return (
        <section className="cleanUp">
            <div className="UsService">
                <h1>Nuestros servicios de limpieza</h1>
                <p>texto</p>
                <div className="cardwrapper2">
                    <Link to={'/Particulares'} className='indivualPage'>
                        <CardCategory src='' title='Particulares' />
                    </Link>
                    <Link to={'/Servicio-empresa'} className=''>
                        <CardCategory src='' title='Empresa' />
                    </Link>
                    <Link to={'/Fin-de-obra'} className=''>
                        <CardCategory src='' title='Fin de obra' />
                    </Link>
                    <Link to={'/Muebles'} className=''>
                        <CardCategory src='' title='Muebles' />
                    </Link>
                    <Link to={'/Eventos , Muebles'} className=''>
                        <CardCategory src='' title='Eventos' />
                    </Link>
                    <Link to={'/Consejos'} className=''>
                        <CardCategory src='' title='Consejos' />
                    </Link>
                </div>
            </div>
            <div className="">
                <h1>Solicita presupuesto</h1>
                <p>texto</p>
                <Link to={'/Presupuesto'} className='blog' >
                    <Button classButton='' nameButton='PRESUPUESTO' />
                </Link>
            </div>

        </section>
    )

}

export default CleanUpsPage