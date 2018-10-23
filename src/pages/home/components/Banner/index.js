import React,{ Component } from 'react';
import $ from 'jquery';
import {actionCreators} from '../../store';
import { connect } from 'react-redux'
import {
	BannerWrap,
	SlideWrap,
	SlidePic,
	PrevBtn,
	NextBtn,
	Dots,
	Dot
} from './style';
class Banner extends Component{
	constructor(props){
		super(props);
		this.stopSlide=this.stopSlide.bind(this);
		this.startSlide=this.startSlide.bind(this);
		this.changeActive=this.changeActive.bind(this);

	}

	render(){
		const {index,changePrev,changeNext,changeDots,bannerPic}=this.props;
		return(

			<BannerWrap
				onMouseEnter={this.stopSlide}
				onMouseLeave={this.startSlide}>		
				{
					this.changeActive()
				}
				
				<PrevBtn 
					className="clickBtn"
					onClick={()=>changePrev(index)}>
					<i className="iconfont">&#xe727;</i>
				</PrevBtn>
					
				<SlideWrap slideIndex={index}>
				{
					bannerPic.map((item,index)=>{
						return (
								<SlidePic key={item.get('id')}>
									<img alt='' className='banner-img' src={item.get('imgUrl')} />
								</SlidePic>
							)
					})
				}
				</SlideWrap>
				<Dots 
					onClick={changeDots}
					innerRef={(Dots)=>{this.dots=Dots}}
					id='dots'
						>
						<Dot className='active dot'/>
						<Dot className='dot'/>
						<Dot className='dot'/>
						
				</Dots>
				<NextBtn 
					className="clickBtn"
					onClick={()=>changeNext(index)}>
					<i className="iconfont">&#xe600;</i>
				</NextBtn>
			</BannerWrap>

		)
	}

	changeActive(){
		const { index } = this.props;
		$('.dot').eq(index).addClass('active').siblings().removeClass('active')
	}
	startSlide(){
		this.props.toggleChange(true);
	}
	stopSlide(){
		this.props.toggleChange(false);
	}
}
const mapState=(state)=>{
	return {
		index:state.get('home').get('index'),
		slide:state.get('home').get('slide'),
		bannerPic:state.get('home').get('bannerPic'),
	}
}
const mapDispatch=(dispatch)=>{
	return{
		changeNext(index){
			console.log('next:'+index);
			if(index<2)
				dispatch(actionCreators.changePic(index+1))
			else{
				dispatch(actionCreators.changePic(0))
			}
		},
		changePrev(index){
			if(index<1){
				dispatch(actionCreators.changePic(2))
			}else{
				dispatch(actionCreators.changePic(index-1))
			}
		},		
		changeDots(e){
			const index=[].indexOf.call(e.target.parentNode.children,e.target);
			dispatch(actionCreators.changePic(index));
		},
		autoChange(index){
			dispatch(actionCreators.changePic(index));
		},
		toggleChange(isSlide){
			dispatch(actionCreators.slide(isSlide));
		}
	}
}

export default connect(mapState,mapDispatch)(Banner);
	// shouldComponentUpdate(nextProps){
		// var timer=null;
		// const { autoChange,index} =this.props;
		// if(nextProps.slide===true){
		// 	let ind=index;
		// 	timer=setInterval(()=>{
		// 		ind++;
		// 		if(ind>2){
		// 			ind=0;
		// 		}else if(ind<0){
		// 			ind=2;
		// 		}
		// 		autoChange(ind);
		// 	},2000);	
	
		// 	return true;
		// }else{
		// 	clearInterval(timer)
		// 	return false;
		// }
	// }