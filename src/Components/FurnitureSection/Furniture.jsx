import Button from '../Button/Button'
import './Furniture.css'
import ProductoDeLimpieza from '../../Assets/Image/productos-de-limpieza.png'
import PicAD from '../../Assets/Image/Blank 4 Grids Collage.png'
import ModalVideo from '../ModalVideo/ModalVideo'
import VideoFurniture from '../../Assets/Video/Video-mueble.mp4'
import { Link } from 'react-router-dom'



const Furniture = () => {

    return (
        <article className='section4'>
            <h1>Nuestros Procesos y consejos</h1>
            <div className=''>
                <div>
                    <img src={PicAD} alt="Antes y despues" />
                </div>
                <div>
                    <h3>Como lo hicimos?</h3>
                    <p>Contamos con máquinas de tecnologia Alemana, que ofrece una variedad de alternativas
                        de limpieza para todo tipo de telas. Generando una experienia única de olor y sensación de limpieza
                        para el disfrute total del cliente.
                    </p>
                    <ModalVideo title='Asi lo hicimos' src={VideoFurniture} />
                </div>
                <div>
                    <h3>Consejos a tener en cuenta</h3>
                    <p>Para que tengas informacion mas detallada sobre nuestros consejos, puedes darle click abajo.</p>
                    <Link to={'/Consejos'} className=''>
                        <Button classButton='' nameButton='Leer más' />
                    </Link>

                </div>
                <div>
                    <img src={ProductoDeLimpieza} alt='Productos de limpieza' />
                </div>
            </div>
        </article>
    )


}

export default Furniture