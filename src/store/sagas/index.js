import { takeEvery, all, takeLatest } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import * as sagas from "./marker";

export function* watchMarker() {
    yield all([
        takeLatest(actionTypes.SAVE_MARKER, sagas.saveMarkerSaga),
        takeLatest(actionTypes.DELETE_MARKER, sagas.deleteMarkerSaga),
        takeEvery(actionTypes.FETCH_MARKERS, sagas.fetchMarkersSaga)
    ]);
}
