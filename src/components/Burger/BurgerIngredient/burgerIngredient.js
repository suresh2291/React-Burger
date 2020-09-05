import React, {Component} from 'react';
import ingredientclass from './burgerIngredient.css';
import PropTypes from 'prop-types';
import top from '../../../assets/top.png'
import bottom from '../../../assets/bottom.jpeg'

class BurgerIngredient extends Component {

    render(){

        let ingredient = null;
        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div > <img  className={ingredientclass.image} src={bottom} alt='burger top'/> </div>
                break;
            case ('bread-top'):
                ingredient = (
                    <div>
                        <img  className={ingredientclass.image}  src={top} alt='burger top'/> 
                    </div>
                )
                break;
            case ('meat'):
                ingredient = <div className={ingredientclass.Meat}></div>
                break;
            case ('cheese'):
                ingredient = <div className={ingredientclass.Cheese}></div>
                break;
            case ('salad'):
                ingredient = <div className={ingredientclass.Salad}></div>
                break;
            case ('bacon'):
                ingredient = <div className={ingredientclass.Bacon}></div>
                break;
            default:
                ingredient = <div><p>Nothing Selected</p></div>
        }
    return ingredient
    }
}

BurgerIngredient.propTypes = {
     type:PropTypes.string.isRequired
}

export default BurgerIngredient;