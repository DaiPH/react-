import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import  { actionCreators } from '../../store';
import {
	WriterWrapper,
	WriterTitle,
	WriteSwitch,
	WriterList,
	WriterListItem,
	WriterDesc,
	Follow,
	GetAllWriter
} from './style.js';
class Writer extends PureComponent {

	render() {
		const {writerList,writerPage,writerTotalPage,changeWriterList}=this.props;
		const list=writerList.toJS();
		const newList=[]
		if(list.length){
			for( let i=(writerPage-1)*5;i<writerPage*5;i++){
				if(list[i]!=null){
					// console.log(list[i])
					newList.push(
						<WriterListItem key={list[i].id}>
							<img alt=' ' src={list[i].avatar_source}/>
							<WriterDesc>
								<a>{list[i].nickname}</a>
								<p>写了 {Math.round( list[i].total_wordage/100)/10}K字· {Math.round( list[i].total_likes_count/100)/10}K喜欢</p>
							</WriterDesc>
							<Follow>+关注</Follow>
						</WriterListItem>
					)
				}
			}
		}
		return (
			<WriterWrapper>
				<WriterTitle>
					推荐作者
					<WriteSwitch onClick={()=>changeWriterList(writerPage,writerTotalPage)}>
						<i className='iconfont spin'>
							&#xe61d;
						</i>
						换一批
					</WriteSwitch>
				</WriterTitle>

				<WriterList>
					{
						newList
					}			
				</WriterList>
				<GetAllWriter>查看全部 ></GetAllWriter>
			</WriterWrapper>
		)
	}
	componentDidMount(){
		this.props.getWriterList();
	}
}
const mapState=(state)=>{
	return{
		writerList:state.get('home').get('writerList'),
		writerPage:state.get('home').get('writerPage'),
		writerTotalPage:state.get('home').get('writerTotalPage')
	}
}
const mapDispatch=(dispatch)=>{
	return{
		getWriterList(){
			dispatch(actionCreators.getWriterData())
		},
		changeWriterList(page,totalPage){
			if(page<totalPage){
				dispatch(actionCreators.changeWriterStatus(page+1));
			}else{
				dispatch(actionCreators.changeWriterStatus(1));
			}
		}
	}
}
export default connect(mapState,mapDispatch)(Writer);
