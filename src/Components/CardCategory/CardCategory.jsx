import './CardCategory.css'

const CardCategory = (props) => {


    return (

        <div className='card category'>
            <img src={props.src} alt="" />
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>

    )


}

export default CardCategory