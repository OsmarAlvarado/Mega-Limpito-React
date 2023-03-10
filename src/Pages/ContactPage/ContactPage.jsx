import React from "react"
import { useForm } from "react-hook-form"
import Button from "../../Components/Button/Button"
import './ContactPage.css'
import LogoCorreo from '../../Assets/Image/logo-gmail-sinFondo-removebg-preview.png'
import LogoInst from '../../Assets/Image/logo-instagram-sinFondo-removebg-preview.png'
import LogoTlfn from '../../Assets/Image/Logo-tlfn-sinFondo-removebg-preview.png'
import LogoFace from '../../Assets/Image/logo-facebook-sinFondo-removebg-preview.png'

const messages = {
    required: "Este campo es obligatorio",
    name: "El formato introducido no es el correcto",
    mail: "Debes introducir una dirección correcta",
    affair: "El formato no es correcto",
    textArea: "Debes escribir de forma correcta",
};

const patterns = {
    name: /^[A-Za-z ]+$/i,
    mail: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    affair: RegExp("^[a-zA-Z., ]+$"),
    textArea: RegExp("^[a-zA-Z., ]+$"),
};

const ContactPage = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (userInfo) => {
        window.alert('Te contactaremos pronto.')
        console.log(userInfo);
    }

    return (
        <article className="contactPage">
            <div className="contactDudes">
                <h1 className="TalkContact">¿Hablamos?</h1>
                <p className="TalkP">¿Tienes dudas o necesitas más información? Contacta con nosotros sin compromiso. Te ayudaremos en todo lo podamos.</p>
            </div>
            <div className="sectionForm">

                <div className="columnInf">
                    <h1>¿Necesitas ayuda ?</h1>
                    <h2>Contáctanos</h2>
                    <div className="BtnLogs">

                        <div class="uiverse">
                            <a href="https://mail.google.com/mail/u/0/#inbox">
                                <span class="tooltip">Correo</span>
                                <span>
                                    <img src={LogoCorreo} alt="Logo-Correo" />
                                </span>
                            </a>
                        </div>

                        <div class="uiverse">
                            <a href="https://instagram.com/mega_limpieza.es?igshid=ZDdkNTZiNTM=">
                                <span class="tooltip">Instagram</span>
                                <span>
                                    <img src={LogoInst} alt="Logo-instagram" />
                                </span>
                            </a>
                        </div>

                        <div class="uiverse">
                            <span class="tooltip">658 378 994</span>
                            <span>
                                <img src={LogoTlfn} alt="Logo-telefono" />
                            </span>
                        </div>

                        <div class="uiverse">
                            <a href="https://www.facebook.com/profile.php?id=100076604168289">
                                <span class="tooltip">Facebook</span>
                                <span>
                                    <img src={LogoFace} alt="Logo-facebook" />
                                </span>
                            </a>
                        </div>

                    </div>
                    <br />
                    <p> Tambien puedes hacerlo <span>rellenando el formulario</span> con tus necesidades y recibirás un
                        presupuesto inmediato sin compromiso.
                    </p>
                </div>
                <div className="formInf">
                    <form className="formC" action="#" method="get" onSubmit={handleSubmit(onSubmit)}>
                        <article className="nameC">
                            <label htmlFor="name">
                                Nombre Completo:
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

                        <article className="emailC">
                            <label htmlFor="mail">
                                Email:
                            </label>
                            <input name="mail" type="text" id="email"
                                placeholder="Hola@gammatech.scholl"
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

                        <article className="affairC">
                            <label htmlFor="view">Asunto:</label>
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

                        <article className="areaC">
                            <label htmlFor="view">Tu mensaje:</label>
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
                        <br />
                        <Button type="submit" classButton='enviarFormC' href={props.href} nameButton='Enviar' />

                    </form>
                </div>

            </div>

        </article>
    )

}

export default ContactPage