import React, {Component} from 'react';
import  'react-native';
import SignUpCompo from './../src/components/SignUp';

import renderer from 'react-test-renderer';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow, mount, render } from 'enzyme';

describe('Signup Component', () => {
    it('Check the render of signup component', () => {
        expect(shallow(<SignUpCompo />).exists()).toBe(true)
    });
    it('checking whether renders without change by matching previous snapshot', () => {
        const component = renderer.create(<SignUpCompo />);
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
    it('renders a mobile number input', () => {
        expect(shallow(<SignUpCompo />).find('#mobNo').length).toEqual(1)
    });
    describe('Mobile Number input', () => {
  
        it('should respond to change event and change the state of the Singup Component', () => {
         
         const wrapper = shallow(<SignUpCompo />);
         wrapper.find('#mobNo').simulate('change', {target: {name: 'text', value: ''}});
         
        expect(wrapper.state('text')).toEqual('');
        })
       })
    
  });