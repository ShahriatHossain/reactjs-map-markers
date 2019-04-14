import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Markers } from './Markers';
import Marker from './Marker/Marker';

configure({ adapter: new Adapter() });

describe('<Markers />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Markers markers={[{ name: 'hello', description: 'hello', latitude: 2, longitude: 4 }]} />);
    });

    it('should render <Marker />', () => {
        expect(wrapper.find(Marker)).toHaveLength(1);
    });
});