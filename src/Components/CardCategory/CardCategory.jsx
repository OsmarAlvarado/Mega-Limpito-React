import './CardCategory.css'


const CardCategory = (props) => {


    return (

        <div className='card categories'>
            <img className='imgCategory' src={props.src} alt="" />
            <h3 className='categoriesH3'>{props.title}</h3>
            <p className='categoriesParagraph'>{props.text}</p>
        </div>

    )


}

export default CardCategory