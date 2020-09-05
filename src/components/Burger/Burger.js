import React from 'react'
import burgercss from'./Burger.css';
 import BurgerIngredient from './BurgerIngredient/burgerIngredient'
 const burger = (props) => {
     let transformedIngredients = Object.keys(props.ingredients)
                                    .map(igKey =>{
                                        return[...Array(props.ingredients[igKey])].map((_, i)=>{
                                           return <BurgerIngredient key = {igKey + i} type={igKey} /> 
                                        });
                                    })
                                    .reduce((arr, el)=>{
                                        return arr.concat(el)
                                    },[]);
            if(transformedIngredients.length === 0){
                transformedIngredients = <p>add your ingredients</p>            }
    return ( 
          <div className={burgercss.Burger}>
              <BurgerIngredient type ="bread-top"/>
              {transformedIngredients}
              <BurgerIngredient type ="bread-bottom"/>
          </div> 
    );
}

export default burger;