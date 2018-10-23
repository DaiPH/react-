import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { 
	RecommendWrapper, 
	RecommendItem ,
	QRCode,
	CodeShow,
	CodeTitle,
	CodeDesc
} from './style';

class Recommend extends PureComponent {
	render() {
		return (
			<RecommendWrapper>
			{
				this.props.list.map((item,index)=>{
					return <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}></RecommendItem>
				})
			}
			<QRCode 
				onMouseOver={()=>this.props.showCode(this.show)}
				onMouseLeave={()=>this.props.hideCode(this.show)}
				>
				<img  
					alt=' '  
					src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"/>
				<CodeShow 
					innerRef={(div)=>{this.show=div}}
					>
						<div>
							<img alt=' ' src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"/>
						</div>
				</CodeShow>
				<CodeTitle>下载简书手机APP ></CodeTitle>
				<CodeDesc>随时随地发现和创作内容</CodeDesc>

 			</QRCode>
			</RecommendWrapper>
		)
	}
}

const mapStateToProps=(state)=>{
	return{
		list:state.getIn(['home','recommendList'])
	}
}
const mapDispatchToProps=(dispatch)=>{
	return {
		showCode(show){
			show.style="display:block"
		},
		hideCode(show){
			show.style="display:none"
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Recommend);