import React from 'react'
import styled from 'styled-components'

function Modal() {
  return (
    <ModalContainer>
      <ModalTitle>Successfully created employee !</ModalTitle>
    </ModalContainer>
  )
}

export default Modal

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 300px;
  background-color: blue;
  margin: 0 auto;
  border-radius: 10px;
`

const ModalTitle = styled.h2`
  font-size: 36px;
`
