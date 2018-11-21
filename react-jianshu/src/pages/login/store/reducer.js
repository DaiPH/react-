import * as actionTypes  from './actionTypes';
import { fromJS } from 'immutable';

const defaultState=fromJS({
	login:false,
	user:null,
	pwd:null
});
export default (state=defaultState,action)=>{
	switch(action.type){
		case actionTypes.LOGOUT:
			return state.set('login',action.value);
		case actionTypes.CHANGE_LOGIN:
			return state.merge({
				login:action.value,
				user:action.user,
				pwd:action.pwd
			})
		default:
			return state;
	}
}

