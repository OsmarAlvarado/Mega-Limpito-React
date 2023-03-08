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
                <h1 className='UsServiceH'>Nuestros servicios de limpieza</h1>
                <p>En Mega Limpieza contamos con una amplia experiencia en todo tipo de servicios de limpieza y desinfección
                    para oficinas, empresas, locales comerciales, fin de obras, muebles (sofá, sillas, colchones, alfombras), consejos.
                    Ofrecemos un servicio integral de limpieza.
                </p>
                <div className="cardwrapper1">
                    <Link to={'/Particulares'} >
                        <CardCategory src={Particulares} title='Particulares'
                            categories='categoriesCl'
                            imgCateg='imgCategoryCl'
                            categoryH='categoriesH3Cl'
                            categoryP='categoriesParagraphC'
                        />
                    </Link>
                    <Link to={'/Servicio-empresa'} className=''>
                        <CardCategory src={Empresa} title='Empresa'
                            categories='categoriesCl'
                            imgCateg='imgCategoryCl'
                            categoryH='categoriesH3Cl'
                            categoryP='categoriesParagraphCl'
                        />
                    </Link>
                    <Link to={'/Fin-de-obra'} className=''>
                        <CardCategory src={FinDeObra} title='Fin de obra'
                            categories='categoriesCl'
                            imgCateg='imgCategoryCl'
                            categoryH='categoriesH3Cl'
                            categoryP='categoriesParagraphCl'
                        />
                    </Link>
                </div>
                <div className='cardwrapper2'>
                    <Link to={'/Muebles'} className=''>
                        <CardCategory src={Muebles} title='Muebles'
                            categories='categoriesCl'
                            imgCateg='imgCategoryCl'
                            categoryH='categoriesH3Cl'
                            categoryP='categoriesParagraphCl'
                        />
                    </Link>
                    <Link to={'/Eventos'} className=''>
                        <CardCategory src={Events} title='Eventos'
                            categories='categoriesCl'
                            imgCateg='imgCategoryCl'
                            categoryH='categoriesH3Cl'
                            categoryP='categoriesParagraphCl'
                        />
                    </Link>
                    <Link to={'/Consejos'} className=''>
                        <CardCategory src={Consejos} title='Consejos'
                            categories='categoriesCl'
                            imgCateg='imgCategoryCl'
                            categoryH='categoriesH3Cl'
                            categoryP='categoriesParagraphCl'
                        />
                    </Link>
                </div>
            </div>
            <div className="budgeCl">
                <h1>Solicita presupuesto</h1>
                <p>Describe tu presupuesto sin ningun comprimiso.</p>
                <Link to={'/Presupuesto'} className='blog' >
                    <button className=''>
                        <span class="circle1"></span>
                        <span class="circle2"></span>
                        <span class="circle3"></span>
                        <span class="circle4"></span>
                        <span class="circle5"></span>
                        <span class="text">PRESUPUESTO</span>
                    </button>
                </Link>
            </div>

        </section>
    )

}

export default CleanUpsPage