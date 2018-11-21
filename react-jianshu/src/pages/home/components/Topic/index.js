import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem ,TopicGetMore} from './style';

class Topic extends PureComponent {
	render() {
		const {list} =this.props;
		return (
			<TopicWrapper>
				{
					list.map((item) => (
						<TopicItem key={item.get('id')}>
							<img
								alt=' '
								className='topic-pic'
								src={item.get('imgUrl')}
							/>
							{item.get('title')}
						</TopicItem>
					))
				}
				<TopicGetMore>更多热门专题 ></TopicGetMore>
			</TopicWrapper>
		)
	}
}
const mapState =(state)=>{
	return {
		list:state.get('home').get('topicList')
	}
}
export default connect(mapState,null)(Topic);