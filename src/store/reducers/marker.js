import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    markers: [],
    loading: false,
    saved: false
};

// all reducers here

// when server transaction start
const transactionStart = (state, action) => {
    return updateObject(state, { loading: true });
};

// when server transaction failed
const transactionFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};

// when fetch markers success from server
const fetchMarkersSuccess = (state, action) => {
    return updateObject(state, {
        markers: action.markers,
        loading: false
    });
};

// save marker success
const saveMarkerSuccess = (state, action) => {
    const newMarker = updateObject(action.markerData, { id: action.markerId });
    const markers = state.markers;
    const index = markers.findIndex(e => e.id === action.markerId);

    if (index === -1) markers.push(newMarker);
    else markers[index] = newMarker;

    return updateObject(state, {
        loading: false,
        saved: true,
        markers
    });
};

// delete marker success
const deleteMarkerSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        markers: state.markers.filter(m => m.id !== action.markerId)
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TRANSACTION_FAIL: return transactionFail(state, action);
        case actionTypes.TRANSACTION_START: return transactionStart(state, action);
        case actionTypes.FETCH_MARKERS_SUCCESS: return fetchMarkersSuccess(state, action);
        case actionTypes.SAVE_MARKER_SUCCESS: return saveMarkerSuccess(state, action);
        case actionTypes.DELETE_MARKER_SUCCESS: return deleteMarkerSuccess(state, action);
        default: return state;
    }
};

export default reducer;