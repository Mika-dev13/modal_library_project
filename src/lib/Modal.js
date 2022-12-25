import React from 'react'
import './modal.css'

/**
 * modal of confirmation of creation of new employee
 * @param { string } text - Text content
 * @param { string } buttonText
 * @param { boolean } setOpen - Allows to close the modal
 * @returns
 */

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
