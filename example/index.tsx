import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing } from '../.';
import { AbButtom } from '../.';

const App = () => {
  return (
    <div>
      <AbButtom />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
