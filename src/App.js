import React,{ Component  } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter,Route} from 'react-router-dom'; 
import store from './store/index.js';
import Header from './common/header/header.js';
import Detail from './pages/details';
import Writer from './pages/write';
import Home from './pages/home';
 
import Login from './pages/login';
class App extends Component{
	render(){
		return (
			<div>
				<Provider store={store}>			
					<BrowserRouter>
						<div>
							<Header/>
							<Route path='/' exact component={Home}></Route>
							<Route path='/detail/:id' exact component={Detail}></Route>
							<Route path='/login' exact component={Login}></Route>
							<Route path='/writer' exact component={Writer}></Route>
						</div>
					</BrowserRouter>
				</Provider>
			</div>
		)
	}
}

export default App;