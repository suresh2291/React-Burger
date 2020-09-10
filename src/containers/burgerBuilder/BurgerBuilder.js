import React,{Component} from 'react';
import Aux from '../../hoc/All'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/buildControls/buildControls'
import Modal from '../../components/ui/modal/Modal'
import OrderSummary from '../../components/Burger/orderSummary/orderSummary'
const INGREDIENT_PRICES = {
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.6
}

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props)
    // }
    state = {
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4,
        purchasable:false,
        showOrder:false
    }

    updatePurchaseState(ingredients){
        const sum = Object.keys(ingredients)
                    .map(igKey =>{
                        return ingredients[igKey]
                    })
                    .reduce((sum, el)=>{
                        return sum + el;
                    },0)
                    this.setState({purchasable:sum>0})
    }

    addIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients)
    }

    removeIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type]
        if(oldCount <= 0) {return;}
        const updatedCount = oldCount - 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients)
    }

    purchaseHandler = ()=>{
        this.setState({showOrder:true})
    }

    purchaseCancelHandler = ()=>{
        this.setState({showOrder:false})
    }

    purchaseContinue = ()=>{
        alert("Yes Continue")
    }
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return(
            
             <Aux>
                 <Modal show={this.state.showOrder} modalClosed ={this.purchaseCancelHandler}>
                     <OrderSummary 
                     ingredients={this.state.ingredients}
                     purchaseCancel = {this.purchaseCancelHandler}
                     purchaseContinue={this.purchaseContinue}
                     />
                </Modal> 
                 <Burger ingredients= {this.state.ingredients}/>
                <BuildControls
                          ingredientAdded = {this.addIngredientHandler}
                          ingredientRemoved = {this.removeIngredientHandler}
                          disabled = {disabledInfo}
                          price = {this.state.totalPrice}
                          order={this.state.purchasable}
                          showOrderModal={this.purchaseHandler }/>
             </Aux>
        )
    }
}

export default BurgerBuilder