import {fromJS} from 'immutable';  
import * as actionTypes from './actionTypes';
const defaultState=fromJS({
	topicList: [],
	articleList:[],
	recommendList: [],
	scrollTop:false,
	writerList:[],
	writerPage:1,
	writerTotalPage:1,
	bannerPic:[],
	slide:true,
	index:0,
});

export default (state=defaultState,action)=>{
	switch (action.type) {

		case actionTypes.CHANGE_HOME_DATA:
			return state.merge({
				topicList:action.topicList,
				articleList:action.articleList,
				recommendList:action.recommendList,
				bannerPic:action.bannerPic
			});

		case actionTypes.TOGGLE_SCROLL_TOP:
			return state.set('scrollTop',action.show)

		case actionTypes.GET_MORE_DATA:
			return state.set('articleList',state.get('articleList').concat(action.data))

		case actionTypes.GET_WRITER_DATA:
			return state.merge({
				writerList:action.user,
				writerTotalPage:action.writerTotalPage
			})

		case actionTypes.CHANGE_WRITER_STATUS:
			return state.set('writerPage',action.page)

		case actionTypes.CHANGE_PIC:
			return state.merge({
				index:action.index,
				timer:action.timer
			});

		case actionTypes.SLIDE:
			return state.set('slide',action.isSlide);
		default:
			return state;
	}
}
