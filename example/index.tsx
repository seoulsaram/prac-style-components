import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '../src/';
const App = () => {
  return (
    <div>
      <Button text="text" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
