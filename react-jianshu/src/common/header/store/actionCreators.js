import  * as actionTypes from './actionTypes';
import axios from 'axios';
import { fromJS} from 'immutable';

const getListData=(data) =>({
	type: actionTypes.GET_LIST ,
	data: fromJS(data),
	totalPage:Math.ceil(data.length/10)
});
export const getChangeInputFocus=() =>({
	type:actionTypes.SEARCH_FOCUS,
});

export const getChangeInputBlur=() =>({
	type:actionTypes.SEARCH_BLUR,
});
export const mouseEnter=() => ({
	type:actionTypes.MOUSE_ENTER
});
export const mouseLeave=() => ({
	type:actionTypes.MOUSE_LEAVE
});
export const getList=()=>{
	return (dispatch) =>{
		axios.get('/api/getList.json')
		.then( (res) => {
			const data=res.data;
			dispatch(getListData(data.data));
		})
		.catch( ()=>{
			console.log('error');
		})
	}
}
export const changePage=(page)=>{
	return {
		type:actionTypes.HANDLE_SWITCH,
		page
	}
}