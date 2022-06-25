import React from 'react'

import Styles from './StyleDetalle.scss'

const DetalleProduct = () => {

  return (
    <div className={Styles.MainContainer}>
      <div>
        <div className={Styles.ProductPreview}>
          <img src="https://image.freepik.com/vector-gratis/ilustracion-icono-dibujos-animados-hamburguesa-queso_138676-2450.jpg" />
        </div>

        <div className={Styles.Descripcion} >
          Gaaaaaaaaaa
          <h1 className={Styles.Titulo}>Gasito</h1>
          <p className={Styles.ProductDescription}>Gaaa +araa +aaa</p>
        </div>
      </div>
    </div>
  )
}

export default DetalleProduct