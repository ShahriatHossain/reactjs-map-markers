import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { MarkersContainer } from './MarkersContainer';
import { Markers } from '../Markers/Markers';
import { MapContainer } from '../MapContainer/MapContainer';

configure({ adapter: new Adapter() });

describe('<Markers />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<MarkersContainer onFetchMarkers={() => {}} />);
    });

    it('should render <Markers />', () => {
        wrapper.setProps({ loading: false });
        expect(wrapper.find(Markers)).toHaveLength(1);
    });

    it('should render <MapContainer />', () => {
        wrapper.setProps({ loading: false });
        expect(wrapper.find(MapContainer)).toHaveLength(1);
    });
});