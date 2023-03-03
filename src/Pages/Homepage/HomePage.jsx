import CarrucelSection from '../../Components/CarrucelSection/CarrucelSection'
import './HomePage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from '../../Components/AboutUs/AboutUs';
import Furniture from '../../Components/FurnitureSection/Furniture';
import Category from '../../Components/CategorySection/Category';
import WeAreUs from '../../Assets/Image/Quienes-somos.jpg'


const HomePage = () => {

    return (
        <div className='home'>
            <CarrucelSection />
            <AboutUs title='Bienvenid@s' src={WeAreUs} alt='hombre-limpiando' />
            <Furniture />
            <Category />
        </div>
    )

}

export default HomePage