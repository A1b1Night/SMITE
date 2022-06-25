import React from 'react'
import {Link} from 'react-router-dom'
import {ProductsData} from '../../Data/ProductsData'
import "bootstrap/dist/css/bootstrap.min.css"
import { FormGroup,Label,Input } from 'reactstrap'

import Styles from './Style.module.scss'


const Products = () => {
  return (
    <div className={Styles.BodyContainer}>
      <div className={Styles.Filtro}>
      <div className={Styles.Titulo}>
        <h4>Marcas</h4>
      </div>
        <FormGroup>
          <h6>Todas las marcas</h6>
          <FormGroup>
            <Input 
              id="checkbox1"
              type="checkbox"
              value="1"
              onChange={"checkbox1"}
            />
            <Label for="checkbox1" >
              Opcion1
            </Label>
          </FormGroup>
          <FormGroup >
            <Input 
              id="checkbox2"
              type="checkbox"
              value="2"
              onChange={"checkbox2"}
            />
            <Label for="checkbox2" >
              Opcion2
            </Label>
          </FormGroup>
          <FormGroup>
            <Input 
              id="checkbox3"
              type="checkbox"
              value="3"
              onChange={"checkbox3"}
            />
            <Label for="checkbox3" >
              Opcion3
            </Label>

          </FormGroup>
        </FormGroup>
        <div className={Styles.Titulo}>
        <h4>Categoria</h4>
      </div>
        <FormGroup>
          <h6>Todos los productos</h6>
          <FormGroup>
            <Input 
              id="checkbox1"
              type="checkbox"
              value="1"
              onChange={"checkbox1"}
            />
            <Label for="checkbox1" >
              Opcion1
            </Label>
          </FormGroup>
          <FormGroup >
            <Input 
              id="checkbox2"
              type="checkbox"
              value="2"
              onChange={"checkbox2"}
            />
            <Label for="checkbox2" >
              Opcion2
            </Label>
          </FormGroup>
          <FormGroup>
            <Input 
              id="checkbox3"
              type="checkbox"
              value="3"
              onChange={"checkbox3"}
            />
            <Label for="checkbox3" >
              Opcion3
            </Label>

          </FormGroup>
        </FormGroup>
      </div>
    <div className={Styles.productContainer}>
      {ProductsData.map((product,i)=>(
        <div key={i} className={Styles.product}>
            <p>
              {product.name}
            </p>
          <ul>
            <li>
              <Link to="/DetalleProduct">
                <img src={product.img} alt={product.name}/>
              </Link>
            </li>
          </ul>  
          <div>
          </div>
          <form>
            <button onClick={()=> console.log(product)}>Add to Cart</button>
          </form>  
        </div>
      ))}
    </div>
    </div>
  )
}

export default Products