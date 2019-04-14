import reducer from './marker';
import * as actionTypes from '../actions/actionTypes';

// reducers testing here

describe('marker reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            markers: [],
            loading: false,
            saved: false
        });
    });

    it('should fetch marker upon success', () => {
        expect(reducer({
            markers: [],
            loading: false,
            saved: false
        }, {
                type: actionTypes.FETCH_MARKERS_SUCCESS,
                markers: [{ name: 'hello', description: 'hello', latitude: 2, longitude: 4 }],
                loading: false,
                saved: false
            })).toEqual({
                markers: [{ name: 'hello', description: 'hello', latitude: 2, longitude: 4 }],
                loading: false,
                saved: false
            });
    });

    it('should save marker upon success', () => {
        expect(reducer({
            markers: [],
            loading: false,
            saved: false
        }, {
                type: actionTypes.SAVE_MARKER_SUCCESS,
                loading: false,
                saved: true,
                markers: [{ id: undefined }]
            })).toEqual({
                loading: false,
                saved: true,
                markers: [{ id: undefined }]
            });
    });

    it('should delete marker upon success', () => {
        expect(reducer({
            markers: [],
            loading: false,
            saved: false
        }, {
                type: actionTypes.DELETE_MARKER_SUCCESS,
                loading: false,
                markers: [],
                saved: false
            })).toEqual({
                loading: false,
                markers: [],
                saved: false
            });
    });
});
