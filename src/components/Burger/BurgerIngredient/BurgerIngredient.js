import React from 'react';
import calsses from './BurgerIngredient.css';
import PropTypes from 'prop-types';

const burgerIngredient = (props) =>{
    let ingredient = null;
    switch (props.type){
        case('bread-bottom'):
            ingredient = <div className={calsses.BreadBottom}></div>;
            break;
        case('bread-top'):
            ingredient = (
                <div className={calsses.BreadTop}>
                    <div className={calsses.Seeds1}></div>
                    <div className={calsses.Seeds2}></div>
                </div>
                );
            break;
        case('meat'):
            ingredient = <div className={calsses.Meat}></div>;
            break;
        case('cheese'):
            ingredient = <div className={calsses.Cheese}></div>;
            break;
        case('bacon'):
            ingredient = <div className={calsses.Bacon}></div>;
            break;
        case('salad'):
            ingredient = <div className={calsses.Salad}></div>;
            break;
        default:
            ingredient = null;
    }
    return ingredient;
};

burgerIngredient.prototype = {
    type: PropTypes.string.isRequired
}

export default burgerIngredient;