import styled from 'styled-components';
export const BannerWrap=styled.div`
	width:625px;
	height:270px;
	overflow:hidden;
	position:relative;
	cursor:pointer;
	.banner-img {
		width: 625px;
		height: 270px;
		border-radius:6px;
	}
	.clickBtn{
		width:40px;
		height:60px;
		line-height:50px;
		text-align:center;
		position:absolute;
		top:50%;
		margin-top:-30px;
		color:white;
		font-size:48px;
		cursor:pointer;
		z-index:2;
		.iconfont{
			font-size:36px;
		}
		:hover{
			background-color:rgba(0,0,0,.4);
		}
	}
`
export const SlideWrap=styled.div`
	width:2500px;
	height:270px;
	float:left;
	position:absolute;
	left:-${(props)=>props.slideIndex*625}px;
`
export const SlidePic=styled.div`
	width:625px;
	height:270px;
	float:left;
`
export const Dots=styled.div`
	width:90px;
	height:2px;
	text-align:center;
	line-height:24px;
	position:absolute;
	bottom:10px;
	left:50%;
	margin-left:-45px;
`;
export const Dot=styled.div`
	width:25px;
	height:2px;
	background-color:#969696;
	text-align:center;
	float:left;
	line-height:2px;
	margin-left:5px;
	cursor:pointer;

	&.active{
		background-color:#fff;
	}
`;

export const PrevBtn=styled.div`
	left:0;

`
export const NextBtn=styled.div`
	right:0;
`