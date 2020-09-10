import  React from 'react';
import backdropcss from './backdrop.css'
const backdrop = (props) =>(
    props.show ? <div className ={backdropcss.Backdrop} onClick = {props.clicked}></div> : null
)

export default backdrop;