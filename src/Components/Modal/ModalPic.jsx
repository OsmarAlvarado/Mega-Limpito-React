import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import './ModalPic.css'


const ModalPic = (props) => {
    const [show, setShow] = useState(false);
    const { src, title, subtitle, alt, paragraphOne, paragraphTwo, paragraphThree, Advice } = props

    return (
        <div className='modalPic'>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img className='modalImg' src={src} alt={alt} />
                    </div>
                    <div className="flip-card-back">
                        <h3 className='title'>{title}</h3>
                        <p className='ModalP'>{subtitle}</p>
                        <Button variant="primary" onClick={() => setShow(true)}>
                            Ver detalles
                        </Button>
                    </div>

                </div>
            </div>

            {/* <img className='modalImg' src={src} alt={alt} />
            <h3 className='modalH'>{title}</h3>
            <p className='ModalP'>{subtitle}</p>

            <Button variant="primary" onClick={() => setShow(true)}>
                Ver detalles
            </Button> */}

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Notas importantes:
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        {paragraphOne}
                    </p>
                    <p>
                        {paragraphTwo}
                    </p>
                    <p>
                        {paragraphThree}
                    </p>
                    <hr />
                    <h3>{Advice}</h3>
                </Modal.Body>
            </Modal>
        </div>
    );

}

export default ModalPic
