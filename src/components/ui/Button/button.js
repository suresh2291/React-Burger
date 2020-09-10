import React from 'react'
import btncss from './button.css'

const button = (props) =>(
<button className={[btncss.Button, btncss[props.btnType]].join(' ')} onClick = {props.clicked}> 
{props.children}
</button>
)

export default button