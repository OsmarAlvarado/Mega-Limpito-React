import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import './ModalVideo.css'


const ModalVideo = (props) => {
    const [show, setShow] = useState(false);
    const { title, src } = props

    return (
        <div>
            <Button variant="primary" onClick={() => setShow(true)}>
                Ver video
            </Button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        {title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ReactPlayer
                        url={src}
                        className='react-player'
                        playing
                        controls
                        volume={1}
                        muted
                        width='100%'
                        height='350px'
                    />
                </Modal.Body>
            </Modal>
        </div>
    )





}

export default ModalVideo