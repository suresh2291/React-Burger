import React from 'react';
import buildControlCss from './buildControl.css'
const buildControl = (props) =>(
<div className = {buildControlCss.buildControl}>
     <div className={buildControlCss.Label}>{props.ingredientLabel}</div>
     <button className={buildControlCss.Less} onClick={props.removed} disabled={props.disabled}>Less</button>
     <button className={buildControlCss.More} onClick={props.added}>More</button>

</div>
)
export default buildControl;