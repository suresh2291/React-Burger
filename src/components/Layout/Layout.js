import React from 'react';
import  Aux from '../../hoc/Aux'
import layoutcss from './Layout.css'
const layout = (props) => (
<Aux>
    <main className = {layoutcss.Content}>
        {props.children}
    </main>
</Aux>
)
export default layout