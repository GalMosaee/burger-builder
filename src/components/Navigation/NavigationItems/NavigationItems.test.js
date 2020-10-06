import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

//For Enzyme connection.
configure({adapter: new Adapter()});

//A function supllied automatically by Jest in test phase.
//This function represent a test suite.
//First argument: description for the test.
//Second argument: the test function.
describe('<NavigationItems />',()=>{
    //Global variable in the suite tests.
    let wrapper;
    //Run before each single test in the suite. afterEach run after each single test in the suite.
    beforeEach(()=>{
        //shallow() function get JSX code and render it without all second level sub-components.
        //For example, <NavigationItems/> will render the <NavigationItem/> inside but not with the 
        //NavigationItem components content. mount() render all sub-components tree.
        wrapper = shallow(<NavigationItems/>);
    });
    
    //A function supllied automatically by Jest in test phase.
    //This function represent a single test in the suite.
    //First argument: description for the test.
    //Second argument: the test function.
    it('should render 2 <NavigationItem /> elements if not authenticated',()=>{
        //A function supllied automatically by Jest in test phase.
        //This function make assertions. Chain to expect() one of the vary to() methods.
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it('should render 3 <NavigationItem /> elements if authenticated',()=>{
        //A function that allow us to set props to shallow jsx code.
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });

    it('should an exact logout button',()=>{
        wrapper.setProps({isAuthenticated: true});
        //contains() in contrast to find() (that search by element type) search by specific element.
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
    });
});