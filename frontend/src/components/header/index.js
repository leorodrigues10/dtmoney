import React, { useState } from 'react';
import logo from '../../logo.png'
import './header.css'
import Modal from '../modal'

function Header() {

  const [modelIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    console.log('teste')
      setIsOpen(!modelIsOpen);
  }


  return (
    <header className="header">
      <div className="header-content">
        <div className="content-logo">
          <img className="logo" src={logo} alt="logo" />
          <p className="title">dt money</p>
        </div>

        <div>
          <button onClick={() => openModal()}  className="btn-op">Nova operação</button>
        </div>
      </div>

      <Modal  isOpen={modelIsOpen} openModal={openModal}/>
    </header>
  );
}
export default Header;