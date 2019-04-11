import * as actionTypes from "./actionTypes";

// all action creators here

// for markers fetch success from server
export const fetchMarkersSuccess = markers => {
  return {
    type: actionTypes.FETCH_MARKERS_SUCCESS,
    markers: markers
  };
};


// for markers data fetched from server
export const fetchMarkers = () => {
  return {
    type: actionTypes.FETCH_MARKERS
  };
};

// save marker success
export const saveMarkerSuccess = (id, markerData) => {
  return {
    type: actionTypes.SAVE_MARKER_SUCCESS,
    markerId: id,
    markerData
  };
};


// save marker
export const saveMarker = (markerData, markerId) => {
  return {
    type: actionTypes.SAVE_MARKER,
    markerData,
    markerId
  };
};

// delete marker success
export const deleteMarkerSuccess = (id) => {
  return {
    type: actionTypes.DELETE_MARKER_SUCCESS,
    markerId: id
  };
};

// delete marker
export const deleteMarker = (markerId) => {
  return {
    type: actionTypes.DELETE_MARKER,
    markerId
  };
};

// when server transaction fail
export const transactionFail = error => {
  return {
    type: actionTypes.TRANSACTION_FAIL,
    error: error
  };
};

// when server transaction start
export const transactionStart = () => {
  return {
    type: actionTypes.TRANSACTION_START
  };
};