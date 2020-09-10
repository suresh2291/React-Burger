import React from 'react';
import modalcss from './Modal.css'
import Backdrop from '../../ui/backdrop/backdrop'
import Aux from '../../../hoc/All'
const modal = (props) =>(
    <Aux>
        <Backdrop show={props.show} clicked = {props.modalClosed}/>
<div className={modalcss.Modal}
style={{
    transform:props.show ? 'translateY(0)':'translateY(-100vh)',
    opacity: props.show ? '1' : '0'
    }}
>
    {props.children}
</div>
</Aux> 
)

export default modal;