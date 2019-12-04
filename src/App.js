import React from 'react';

import '@vkontakte/vkui/dist/vkui.css';
import { View, Panel, PanelHeader, Tabbar, TabbarItem, Epic, ModalRoot, ModalCard} from '@vkontakte/vkui';
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
import presentClose from './img/present-close.svg';
import connect from '@vkontakte/vk-connect';

const MODAL_CARD_MONEY_SEND = 'money-send';

class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			activeStory: 'presents',
			menuTree: menuTreeBlack,
			activeModal: null,
			modalHistory: []
		};
		this.footer = {
			menuTree: menuTreeBlack,
			menuAchivment: menuAchivmentBlack,
			menuSettings: menuSettingsBlack,
			menuTreeColor: menuTreeColor,
			menuAchivmentColor: menuAchivmentColor,
			menuSettingsColor: menuSettingsColor
		};
		this.presents = {
			items: [
				{key: 1, text: '1 декабря', type: 'close'},
				{key: 2, text: '2 декабря', type: 'close'},
				{key: 3, text: '3 декабря', type: 'close'},
				{key: 4, text: '4 декабря', type: 'close'},
				{key: 5, text: '5 декабря', type: 'close'},
				{key: 6, text: '6 декабря', type: 'close'},
				{key: 7, text: '7 декабря', type: 'close'},
				{key: 8, text: '8 декабря', type: 'close'},
				{key: 9, text: '9 декабря', type: 'close'},
				{key: 10, text: '10 декабря', type: 'close'},
				{key: 11, text: '11 декабря', type: 'close'},
				{key: 12, text: '12 декабря', type: 'close'},
				{key: 13, text: '13 декабря', type: 'close'},
				{key: 14, text: '14 декабря', type: 'close'},
				{key: 15, text: '15 декабря', type: 'close'},
				{key: 16, text: '16 декабря', type: 'close'},
				{key: 17, text: '17 декабря', type: 'close'},
				{key: 18, text: '18 декабря', type: 'close'},
				{key: 19, text: '19 декабря', type: 'close'},
				{key: 20, text: '20 декабря', type: 'close'},
				{key: 21, text: '21 декабря', type: 'close'},
				{key: 22, text: '22 декабря', type: 'close'},
				{key: 23, text: '23 декабря', type: 'close'},
				{key: 24, text: '24 декабря', type: 'close'},
				{key: 25, text: '25 декабря', type: 'close'},
				{key: 26, text: '26 декабря', type: 'close'},
				{key: 27, text: '27 декабря', type: 'close'},
				{key: 28, text: '28 декабря', type: 'close'},
				{key: 29, text: '29 декабря', type: 'close'},
				{key: 30, text: '30 декабря', type: 'close'},
				{key: 31, text: '31 декабря', type: 'close'}
			]
		};

		this.onStoryChange = this.onStoryChange.bind(this);
	}

	onStoryChange (e) {
		this.setState({ activeStory: e.currentTarget.dataset.story })
	}

	setActiveModal (activeModal) {
		connect.send("VKWebAppAllowMessagesFromGroup", {"group_id": 34273828, "key": "dBuBKe1kFcdemzB"});
		activeModal = activeModal || null;
		let modalHistory = this.state.modalHistory ? [...this.state.modalHistory] : [];

		if (activeModal === null) {
			modalHistory = [];
		} else if (modalHistory.indexOf(activeModal) !== -1) {
			modalHistory = modalHistory.splice(0, modalHistory.indexOf(activeModal) + 1);
		} else {
			modalHistory.push(activeModal);
		}

		this.setState({
			activeModal,
			modalHistory
		});
	};

	render () {
		const modal = (
			<ModalRoot activeModal={this.state.activeModal}>
				<ModalCard
					id={MODAL_CARD_MONEY_SEND}
					onClose={() => this.setActiveModal(null)}
					icon={<img src={logoSw} alt="logo" />}
					title="Ура! Сегодня удачный день и ты получаешь предложение"
					caption="Всё просто - введи промокод F3FDE42 на сайте http://sushiwok.ru и получи скидку на супер набор!"
					actions={[{
						title: 'Сохранить промокод',
						type: 'primary',
						action: () => {
							fetch('https://dv.sushiwok.ru/tree.json')
								.then(res => {
									if(res.status !== 200) {
										console.log(res.status);
										return;
									}
									res.json().then(function(res) {
										alert (res);
										//this.setState({data: res});
									});
								})
							//connect.send("VKWebAppAllowMessagesFromGroup", {"group_id": 34273827, "key": "dBuBKe1kFcdemzB"});
						}
					}]}
				>
				</ModalCard>
			</ModalRoot>
		);

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
				<View id="presents" activePanel="presents" modal={modal}>
					<Panel id="presents">
						<PanelHeader><img className="PanelHeaderLogo" src={logoSw} alt="СушиWok" /></PanelHeader>
						<div className="block-common">
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
							<div className="presents">
								{
									this.presents.items.map(item => {
										return (
											<div className="present close">
												<img src={presentClose} alt="подарок" onClick={() => this.setActiveModal(MODAL_CARD_MONEY_SEND)} /><br />
												{item.text}
											</div>
										)
									})
								}
							</div>
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

