import React from 'react';
import './cart.css';

export default function Cart(props) {
  return (
    <li className='item'>
      <img src={props.image} />
      <div className='words'>
        <h2>{props.nameProduct}</h2>
        <span id='discount'>R$ 1,23</span>
        <span>R$ 1,11</span>
      </div>
    </li>
  );
}