import * as actionTypes from './actionTypes';
import {fromJS}  from 'immutable';
import axios from'axios';
const getHomeList=(result)=>({
	type:actionTypes.CHANGE_HOME_DATA,
	topicList:result.topicList,
	articleList:result.articleList,
	recommendList: result.recommendList,
	bannerPic:result.bannerPic
});
const getMoreList=(data)=>({
	type:actionTypes.GET_MORE_DATA,
	data:fromJS(data)
});

const getWriter=(user)=>({
	type:actionTypes.GET_WRITER_DATA,
	user:fromJS(user),
	writerTotalPage:Math.floor(user.length/5)
});
export const getHomeData=()=>{
	return (dispatch)=>{
		axios.get('/api/home.json')
		.then( (res)=>{
			const result=res.data.data
			console.log(result)
			dispatch(getHomeList(result));
		})
		
	}
};
export const toggleTopShow = (show) => ({
	type: actionTypes.TOGGLE_SCROLL_TOP,
	show
});
export const getMoreData = () =>{
	return (dispatch)=>{
		axios.get('/api/homelist.json')
		.then( (res)=>{
			// console.log("here")
			const result=res.data.data
			dispatch(getMoreList(result))
		})
	}
};
export const getWriterData=()=>{
	return (dispatch)=>{
		axios.get('/api/writer.json')
		.then( (res)=>{
			const data=res.data.data;
			dispatch(getWriter(data));
		})
	}
};
export const changeWriterStatus=(page)=>({
	type:actionTypes.CHANGE_WRITER_STATUS,
	page
});
export const changePic=(index,timer)=>({
	type:actionTypes.CHANGE_PIC,
	index,
	timer
});
export const slide=(isSlide)=>({
	type:actionTypes.SLIDE,
	isSlide
});
