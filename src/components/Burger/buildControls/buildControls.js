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
      { controls.map(ctrl =>(
          <BuildControl key={ctrl.label} ingredientLabel={ctrl.label}
           added={()=>props.ingredientAdded(ctrl.type)}
           removed = {()=> props.ingredientRemoved(ctrl.type)}
           disabled = {props.disabled[ctrl.type]}/>
      ))}
</div>
)

export default buildControls;