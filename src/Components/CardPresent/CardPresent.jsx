
import './CardPresent.css'


const CardPresent = (props) => {

    const { title, paragraphOne, paragraphTwo, listOne, ListTwo, listThree, ListFour, ListFive, ListSix, src, alt } = props

    return (
        <article className='sectionCardP'>
            <h1 className='titleCardP'>
                {title}
            </h1>
            <div className='CardAllP'>
                <div className='serviceP'>
                    <p className='ServOne'>
                        {paragraphOne}
                    </p>
                    <p className='ServTwo'>
                        {paragraphTwo}
                    </p>
                    <div className='ListServiceP'>

                        <li>{listOne}</li>
                        <li>{ListTwo}</li>
                        <li>{listThree}</li>
                        <li>{ListFour}</li>
                        <li>{ListFive}</li>
                        <li>{ListSix}</li>

                    </div>
                </div>
                <div className='imgServP'>
                    <img src={src} alt={alt} />
                </div>
            </div>
        </article>
    )

}

export default CardPresent