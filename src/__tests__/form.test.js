import React from 'react';
import { shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

import Form from '../components/form/form';

describe('<Form/>', ()=> {
    it('is alive at application start', () =>{
        let app = shallow(<Form />);
        expect(app.find('span').exists()).toBeTruthy();
        expect(app.find('section').exists()).toBeTruthy();
        expect(app.find('input').exists()).toBeTruthy();
        expect(app.find('label').exists()).toBeTruthy();
        expect(app.find('radio').exists()).toBeFalsy();
    });

    it('changes state on submit', ()=> {
        let app = mount(<Form />);
        let button = app.find('button');
        button.simulate('click');
        expect(app.state('url')).toBe('');
        expect(app.state('method')).toBe('');
        expect(app.state('request')).toEqual({});
    });

    it('renders correctly', ()=> {
        const formTree = renderer.create(<Form />).toJSON();
        expect(formTree).toMatchSnapshot();
    });
});
