import React from 'react';

import '@vkontakte/vkui/dist/vkui.css';
import { View, Panel, PanelHeader, Tabbar, TabbarItem, Epic} from '@vkontakte/vkui';
import menuTreeBlack from './img/menu-tree-black.svg';
import menuAchivmentBlack from './img/menu-achivment-black.svg';
import menuSettingsBlack from './img/menu-settings-black.svg';
import menuTreeColor from './img/menu-tree-color.svg';
import menuAchivmentColor from './img/menu-achivment-color.svg';
import menuSettingsColor from './img/menu-settings-color.svg';
import './panels/sushiwok.css';
import logoSw from "./img/logo-sw.svg";
import tree from "./img/first-xtree.svg";
import mainAchivments from './img/main-achivment.svg';
import mainKeys from './img/main-keys.svg';

class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			activeStory: 'presents',
			menuTree: menuTreeBlack
		};
		this.footer = {
			menuTree: menuTreeBlack,
			menuAchivment: menuAchivmentBlack,
			menuSettings: menuSettingsBlack,
			menuTreeColor: menuTreeColor,
			menuAchivmentColor: menuAchivmentColor,
			menuSettingsColor: menuSettingsColor
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
						<img src={(this.state.activeStory === 'presents')?this.footer.menuTreeColor:this.footer.menuTree} width="28px" alt="Подарки" />
					</TabbarItem>
					<TabbarItem
						onClick={this.onStoryChange}
						selected={this.state.activeStory === 'achivments'}
						data-story="achivments"
						text="">
						<img src={(this.state.activeStory === 'achivments')?this.footer.menuAchivmentColor:this.footer.menuAchivment} width="28px" alt="Награды" />
					</TabbarItem>
					<TabbarItem
						onClick={this.onStoryChange}
						selected={this.state.activeStory === 'settings'}
						data-story="settings"
						text="">
						<img src={(this.state.activeStory === 'settings')?this.footer.menuSettingsColor:this.footer.menuSettings} width="28px" alt="Настройки" />
					</TabbarItem>
				</Tabbar>
			}>
				<View id="presents" activePanel="presents">
					<Panel id="presents">
						<PanelHeader><img className="PanelHeaderLogo" src={logoSw} alt="СушиWok" /></PanelHeader>
						<div className="main-status">
							<div className="main-achivments bg-blue">
								<img src={mainAchivments} alt="награды" />
								<span className="main-status-counters">0</span>
							</div>
							<div className="main-keys bg-blue">
								<img src={mainKeys} alt="ключики"/>
								<span className="main-status-counters">0</span>
							</div>
						</div>
						<div className="main-tree">
							<img src={tree} alt="tree" />
						</div>
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

