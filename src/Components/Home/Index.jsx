import React from 'react'
import Products from '../Products/Products';

import style from './Style.module.scss'

const Home = () => {
  return (
    <div className={style.home}>
      <Products />
    </div>
  )
}
export default Home