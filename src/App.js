import {Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component';



function App() {
  return (
    <div>
      <Header></Header>
      <switch>
      <Route exact path='/'component={HomePage}></Route>
      <Route path='/shop'  component={ShopPage}></Route>
      </switch>
    
    </div>
  );
}

export default App;
