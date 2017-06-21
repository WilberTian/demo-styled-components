import React from 'react';
import ReactDOM from 'react-dom';

import DemoContainer from '../containers/DemoContainer';

export default () => {
    ReactDOM.render(
        <DemoContainer />,
        document.getElementById('root')
    );
};
