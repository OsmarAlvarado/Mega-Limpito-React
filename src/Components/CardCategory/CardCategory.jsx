
const CardCategory = (props) => {
    const { categories, imgCateg, categoryH, categoryP } = props


    return (

        <div className={categories}>
            <img className={imgCateg} src={props.src} alt="" />
            <h3 className={categoryH}>{props.title}</h3>
            <p className={categoryP}>{props.text}</p>
        </div>

    )


}

export default CardCategory