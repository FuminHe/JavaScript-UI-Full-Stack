import UsersSagas from "./users";
import {all} from 'redux-saga/effects'

export default function* rootSaga(){
    //runs all sagas in parallel and wait for them to resolve
    yield all([
        ...UsersSagas
    ])
}