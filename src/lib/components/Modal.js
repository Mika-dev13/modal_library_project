import React from 'react'
import './modal.css'

function Modal({ text, buttonText, hide }) {
  return (
    <>
      <div className="container">
        <h2 className="modal-title">{text}</h2>
        <button className="modal-button" onClick={hide}>
          {buttonText}
        </button>
      </div>
    </>
  )
}

export default Modal
