
import CardCategory from '../CardCategory/CardCategory'
import './Category.css'
import IndPic from '../../Assets/Image/Particulares Green Self Love.png'
import EmpresaPic from '../../Assets/Image/Empresa Grids Collage.png'
import FinDeObraPic from '../../Assets/Image/Fin de obra Collage Blank.png'


const Category = () => {

    return (
        <article className='Section5'>
            <br />
            <div className='cardAll'>
                <CardCategory src={IndPic} title='Particulares'  />
                <CardCategory src={EmpresaPic} title='Empresa'  />
                <CardCategory src={FinDeObraPic} title='Fin de obra'  />
            </div>
        </article>
    )

}

export default Category