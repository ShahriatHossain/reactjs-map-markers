import { put } from "redux-saga/effects";

import axios from "../../axios-markers";
import * as actions from "../actions";

export function* saveMarkerSaga(action) {
  // dispatch transaction start action
  yield put(actions.transactionStart());

  try {
    // initiate data
    const data = {
      location: {
        name: action.markerData.name,
        description: action.markerData.description,
        latitude: action.markerData.latitude,
        longitude: action.markerData.longitude
      }
    }

    let response = null;

    // check marker id exist for edit
    if (action.markerId) {
      // edit marker
      data.location.id = action.markerId;
      response = yield axios.put(
        `/api/v1/locations/${action.markerId}.json`,
        data
      );

    } else {
      // save marker to server
      response = yield axios.post(
        "/api/v1/locations.json",
        data
      );

    }

    // dispatch save marker success action
    yield put(
      actions.saveMarkerSuccess(response.data.id, action.markerData)
    );
  } catch (error) {
    // dispatch transaction fail action
    yield put(actions.transactionFail(error));
  }
}

export function* deleteMarkerSaga(action) {
  // dispatch transaction start action
  yield put(actions.transactionStart());

  try {
    // delete marker from server
    const response = yield axios.delete(
      `/api/v1/locations/${action.markerId}.json`
    );
    // dispatch marker delete success action
    yield put(
      actions.deleteMarkerSuccess(action.markerId)
    );

  } catch (error) {
    // dispatch action for transaction fail
    yield put(actions.transactionFail(error));
  }
}

export function* fetchMarkersSaga(action) {
  // dispatch fetch markers start action
  yield put(actions.transactionStart());

  try {
    // retrieve data from server
    const response = yield axios.get("/api/v1/locations.json");
    const results = response.data;
    const error = response.data.error;

    // checking error to throw an exception
    if (error) {
      throw error;
    }

    // dispatch fetch markers success action with payload
    yield put(actions.fetchMarkersSuccess(results));

  } catch (error) {
    // dispatch fetch markers fail action with error payload
    yield put(actions.transactionFail(error));
  }
}
