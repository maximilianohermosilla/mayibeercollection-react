import { useEffect, useImperativeHandle, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Cerveza } from '../../interfaces/cerveza';
import { IoBagHandleOutline, IoBeakerOutline, IoBeerOutline, IoBusinessOutline, IoEarthOutline, IoExitOutline, IoInformationCircleOutline, IoListOutline, IoPintOutline, IoRoseOutline, IoWaterOutline } from 'react-icons/io5';
import React from 'react';

interface ModalCervezaProps {
    data?: Cerveza;
    showModal: boolean;
}
export default function ModalBootstrap({data, showModal}: ModalCervezaProps) {
    // const inputRef = React.useRef<HTMLInputElement>(null)
    // const renderCountRef = useRef(0)
  const [show, setShow] = useState(showModal);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(data)
  console.log(showModal)
  console.log(show)

//   useImperativeHandle(ref, () => ({
//     setOpen(visible: boolean) {
//         setShow(visible);
//     }
//   }));

//   useEffect(() => {    
//     setShow(showModal);
// }, [])

  return (    
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}{...data}
      size="lg">
        <Modal.Header closeButton className="bg-primary text-light rounded-0 border-bottom border-secondary">
          <Modal.Title className="bg-primary text-light">
          <h5 className="modal-title text-center text-success w-100"><IoBeerOutline className="text-warning"></IoBeerOutline> {data?.nombre}</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-primary text-light border-bottom border-secondary">
            <div className="modal-body">
                <div className="row">
                    <div className="col-12 col-sm-6 h-100 py-3">
                        <img src={data?.imagen} alt="" width="100%" height={300}/>
                    </div>
                    <div className="col-12 col-sm-6 text-left">
                        <h3 className="border border-secondary text-center my-3 bg-dark">Detalle</h3>
                        <h6><IoBagHandleOutline className="text-danger"></IoBagHandleOutline> {data?.marca?.nombre}</h6>
                        <h6><IoPintOutline className="text-warning"></IoPintOutline> {data?.estilo?.nombre}</h6>
                        <h6><IoEarthOutline className="text-info"></IoEarthOutline> {data?.ciudad?.pais?.nombre}</h6>
                        <h6><IoBusinessOutline className="text-success"></IoBusinessOutline> {data?.ciudad?.nombre}</h6>
                        <h6><IoWaterOutline className="text-danger"></IoWaterOutline> {data?.alcohol} %</h6>
                        {data?.ibu ? <h6><IoRoseOutline className="text-success"></IoRoseOutline> {data?.ibu} IBU</h6> : ''}
                        <h6><IoBeakerOutline className="text-info"></IoBeakerOutline> {data?.contenido} ml</h6>
                        {data?.observaciones ? <h6><IoInformationCircleOutline className="text-warning"></IoInformationCircleOutline> {data?.observaciones}</h6> : ''}
                    </div>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer className="bg-primary text-light rounded-0">
            <button type="button" className="btn btn-success" onClick={handleClose}><IoListOutline></IoListOutline> Editar</button>
            <button type="button" className="btn btn-danger" onClick={handleClose}><IoExitOutline></IoExitOutline> Cerrar</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}