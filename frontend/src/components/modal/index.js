import ReactModal from 'react-modal'
import './modal.css'
import up from '../../up-arrow.png'
import down from '../../down-arrow.png'
import close from '../../close.png'
import { useState } from 'react'
import api from '../../service/axios'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ReactModal.setAppElement('#root')
toast.configure()
function Modal(props) {

  const [title, setTitle] = useState('')
  const [type, setType] = useState('')
  const [value, setValue] = useState('')

  const [btnInStyle, setBtnInStyle] = useState({});
  const [btnOutStyle, setBtnOutStyle] = useState({});
 

  const btnIn = () => {

    setBtnInStyle({
      backgroundColor: "#5429CC",
      color: "white"
    });
    setBtnOutStyle({
      backgroundColor: "white",
      color: "black"
    });

    setType('entrada')
   


  }

  const btnOut = () => {


    setBtnOutStyle({
      backgroundColor: "#5429CC",
      color: "white"
    });
    setBtnInStyle({
      backgroundColor: "white",
      color: "black"
    });
    setType('saida')



  }


  

  const handleClick = () => {
    api.post('/operations', {
      title,
      value,
      type
    }).then(() => {
  
      props.openModal()
      toast.success("Operação adicionada com sucesso",{
        onClose: () => document.location.reload()
      })
     
    });
   
  }

  return (
    <ReactModal isOpen={props.isOpen} onRequestClose={() => props.openModal()} style={customStyles} >
      <div className="modal-content">
        <div className="modal-header">
          <h3>Adicionar operação</h3>
          <img className="close" src={close} alt="icon" onClick={() => props.openModal()} />
        </div>


        <div className="form">
          <div>
            <input className="form-data"  type="text" placeholder="Título" value={title}
              onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <input className="form-data" type="text" placeholder="Valor" value={value}
              onChange={(e) => setValue(e.target.value)} pattern="[0-9]" />
          </div>
        </div>

        <div className="btn-content">
          <button className="btn-box" onClick={() => btnIn()} style={btnInStyle}>
            <div className="btn-body">
              <img src={up} alt="icon" />
              <p className="body-desc">Entrada</p>
            </div>
          </button>
          <button className="btn-box" onClick={() => btnOut()} style={btnOutStyle}>
            <div className="btn-body">
              <img src={down} alt="icon" />
              <p className="body-desc">Saida</p>
            </div>
          </button>
        </div>
        <button className="btn-add" onClick={() => handleClick()}>Adicionar</button>

      </div>
    </ReactModal>
  );
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
};



export default Modal;