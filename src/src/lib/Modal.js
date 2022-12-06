import React from 'react'
import styled from 'styled-components'

function Modal() {
  return (
    <ModalContainer>
      <ModalTitle>Successfully created employee !</ModalTitle>
      <Button>Close</Button>
    </ModalContainer>
  )
}

export default Modal

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 300px;
  background-color: #f1f8e9;
  margin: 0 auto;
  border-radius: 10px;
`

const ModalTitle = styled.h2`
  font-size: 2rem;
`
const Button = styled.button`
  background-color: #558b2f;
  color: white;
  font-size: 1.25rem;
  padding: 0.5em 1.5em;
  border-radius: 5px;
  border: none;
`
