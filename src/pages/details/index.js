 import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store'
import { DetailWrapper, Header, Content } from './style';

class Detail extends PureComponent {
	render() {
		console.log(this.props.match.params.id)
		return (
			<DetailWrapper>
				<Header>
					{
						this.props.title
					}
				</Header>
				<Content dangerouslySetInnerHTML={{__html:this.props.content}}>
				</Content>
			</DetailWrapper>
		)
	}
	componentDidMount(){
		this.props.getDetails(this.props.match.params.id);
		// this.props.match.params.id
	}
}
const mapState=(state)=>{
	return {
		title:state.getIn(['detail','title']),
		content:state.getIn(['detail','content'])
	}
}
const mapDispatch=(dispatch)=>{
	return{
		getDetails(id){
			console.log('here')
			dispatch(actionCreators.getDetailData(id))
		}
	}
}
export default connect(mapState,mapDispatch)(Detail);
