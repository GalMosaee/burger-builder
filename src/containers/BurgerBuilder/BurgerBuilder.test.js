import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BurgerBuilder } from './BurgerBuilder';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

configure({adapter: new Adapter()});

describe('<BurgerBuilder />',()=>{
    let wrapper;

    beforeEach(()=>{
        //onInitIngredients={()=>{}} must be passed while creation and not in setProps(),
        //because the componentDidMount() use this function.
        wrapper = shallow(<BurgerBuilder onInitIngredients={()=>{}}/>);
    });

    it('should render <BuildControls /> when receiving ingredients',()=>{
        wrapper.setProps({ings: {salad: 0}});
        expect(wrapper.find(BuildControls)).toHaveLength(1);
    });
});