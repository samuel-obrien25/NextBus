import React from 'react';
import ReactDOM from 'react-dom';
import SplashScreen from '../Screens/SplashScreen';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<SplashScreen />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SplashScreen />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders a section', () => {
        const wrapper = shallow(<SplashScreen />);
        expect(wrapper.find('section')).to.have.length(1);
    });
});

