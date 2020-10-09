import React from 'react';
import AppWithRouter from './App';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render( < AppWithRouter /> , div);
  ReactDOM.unmountComponentAtNode(div);
})