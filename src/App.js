import {Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';


const TopicsList=(props)=>{
  console.log(props);
  return( 
  <div>
    
    <h1>TopicsList</h1>
  </div>);
}


const TopicDetail=(props)=>{
  console.log(props);
  return (
    <div>
      <h1>Topic Detail Page : {props.match.params.topicId}</h1>
    </div>
  );
}
function App() {
  return (
    <div>
      <Route exact path='/'component={HomePage}></Route>
      <Route exact path='/topics' component={TopicsList}></Route>
      <Route path='/topics/:topicId'component={TopicDetail}></Route>
     
      
    </div>
  );
}

export default App;
