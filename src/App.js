import React from 'react';
import {HashRouter ,Route} from 'react-router-dom';
import Home from './routes/Home.js';
import About from './routes/About.js';
import Detail from './routes/Detail.js';
import Navigator from './components/Navigator'


function App(){
  return (
    <HashRouter>
      <Navigator></Navigator>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path='/movie/:id' component={Detail}></Route>
    </HashRouter>
  )
  
}
export default App;