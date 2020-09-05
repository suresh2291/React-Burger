import React from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/burgerBuilder/BurgerBuilder'
function App() {
  return (
    <div>
     <h1 style={{textAlign:'center'}}>Build Your favourite Burger</h1>
     <Layout>
       <BurgerBuilder/>
       
     </Layout>
    </div>
  );
}

export default App;
