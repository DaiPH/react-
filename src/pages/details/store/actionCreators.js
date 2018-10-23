import axios from 'axios';
import * as actionTypes from './actionTypes';

const getDetailAction=(data)=>({
		type:actionTypes.CHANGE_DETAIL,
		data
})
export const getDetailData=(id)=>{
	
	return (dispatch)=>{
		axios.get('/api/detail.json?id='+id).then((res)=>{
			const data=res.data.data
			dispatch(getDetailAction(data))
		})
	}
	
}