import Button from '../Button/Button'
import './Furniture.css'
import ProductoDeLimpieza from '../../Assets/Image/productos-de-limpieza.png'


const Furniture = () => {

    return (
        <article className='section4'>
            <h1>Nuestros Procesos y consejos</h1>
            <div className=''>
                <div>IMG de antes y despues</div>
                <div>
                    <h3>Como lo hicimos?</h3>
                    <p>Texto</p>
                    <Button classButton='' nameButton='Ver Video' />
                </div>
                <div>
                    <h3>Consejos a tener en cuenta</h3>
                    <p>Texto sobre consejos de limpieza</p>
                    <Button classButton='' nameButton='Leer más' />
                </div>
                <div>
                    <img src={ProductoDeLimpieza} alt='Productos de limpieza' />
                </div>
            </div>
        </article>
    )


}

export default Furniture