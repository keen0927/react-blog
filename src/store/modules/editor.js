import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { pender } from 'redux-pender';
import * as api from '../../lib/api';

// 액션타입
const WRITE_POST = "editor/WRITE_POST";

// 액션 생성
export const writePost = createAction(WRITE_POST, api.writePost);

// 초기값
const initialState = Map({
    postId: null
});

// 리듀서
export default handleActions({

}, initialState);