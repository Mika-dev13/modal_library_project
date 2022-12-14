import React from 'react'
import './modal.css'

function Modal({ text, buttonText, open, setOpen }) {
  const handleButton = () => {
    setOpen(false)
  }

  return (
    <>
      <div className="container">
        <h2 className="modal-title">{text}</h2>
        <button className="modal-button" onClick={handleButton}>
          {buttonText}
        </button>
      </div>
    </>
  )
}

export default Modal
