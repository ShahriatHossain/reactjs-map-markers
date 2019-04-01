import * as actionTypes from "./actionTypes";

// all action creators here

// for markers fetch success from server
export const fetchMarkersSuccess = markers => {
    return {
      type: actionTypes.FETCH_MARKERS_SUCCESS,
      markers: markers
    };
  };
  
  // if markers fetch fail from server
  export const fetchMarkersFail = error => {
    return {
      type: actionTypes.FETCH_MARKERS_FAIL,
      error: error
    };
  };
  
  // for markers fetch start from server
  export const fetchMarkersStart = () => {
    return {
      type: actionTypes.FETCH_MARKERS_START
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

  // if save marker fail
  export const saveMarkerFail = error => {
    return {
      type: actionTypes.SAVE_MARKER_FAIL,
      error: error
    };
  };
  
  // save marker start
  export const saveMarkerStart = () => {
    return {
      type: actionTypes.SAVE_MARKER_START
    };
  };
  
  // save marker
  export const saveMarker = (markerData) => {
    return {
      type: actionTypes.SAVE_MARKER,
      markerData
    };
  };

  // delete marker success
  export const deleteMarkerSuccess = (id, markerData) => {
    return {
      type: actionTypes.DELETE_MARKER_SUCCESS,
      markerId: id,
      markerData
    };
  };

  // if delete marker fail
  export const deleteMarkerFail = error => {
    return {
      type: actionTypes.DELETE_MARKER_FAIL,
      error: error
    };
  };
  
  // delete marker start
  export const deleteMarkerStart = () => {
    return {
      type: actionTypes.DELETE_MARKER_START
    };
  };
  
  // delete marker
  export const deleteMarker = (markerData) => {
    return {
      type: actionTypes.DELETE_MARKER,
      markerData
    };
  };