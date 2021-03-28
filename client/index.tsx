import * as React from 'react';
import * as ReactDom from 'react-dom';

import App from './App';

const rootElement = document.getElementById('root');
rootElement.hasChildNodes()
    ? ReactDom.hydrate(<App />, rootElement)
    : ReactDom.render(<App />, rootElement);
