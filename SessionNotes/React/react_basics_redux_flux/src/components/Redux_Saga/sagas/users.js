import { takeEvery, call, fork , put} from 'redux-saga/effects'
import * as actions from '../actions/users'
import * as api from '../api/users'

//worker saga
function* getUsers(){
    try{
        const result = yield call(api.getUsers);
        console.log(result)
        yield put(actions.getUsersSuccess({
            items:result.data.data
        }))
    }
    catch(e){
    }
}
//watcher saga
function* watchGetUsersRequest(){
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers)
}

//
const usersSagas = [
    fork(watchGetUsersRequest)
];

export default usersSagas;