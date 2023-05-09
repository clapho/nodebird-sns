import { all, fork } from 'redux-saga/effects';

import postSaga from './post';
import userSaga from './user';

export default function* rootSaga() {
	console.log('root saga');
	yield all([fork(postSaga), fork(userSaga)]);
}
