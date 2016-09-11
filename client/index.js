import React from 'react';
import { render } from 'react-dom';

if (module.hot) {
  module.hot.accept();
}

const HelloWorld = () => (
  <div>
    <p>
      Starter App made with Feathers, React, Semnatic UI, and Webpack!
    </p>
    <button className="ui button">Follow</button>
  </div>

);

render(<HelloWorld />, document.getElementById('app'));
