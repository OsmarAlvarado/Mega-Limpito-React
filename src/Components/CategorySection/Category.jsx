
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
                <CardCategory src={IndPic} title='Particulares'
                    categories='categories'
                    imgCateg='imgCategory'
                    categoryH='categoriesH3'
                    categoryP='categoriesParagraph'
                />
                <CardCategory src={EmpresaPic} title='Empresa'
                    categories='categories'
                    imgCateg='imgCategory'
                    categoryH='categoriesH3'
                    categoryP='categoriesParagraph'
                />
                <CardCategory src={FinDeObraPic} title='Fin de obra'
                    categories='categories'
                    imgCateg='imgCategory'
                    categoryH='categoriesH3'
                    categoryP='categoriesParagraph'
                />
            </div>
        </article>
    )

}

export default Category