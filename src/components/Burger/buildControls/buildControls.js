import React from 'react';
import controlscss from './buildControls.css';
import BuildControl from './buildControl/buildControl';
const controls = [
{label:'Salad', type:'salad'},
{label:'Bacon', type:'bacon'},
{label:'Cheese', type:'cheese'},
{label:'Meat', type:'meat'}
];
const buildControls = (props)=>(
<div className={controlscss.buildControls}>
      <h2>Current Price: {props.price.toFixed(2)}</h2>
      { controls.map(ctrl =>(
          <BuildControl key={ctrl.label} ingredientLabel={ctrl.label}
           added={()=>props.ingredientAdded(ctrl.type)}
           removed = {()=> props.ingredientRemoved(ctrl.type)}
           disabled = {props.disabled[ctrl.type]}/>
      ))}
      <button className={controlscss.OrderButton}
       disabled = {!props.order}
       onClick={props.showOrderModal}>Order Now</button>
</div>
)

export default buildControls;