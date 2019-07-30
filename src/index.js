import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import { createStore,applyMiddleware  } from 'redux';
import App from './components/App';
import { BrowserRouter,HashRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';

const store = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
			<BrowserRouter>
				<App/>
			</BrowserRouter>
  	</Provider>,
  document.getElementById('root'));