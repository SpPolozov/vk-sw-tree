import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import { View, Panel, PanelHeader, Group, List, Cell, Tabbar, TabbarItem, Epic} from '@vkontakte/vkui';
import { Icon28Newsfeed, Icon28Search, Icon28Messages, Icon28Notifications, Icon28More} from '@vkontakte/icons/dist/28/chevron_back';


import Home from './panels/Home';
import Persik from './panels/Persik';

class App extends React.Component {
	constructor (props) {
		super(props);
		const [activePanel, setActivePanel] = useState('home');
		const [fetchedUser, setUser] = useState(null);
		const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
		const go = e => {
			setActivePanel(e.currentTarget.dataset.to);
		};

		this.state = {
			activeStory: 'more'
		};
		this.onStoryChange = this.onStoryChange.bind(this);
	}

	onStoryChange (e) {
		this.setState({ activeStory: e.currentTarget.dataset.story })
	}


	useEffect = () => {
		connect.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await connect.sendPromise('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	};


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
				<View id="feed" activePanel={activePanel} popout={popout}>
					<Home id='home' fetchedUser={fetchedUser} go={go}/>
					<Persik id='persik' go={go}/>
				</View>
			</Epic>
		);
	}
}

export default App;

