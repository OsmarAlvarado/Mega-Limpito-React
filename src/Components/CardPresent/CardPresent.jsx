
import './CardPresent.css'


const CardPresent = (props) => {

    const { title, paragraphOne, paragraphTwo, listOne, ListTwo, listThree, ListFour, ListFive, ListSix, src, alt } = props

    return (
        <article className=''>
            <h1>
                {title}
            </h1>
            <div>
                <div>
                    <p>
                        {paragraphOne}
                    </p>
                    <p>
                        {paragraphTwo}
                    </p>
                    <div className=''>

                        <li>{listOne}</li>
                        <li>{ListTwo}</li>
                        <li>{listThree}</li>
                        <li>{ListFour}</li>
                        <li>{ListFive}</li>
                        <li>{ListSix}</li>

                    </div>
                </div>
                <div>
                    <img src={src} alt={alt} />
                </div>
            </div>
        </article>
    )

}

export default CardPresent