import styled from 'styled-components';
export const HomeWrapper = styled.div`
	overflow: hidden;
	width: 960px;
	margin: 0 auto;
`;
export const HomeLeft = styled.div`
	float: left;
	margin-left: 15px;
	padding-top: 30px;
	width: 625px;
`;
export const HomeRight = styled.div`
	width: 280px;
	float: right;
`;
export const BackTop = styled.div`
	position: fixed;
	right: 100px;
	bottom: 100px;
	width: 50px;
	height: 50px;
	line-height: 50px;
	text-align: center;
	border: 1px solid #ccc;
	font-size: 14px;
	cursor:pointer;
	:hover{
		background-color:#eee;
	}
`