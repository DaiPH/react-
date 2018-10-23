import styled from 'styled-components';

export const LoginWrapper = styled.div`
	z-index: 0;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 56px;
	background: #eee;

`;

export const LoginBox = styled.div`
	width: 400px;
    margin: 60px auto;
    padding: 60px 50px 30px 50px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
   
`;
export const H6=styled.div`
    text-align:center;
    position:relative;
    padding:0 45px;
    :before{
    	content: "";
	    border-top: 1px solid #b5b5b5;
	    display: block;
	    position: absolute;
	    width: 80px;
	    top: 7px;
    }
     :after{
    	content: "";
	    border-top: 1px solid #b5b5b5;
	    display: block;
	    position: absolute;
	    width: 80px;
	    top: 7px;
	    right:40px;
    }
`
export const LoginTitle=styled.div`
	margin: 0 auto 50px;
    padding: 10px;
    font-weight: 400;
    color: #969696;
    text-align:center;
    font-size:22px;
`
export const Input = styled.input`
	display: block;
	width: 300px;
	height: 50px;
	line-height: 50px;
	padding: 0 10px;
	margin: 0px auto;
	border:1px solid #ddd;
	border-radius:5px;
	color: #777;
`;

export const Button = styled.div`
	width: 320px;
	height: 50px;
	line-height: 50px;
	color: #fff;
	background: #3194d0;
	border-radius: 15px;
	margin: 30px auto;
	text-align: center;
	cursor:pointer;
`;
export const LoginUl=styled.div`
    text-align: center;
    width: 320px;
    margin: 0 auto;
    padding-top:15px;
    :after{
			content:"";
			display:block;
			clear:both;
		}
`;
export const LoginLi=styled.div`
	width:80px;
	height:50px;
	float:left;
	line-height:50px;
	margin-bottom:20px;
	text-align:center;
	i{
		font-size:28px;
	}
	&.qq{
		color:#498ad5;
	}
	&.weibo{
		color:#e05244;
	}
	&.wechat{
		color:#00bb29;
	}
	
`;