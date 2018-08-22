import React      from 'react';
import ReactDOM   from 'react-dom';
import List from './List';
it('Does this component render well', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List />, div);
});
