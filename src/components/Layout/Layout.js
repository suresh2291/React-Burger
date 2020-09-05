import React from 'react';
import  Aux from '../../hoc/All'
import layoutcss from './Layout.css'
const layout = (props) => (
<Aux>
    <main className = {layoutcss.Content}>
        {props.children}
    </main>
</Aux>
)
export default layout