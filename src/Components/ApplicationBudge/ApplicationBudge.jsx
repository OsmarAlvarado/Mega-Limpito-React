import Form from '../Form/Form'
import './ApplicationBudge.css'


const ApplicationBudge = (props) => {

    return (
        <div className="sectionApplication">
            <h1 className="applicationH">Solicita tu presupuesto</h1>
            <p className="ApplicationP">{props.paragraph}</p>
           <br />
            <Form />
        </div>
    )

}

export default ApplicationBudge