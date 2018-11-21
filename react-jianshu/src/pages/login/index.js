import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';
import {
	LoginWrapper,
	LoginTitle,
	LoginBox,
	Input,
	Button,
	H6,
	LoginUl,
	LoginLi
} from './style';
class Login extends Component{
	render(){
		const { loginStatus,login}=this.props;	
			if(loginStatus){
				return <Redirect to='/' />
			}else{
				return (
					<LoginWrapper >
						
						<LoginBox>
							<LoginTitle>登录 · 注册</LoginTitle>
							<Input placeholder='账号' innerRef={(input)=>{this.user=input}}/>
							<Input placeholder='密码' type='password' innerRef={(input)=>{this.pwd=input}}/>
							<Button onClick={()=>{login(this.user,this.pwd)}}>登陆</Button>
							<H6>社交账号登录</H6>
							<LoginUl>
								<LoginLi className='wechat'>
									<i className="iconfont">&#xe601;</i>
								</LoginLi>
								<LoginLi className='weibo'>
									<i className="iconfont">&#xe602;</i>
								</LoginLi>
								<LoginLi  className='qq'>
									<i className="iconfont">&#xe603;</i>
								</LoginLi>
								<LoginLi>
									其他
								</LoginLi>
							</LoginUl>
						</LoginBox>
					</LoginWrapper>
				)
			}
		}
	
	}
const mapState=(state)=>{
	return {
		loginStatus:state.getIn(['login','login']),
	}
}

const mapDispatch=(dispatch)=>{
	return {
		login(user,pwd){
			dispatch(actionCreators.changeLogin(user.value,pwd.value))
		}
	}
}

export default connect(mapState,mapDispatch)(Login);