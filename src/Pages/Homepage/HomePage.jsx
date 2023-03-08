import CarrucelSection from '../../Components/CarrucelSection/CarrucelSection'
import './HomePage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from '../../Components/AboutUs/AboutUs';
import Furniture from '../../Components/FurnitureSection/Furniture';
import Category from '../../Components/CategorySection/Category';
import WeAreUs from '../../Assets/Image/Quienes-somos.jpg'
import NavBar from '../../Components/NavBar/NavBar';



const HomePage = () => {

    return (
        <div>
            <CarrucelSection />
            <AboutUs title='Bienvenid@s' src={WeAreUs} alt='hombre-limpiando'
                about='aboutUs'
                aboutT='abaoutTitle'
                abaoutR='abaoutRow'
                rowO='rowOne'
                aboutH='aboutH3'
                abaoutP='aboutParagraph'
                abaouPT='aboutParagraphTwo'
                abaoutB='aboutButton'
                imgR='imgRow'
                imgC='imgClean'
            />
            <Furniture
                section='section4'
                furnitureO='furnitureOne'
                ad='AD'
                howT='HowThis'
                how='how'
                howP='howParagraph'
                furnitureT='furnitureTwo'
                Tps='TipsImportants'
                tpsH='tipH3'
                tpsP='tipParagraph'
                readM='readNore'
                pc='ProductClean'
            />
            <Category />
        </div>
    )

}

export default HomePage