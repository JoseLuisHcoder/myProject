import React from 'react'

const SendEmail = () => {
    const handleClick = () => {
        window.open(`mailto:direccion@email.com?subject=Asunto&body=Contenido del email`);
      }
  return (
    <button onClick={handleClick}>
      Enviar email
    </button>
  )
}

export default SendEmail