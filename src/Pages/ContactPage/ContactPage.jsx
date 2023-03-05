import React from "react"
import { useForm } from "react-hook-form"
import Button from "../../Components/Button/Button"
import './ContactPage.css'

const messages = {
    required: "Este campo es obligatorio",
    name: "El formato introducido no es el correcto",
    mail: "Debes introducir una dirección correcta",
    affair: "El formato no es correcto",
    textArea: "Debes escribir de forma correcta",
};

const patterns = {
    name: /^[A-Za-z]+$/i,
    mail: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    affair: RegExp("^[a-zA-Z., ]+$"),
    textArea: RegExp("^[a-zA-Z., ]+$"),
};

const ContactPage = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (userInfo) => {
        console.log(userInfo);
    }

    return (
        <article className="contactPage">
            <h1>¿Hablamos?</h1>
            <p>¿Tienes dudas o necesitas más información? Contacta con nosotros sin compromiso. Te ayudaremos en todo lo podamos.</p>
            <div>
                <div>
                    <h1>¿Necesitas ayuda ?</h1>
                    <p> <span>Rellena este formulario</span> con tus necesidades y recibirás un presupuesto inmediato sin compromiso</p>
                    <form className="form" action="#" method="get" onSubmit={handleSubmit(onSubmit)}>
                        <article className="name">
                            <label htmlFor="name">
                                Nombre Completo
                            </label>
                            <input name="name" type="text" id="fname"
                                className={errors.name && "error"}
                                {...register("name", {
                                    required: messages.required, pattern: {
                                        value: patterns.name,
                                        message: messages.name
                                    }
                                })} />
                            {errors.name && <p className="errCamp">{errors.name.message}</p>}
                        </article>

                        <article className="email">
                            <label htmlFor="mail">
                                Email
                            </label>
                            <input name="mail" type="text" id="email"
                                placeholder="adrian@gammatech.scholl"
                                className={errors.mail && "error"}
                                {...register("mail", {
                                    required: messages.required,
                                    pattern: {
                                        value: patterns.mail,
                                        message: messages.mail
                                    }
                                })} />
                            {errors.mail && <p className="errCamp">{errors.mail.message}</p>}
                        </article>

                        <article className="areaOne">
                            <label htmlFor="view">Asunto</label>
                            <input id="affair" name="text"

                                className={errors.affair && "error"}
                                {...register("affair", {
                                    required: messages.required, pattern: {
                                        value: patterns.affair,
                                        message: messages.affair
                                    }
                                })}>
                            </input>
                            {errors.affair && <p className="errCamp">{errors.affair.message}</p>}
                        </article>

                        <article className="area">
                            <label htmlFor="view">Tu mensaje</label>
                            <textarea id="textarea" name="textarea"
                                rows="8" cols="50"
                                placeholder="¿En qué podemos ayudarte?"
                                className={errors.textArea && "error"}
                                {...register("textArea", {
                                    required: messages.required, pattern: {
                                        value: patterns.textArea,
                                        message: messages.textArea
                                    }
                                })}>
                            </textarea>
                            {errors.textArea && <p className="errCamp">{errors.textArea.message}</p>}
                        </article>

                        <Button type="submit" classButton='enviarForm' href={props.href} nameButton='Enviar' />

                    </form>
                </div>
                <div>
                    <h1>Contacto</h1>
                    <p>Tambien puedes contactar con nosotros de forma directa</p>

                    <li>Correo Electronico</li>
                    <li>Instagram</li>
                    <li>Teléfono</li>


                </div>
            </div>

        </article>
    )

}

export default ContactPage