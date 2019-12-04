import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import { View, Panel, PanelHeader, Group, List, Cell, Tabbar, TabbarItem, Epic} from '@vkontakte/vkui';
import { Icon28Newsfeed, Icon28Search, Icon28Messages, Icon28Notifications, Icon28More} from '@vkontakte/icons/dist/28/chevron_back';

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
					><Icon28Newsfeed/></TabbarItem>
					<TabbarItem
						onClick={this.onStoryChange}
						selected={this.state.activeStory === 'discover'}
						data-story="discover"
						text="Поиск"
					><Icon28Search/></TabbarItem>
					<TabbarItem
						onClick={this.onStoryChange}
						selected={this.state.activeStory === 'messages'}
						data-story="messages"
						label="12"
						text="Сообщения"
					><Icon28Messages/></TabbarItem>
					<TabbarItem
						onClick={this.onStoryChange}
						selected={this.state.activeStory === 'notifications'}
						data-story="notifications"
						text="Уведомлен."
					><Icon28Notifications/></TabbarItem>
					<TabbarItem
						onClick={this.onStoryChange}
						selected={this.state.activeStory === 'more'}
						data-story="more"
						text="Ещё"
					><Icon28More/></TabbarItem>
				</Tabbar>
			}>
				<View id="discover" activePanel="discover">
					<Panel id="discover">
						<PanelHeader>Discover</PanelHeader>
					</Panel>
				</View>
				<View id="messages" activePanel="messages">
					<Panel id="messages">
						<PanelHeader>Messages</PanelHeader>
					</Panel>
				</View>
				<View id="notifications" activePanel="notifications">
					<Panel id="notifications">
						<PanelHeader>Notifications</PanelHeader>
					</Panel>
				</View>
				<View id="more" activePanel="more">
					<Panel id="more">
						<PanelHeader>More</PanelHeader>
					</Panel>
				</View>
				<View id="feed">
					<Panel id="feed">
						<PanelHeader>Feed</PanelHeader>
					</Panel>
				</View>
			</Epic>

		);
	}
}

export default App;

