import React,{ PureComponent } from 'react';
import { CSSTransition }  from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {actionCreators as loginActionCreators } from '../../pages/login/store'
import { Link } from 'react-router-dom';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	Addition,
	Button,
	SearchWrapper,
	NavSearch,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem
} from './style.js';
class Header extends PureComponent{

	render(){
		const {focused,list,changeInputFocus,changeInputBlur,login,logout,user} =this.props;
		
		return (
		<HeaderWrapper >
				<Link to='/'>
					<Logo/>
				</Link>
				<Nav>
					<Link to="/">
						<NavItem className='left active'>首页</NavItem>
					</Link>
					<NavItem className='left'>下载App</NavItem>
					<NavItem className='right'>
							<i className="iconfont size">&#xe636;</i>
					</NavItem>
					{
						login ? <NavItem className='right' onClick={logout}>欢迎你!{user}  &nbsp;退出</NavItem>:						
									<Link to='/login'><NavItem className='right'>登录</NavItem></Link>
				
						
					}
					<SearchWrapper className='zoom'>
						<CSSTransition
							in={focused}
							timeout={300}
							classNames='slide'
						>
							<NavSearch 
								className={focused? 'focused':' '}
								onFocus={()=>{changeInputFocus(list)}}
								onBlur={changeInputBlur}
							/>
						</CSSTransition>
						<i className={focused ? 'searchIcon focused iconfont': 'iconfont searchIcon'}>
							&#xe617;	</i>
						{this.getListInfo()}
					</SearchWrapper>
				</Nav>
				
				<Addition>
				
					<Button className='reg'>注册</Button>
					<Link to='/writer'>
							<Button className='writting'>
							<i className="iconfont">&#xe60e;</i>
							写文章
					</Button>
					</Link>
				</Addition>
			</HeaderWrapper>
	)
	}

	getListInfo(){
		const { focused ,page,totalPage,list,mouseIn,handleMouseEnter ,handleMouseLeave,handleSwitch}=this.props;
		const newList=list.toJS();
		const pageList=[];
		if(newList.length){
			for(let i = (page*10) ; i < (page+1)*10 ; i++){
					if(newList[i] != null){
						pageList.push(
								<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
						)
					}
			}
		}
		if(focused || mouseIn){
		return(
				<SearchInfo 
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch
							onClick={()=>{handleSwitch(page,totalPage,this.spinIcon)}}
						>
							<i 
								ref={(icon)=>{this.spinIcon=icon} }
								className='iconfont spin'
							>
								&#xe61d;
							</i>
						换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{
							pageList
						}
					</SearchInfoList>
				</SearchInfo>
			)
		}else{
			return null;
		}
	}
}

const mapStateToProps=(state) => {
	return{
		focused:state.get('header').get('focused'),
		list:state.get('header').get('list'),
		page:state.get('header').get('page'),
		totalPage:state.get('header').get('totalPage'),
		mouseIn:state.get('header').get('mouseIn'),
		login:state.get('login').get('login'),
		user:state.get('login').get('user'),
	}
}
const mapDispatchToProps=(dispatch) => {
	return{
		changeInputFocus(list){//是不是可以使用state里面的值？不可以。但可以传参数进去

			if(list.size ===0 ){
				dispatch(actionCreators.getList());
			}	
			dispatch(actionCreators.getChangeInputFocus());	
		},
		changeInputBlur(){
			const action=actionCreators.getChangeInputBlur();
			dispatch(action);
		},
		handleMouseEnter(){
			dispatch(actionCreators.mouseEnter())
		},
		handleMouseLeave(){
			dispatch(actionCreators.mouseLeave())
		},
		handleSwitch(page,totalPage,spin){
			let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if (originAngle) {
				originAngle = parseInt(originAngle, 10);
			}else {
				originAngle = 0;
			}
			spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
			if(page<totalPage-1){
				dispatch(actionCreators.changePage(page+1))
			}else if(page ===(totalPage-1)){
				dispatch(actionCreators.changePage(0))
			}
		},
		logout(){
			dispatch(loginActionCreators.logout())
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);