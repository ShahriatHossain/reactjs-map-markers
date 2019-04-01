import { put } from "redux-saga/effects";

import axios from "../../axios-markers";
import * as actions from "../actions";

export function* saveMarkerSaga(action) {
  yield put(actions.saveMarkerStart());
  try {
    const data = {
      location: {
        name: action.markerData.name,
        description: action.markerData.description,
        latitude: action.markerData.latitude,
        longitude: action.markerData.longitude
      }
    }

    const response = yield axios.post(
      "locations.json",
      data
    );
    yield put(
      actions.saveMarkerSuccess(response.data.id, action.markerData)
    );
  } catch (error) {
    yield put(actions.saveMarkerFail(error));
  }
}

export function* fetchMarkersSaga(action) {
  // dispatch fetch markers start action
  yield put(actions.fetchMarkersStart());

  try {
    // retrieve data from server
    const response = yield axios.get("locations.json");
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
    yield put(actions.fetchMarkersFail(error));
  }
}
