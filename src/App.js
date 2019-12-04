import React from 'react';

import '@vkontakte/vkui/dist/vkui.css';
import { View, Panel, PanelHeader, Group, List, Cell, Tabbar, TabbarItem, Epic} from '@vkontakte/vkui';
import Icon28Newsfeed from '@vkontakte/icons/dist/28/chevron_back';
import Icon28Search from '@vkontakte/icons/dist/28/chevron_back';
import menuTreeBlack from './img/menu-tree-black.svg';
import menuAchivmentBlack from './img/menu-achivment-black.svg';
import menuSettingsBlack from './img/menu-settings-black.svg';

class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			activeStory: 'presents'
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
						selected={this.state.activeStory === 'presents'}
						data-story="presents"
						text="">
						<img src={menuTreeBlack} width="28px" />
					</TabbarItem>
					<TabbarItem
						onClick={this.onStoryChange}
						selected={this.state.activeStory === 'achivments'}
						data-story="achivments"
						text="">
						<img src={menuAchivmentBlack} width="28px" />
					</TabbarItem>
					<TabbarItem
						onClick={this.onStoryChange}
						selected={this.state.activeStory === 'settings'}
						data-story="settings"
						text="">
						<img src={menuSettingsBlack} width="28px" />
					</TabbarItem>
				</Tabbar>
			}>
				<View id="presents" activePanel="presents">
					<Panel id="presents">
						<PanelHeader>Подарки</PanelHeader>
					</Panel>
				</View>
				<View id="achivments" activePanel="achivments">
					<Panel id="achivments">
						<PanelHeader>Награды</PanelHeader>
					</Panel>
				</View>
				<View id="settings" activePanel="settings">
					<Panel id="settings">
						<PanelHeader>Настройки</PanelHeader>
					</Panel>
				</View>
			</Epic>

		);
	}
}

export default App;

