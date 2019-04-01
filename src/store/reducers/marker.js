import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    markers: [],
    loading: false,
    saved: false
};

// all reducers here

// fetch markers start from server
const fetchMarkersStart = (state, action) => {
    return updateObject(state, { loading: true });
};

// when fetch markers success from server
const fetchMarkersSuccess = (state, action) => {
    return updateObject(state, {
        markers: action.markers,
        loading: false
    });
};

// when fail to fetch markers from server
const fetchMarkersFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};

// save marker success
const saveMarkerSuccess = ( state, action ) => {
    const newMarker = updateObject( action.markerData, { id: action.markerId } );
    return updateObject( state, {
        loading: false,
        saved: true,
        markers: state.markers.concat( newMarker )
    } );
};

// save marker start
const saveMarkerStart = (state, action) => {
    return updateObject(state, { loading: true });
};


// save marker fail
const saveMarkerFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};

// delete marker success
const deleteMarkerSuccess = ( state, action ) => {
    return updateObject( state, {
        loading: false,
        markers: state.markers.filter(m => m.id !== action.markerId)
    } );
};

// delete marker start
const deleteMarkerStart = (state, action) => {
    return updateObject(state, { loading: true });
};


// delete marker fail
const deleteMarkerFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_MARKERS_START: return fetchMarkersStart(state, action);
        case actionTypes.FETCH_MARKERS_SUCCESS: return fetchMarkersSuccess(state, action);
        case actionTypes.FETCH_MARKERS_FAIL: return fetchMarkersFail(state, action);
        case actionTypes.SAVE_MARKER_START: return saveMarkerStart(state, action);
        case actionTypes.SAVE_MARKER_FAIL: return saveMarkerFail(state, action);
        case actionTypes.SAVE_MARKER_SUCCESS: return saveMarkerSuccess(state, action);
        case actionTypes.DELETE_MARKER_START: return deleteMarkerStart(state, action);
        case actionTypes.DELETE_MARKER_FAIL: return deleteMarkerFail(state, action);
        case actionTypes.DELETE_MARKER_SUCCESS: return deleteMarkerSuccess(state, action);
        default: return state;
    }
};

export default reducer;