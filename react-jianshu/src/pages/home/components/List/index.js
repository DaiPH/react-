import React, { PureComponent } from 'react';
import { ListItem, ListInfo, LoadMore} from './style';
import { connect } from 'react-redux';
import { actionCreators } from '../../store';
import { Link }  from 'react-router-dom';
class List extends PureComponent {
	render() {
		const { list } = this.props;
		return (
			<div>
				{
					list.map((item, index) => {
						return (		
							<Link key={index} to={'/detail/'+item.get('id')}>		
		
								<ListItem>
									<img alt='' className='pic' src={item.get('imgUrl')} />
									<ListInfo>
										<h3 className='title'>{item.get('title')}</h3>
										<p className='desc'>{item.get('desc')}</p>
									</ListInfo>
								</ListItem>
							</Link>
						);
					})
				}
				<LoadMore onClick={this.props.getMoreList}>阅读更多</LoadMore>
			</div>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home', 'articleList']),
	moreList:state.getIn('home','moreList')
});
const mapDispatch=(dispatch) =>{
	return{
		getMoreList(){
			dispatch(actionCreators.getMoreData())
		}
	}
}
export default connect(mapState, mapDispatch)(List);