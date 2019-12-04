import React from 'react';

import '@vkontakte/vkui/dist/vkui.css';
import { View, Panel, PanelHeader, Group, List, Cell, Tabbar, TabbarItem, Epic} from '@vkontakte/vkui';
import Icon28Newsfeed from '@vkontakte/icons/dist/28/chevron_back';
import Icon28Search from '@vkontakte/icons/dist/28/chevron_back';

class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			activeStory: 'feed'
		};
		this.onStoryChange = this.onStoryChange.bind(this);
	}

	onStoryChange (e) {
		this.setState({ activeStory: e.currentTarget.dataset.story })
	}

	render () {
		return (
			<Epic activeStory={this.state.activeStory} tabbar={
				<Tabbar>
					<TabbarItem
						onClick={this.onStoryChange}
						selected={this.state.activeStory === 'feed'}
						data-story="feed"
						text="Новости"
					>
						<Icon28Newsfeed />
					</TabbarItem>
					<TabbarItem
						onClick={this.onStoryChange}
						selected={this.state.activeStory === 'discover'}
						data-story="discover"
						text="Поиск"
					><Icon28Search/></TabbarItem>
				</Tabbar>
			}>
				<View id="discover" activePanel="discover">
					<Panel id="discover">
						<PanelHeader>Discover</PanelHeader>
					</Panel>
				</View>
				<View id="feed" activePanel="feed">
					<Panel id="feed">
						<PanelHeader>Feed</PanelHeader>
					</Panel>
				</View>
			</Epic>

		);
	}
}

export default App;

