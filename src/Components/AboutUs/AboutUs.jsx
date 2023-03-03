import Button from '../Button/Button'
import './AboutUs.css'


const AboutUs = (props) => {

    return (
        <div className='aboutUs'>
            <h1 className=''>{props.title}</h1>
            <article className=''>
                <div className=''>
                    <h3>Quienes Somos?</h3>
                    <p>Texto Largo</p>
                    <Button classButton='' nameButton='Catálogo' />
                </div>
                <div className=''>
                    <img src={props.src} alt={props.alt} />
                </div>
            </article>
        </div>
    )

}

export default AboutUs