import styled from 'styled-components';
export const RecommendWrapper = styled.div`
	margin: 26px 0;
	width: 280px;
	box-sizing:box;

`;

export const RecommendItem = styled.div`
	width: 280px;
	height: 50px;
	background: url(${(props) => props.imgUrl});
	background-size: contain;
	margin-bottom:6px;
`;
export const QRCode=styled.div`
	margin-top:10px;
	margin-bottom: 30px;
    padding: 10px 22px;
    width: 234px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    float:left;
    position:relative;
     img{
    	width:60px;
    	height:60px;
    	float:left;
    	opacity:.8;
    	margin-right:10px;
    	cursor:pointer;
    }

`
export const CodeShow=styled.div`
	width:200px;
	height:200px;
	background-color:#fff;
	border:2px solid #ddd;
	border-radius:5px;
	position:absolute;
	top:-217px;
	z-index:999;
	display:none;
	div{
		width:150px;
		height:150px;
		margin:25px auto;
	}
	img{
		width:150px;
		height:150px;
		display:block;
	}
`
export const CodeTitle=styled.div`
	width:143px;
	height:21px;
	font-size:15px;
	color:#333;
	float:left;
	margin:8px 0 4px 0;
`
export const CodeDesc=styled.div`
	width:143px;
	height:18px;
	font-size:13px;
	color: #999;
	float:left;
`