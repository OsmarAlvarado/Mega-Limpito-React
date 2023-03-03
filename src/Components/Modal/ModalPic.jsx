import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import './ModalPic.css'



const ModalPic = (props) => {
    const [show, setShow] = useState(false);
    const { src, title, subtitle, alt, paragraph } = props

    return (
        <div className=''>

            <img src={src} alt={alt} />
            <h3>{title}</h3>
            <p>{subtitle}</p>

            <Button variant="primary" onClick={() => setShow(true)}>
                Ver detalles
            </Button>

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
                        {paragraph}
                    </p>
                </Modal.Body>
            </Modal>

        </div>
    );

}

export default ModalPic
