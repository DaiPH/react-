import styled from 'styled-components';
export const WriterWrapper = styled.div`
	width: 278px;
	height: 300px;
	font-size:14px;
	float:left;
`;
export const WriterTitle = styled.div`
	width:100%;
	height:25px;
	line-height:25px;
	text-align:left;
	color:#969696;
`;
export const WriteSwitch = styled.div`
	width:60px;
	height:25px;
	line-height:25px;
	text-align:right;
	float:right;
	cursor:pointer;
	.spin{
		display: block;
		float: left;
		font-size: 12px;
		margin-right: 2px;
		transform:rotate(0deg);
		transition: all .2s ease-in;
		transform-origin: center center;
	}
`;
export const WriterList = styled.div`

`;
export const WriterListItem = styled.div`
	margin:15px 0 0 0 ;
	display:flex;
	img{
		width:48px;
		height:48px;
		border-radius:50%;
		float:left;
	}
`;
export const WriterDesc = styled.div`
	width:100%;
	height:48px;
	float:left;
	padding-left:10px;
	a{
		display:block;
		margin:6px 0;
		font-size:14px;
	}
	p{
		font-size:12px;
		color:#969696;
	}
`;
export const Follow = styled.div`
	width:60px;
	height:18px;
	font-size:13px;
	padding:0;
	margin-top:6px;
	color:#42c02e;
`;
export const GetAllWriter=styled.div`
	width:100%;
	height:35px;
	line-height:35px;
	text-align:center;
	font-size:14px;
	color:#787878;
	border:1px solid #dcdcdc;
	border-radius:5px;
	margin-top:20px;
	background-color:#f7f7f7;

`;