import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Hello from './components/Hello';

ReactDOM.render(
  <Hello name="赵子龙" age={5} />,
  document.getElementById('app')
)
