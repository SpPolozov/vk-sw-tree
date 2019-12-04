import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vk-connect';
import { View, Panel, PanelHeader, Group, List, Cell, Tabbar, TabbarItem, Epic} from '@vkontakte/vkui';
import { Icon28Newsfeed, Icon28Search, Icon28Messages, Icon28Notifications, Icon28More} from '@vkontakte/icons/dist/28/chevron_back';
import App  from './App';
// import registerServiceWorker from './sw';

// Init VK  Mini App
connect.send('VKWebAppInit');

// Если вы хотите, чтобы ваше веб-приложение работало в оффлайне и загружалось быстрее,
// расскомментируйте строку с registerServiceWorker();
// Но не забывайте, что на данный момент у технологии есть достаточно подводных камней
// Подробнее про сервис воркеры можно почитать тут — https://vk.cc/8MHpmT
// registerServiceWorker();

ReactDOM.render(<App />, document.getElementById('root'));
