import React, { PureComponent } from 'react';
import Topic from './components/Topic/';
import List from './components/List/';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import Banner from './components/Banner';
import { connect } from 'react-redux'
import  { actionCreators } from './store'
import { 
	HomeWrapper,
	HomeLeft,
	HomeRight,
	BackTop
} from './style';
class Home extends PureComponent {

	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<Banner/>
					<Topic/>
					<List/>
				</HomeLeft>
				<HomeRight>
					<Recommend/>
					<Writer/>
				</HomeRight>	
				{this.props.show ? <BackTop onClick={this.handleScrollTop} className='iconfont'>&#xe652;</BackTop> :  null}
			</HomeWrapper>
		)
	}
	componentDidMount(){
		this.props.getHomeDataList();
		window.addEventListener('scroll',this.props.changeScrollTopShow)
	}
	componentWillUnmount(){
		window.removeEventListener('scroll',this.props.changeScrollTopShow)
	}	
	handleScrollTop(){
		window.scrollTo(0,0)
	}
}
const mapState = (state) =>{
	return {
		show:state.get('home').get('scrollTop')
	}
}
const mapDispatch=(dispatch)=>{
	return{
		getHomeDataList(){
			dispatch(actionCreators.getHomeData())
		},
		changeScrollTopShow(){
			if(document.documentElement.scrollTop>250){
				dispatch(actionCreators.toggleTopShow(true))
			}else{
				dispatch(actionCreators.toggleTopShow(false))
			}
		}
	}
}
export default connect(mapState,mapDispatch)(Home);