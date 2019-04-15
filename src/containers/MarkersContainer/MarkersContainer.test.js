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
        wrapper = shallow(<MarkersContainer loading={false} onFetchMarkers={() => { }} />);
    });

    it('should render <Markers />', () => {
        expect(wrapper.find(Markers)).toHaveLength(1);
    });

    it('should render <MapContainer />', () => {
        expect(wrapper.find(MapContainer)).toHaveLength(1);
    });
});