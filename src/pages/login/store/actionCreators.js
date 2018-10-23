import * as actionTypes from './actionTypes';
export const changeLogin=(user,pwd)=>({
	type:actionTypes.CHANGE_LOGIN,
	value:true,
	user,
	pwd,
});
export const logout=()=>({
	type:actionTypes.LOGOUT,
	value:false
})