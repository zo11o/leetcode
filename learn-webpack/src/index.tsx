// import * as React from 'react';
// import * as ReactDOM from 'react-dom';

// import Hello from './components/Hello';

// ReactDOM.render(
//   <Hello name="赵子龙" age={5} />,
//   document.getElementById('app')
// )
import * as React from 'react';
import * as ReactDom from 'react-dom';
import './style/index.css'
import './style/app.css'
import Home from './pages/home'


ReactDom.render(
  <Home />,
  document.getElementById('app')
);
