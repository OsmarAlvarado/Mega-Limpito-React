import ModalPic from '../Modal/ModalPic'
import './TipsSection.css'
import CleanHome from '../../Assets/Image/Limpieza-hogar.jpg'
import CleanEnterprise from '../../Assets/Image/Limpieza-empresa.jpg'
import CleanEnd from '../../Assets/Image/limpieza-final-obra.jpg'


const TipsSection = () => {

    return (

        <div className='ModalThreeImg'>
            
            <ModalPic
                src={CleanHome}
                title='CONSEJOS-LIMPIEZA-HOGAR'
                subtitle='Consejos de limpieza para tu hogar'
                alt='limpieza-hogar'
                paragraphOne='Opcion 1: La más sencilla, la que te evitará problemas innecesarios, y la que te permitirá disfrutar de más tiempo y de calidad con los tuyos. Contratar a una persona para que vaya a tu casa a limpiar.'
                paragraphTwo='Opcion 2: Hacerte cargo de la limpieza tu mism@. Con los pros y contras que esto genera por cuestiones de tiempo y efectividad de la limpieza.'
                paragraphThree='Opcion 3: Descuidar la limpieza. Esto podria generar mas tiempo para compartir con tus seres queridos. Pero tambien te da el gran problema de que tu hogar estaria casi siempre sucia.'
                Advice='Recomendacion, la primera opcion'
            />
            <ModalPic
                src={CleanEnterprise}
                title='CONSEJOS-LIMPIEZA-EMPRESA'
                subtitle='Consejos de limpieza para tu empresa' alt='limpieza-empresa'
                paragraphOne='Opcion 1: Debido a la alta demanda de la salud publica para mantener los espacios laborales limpios, se recomienda realizar contratacion de profesionales del area'
                paragraphTwo='Opcion 2: Puedes hacerte cargo con tus empleados del mantenimiento de los espacios laborales, pero puedes generar sobrecarga de tus empleados, resultando bastante fatal la situacion.'
                paragraphThree='Opcion 3: Tambien puedes descuidar la limpieza y hacerla de forma semanal. Pero te da un contra bastante importante, y es que se acumulan sucios y al final deterioro a medio y largo plazo de todos los equipos y espacios de trabajo.'
                Advice='Recomenacion, la primera opcion'
            />
            <ModalPic
                src={CleanEnd}
                title='CONSEJOS-LIMPIEZA-FIN DE OBRA'
                subtitle='Recomendaciones para fin de obra' alt='limpieza-fin-de-obra'
                paragraphOne='Opcion 1: La mas sencilla es, realizar una solicitud de limpiez a profesionales, por la gran acumulacion de polvos y tierra, que pueden generar enfermedades'
                paragraphTwo='Opcion 2: Si lo haces por ti mismo, te ahorras bastante en contrataciones. Pero se te presenta el gran problema de que al no hacerlo de forma detallada y el no usar los productos adecuados, puedes ocacionar enfermedades incluso a visitantes.'
                paragraphThree='Opcion 3: Puedes realizar la limpieza poco a poco. Su pro es que ahorras dinero en contrataciones. Su contra, es que a pesar de ir limpiando poco a poco, la tierra atrae mas tierra, por ende, la limpieza se hace eterna.'
                Advice='Recomendacion, la primera opcion'
            />
        </div>

    )

}

export default TipsSection