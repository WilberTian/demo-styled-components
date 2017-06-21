import React, { PureComponent } from 'react';

import DemoWrapperComponent from './components/common/DemoWrapperComponent';

import StyledComponent from './components/StyledComponent';
import PassedProps from './components/PassedProps';
import AdaptingProps from './components/AdaptingProps';
import StylingAnyComp from './components/StylingAnyComp';
import ExtendingStyles from './components/ExtendingStyles';
import AttachingAdditionalProps from './components/AttachingAdditionalProps';
import Refs from './components/Refs';

export default class DemoContainer extends PureComponent {
    render() {
        return (
            <div>
                <DemoWrapperComponent header="styled component">
                    <StyledComponent />
                </DemoWrapperComponent>
                <DemoWrapperComponent header="passed props">
                    <PassedProps />
                </DemoWrapperComponent>
                <DemoWrapperComponent header="adapting based on props">
                    <AdaptingProps />
                </DemoWrapperComponent>
                <DemoWrapperComponent header="styling any components">
                    <StylingAnyComp />
                </DemoWrapperComponent>
                <DemoWrapperComponent header="extending styles">
                    <ExtendingStyles />
                </DemoWrapperComponent>
                <DemoWrapperComponent header="attaching additional props">
                    <AttachingAdditionalProps />
                </DemoWrapperComponent>
                <DemoWrapperComponent header="refs">
                    <Refs />
                </DemoWrapperComponent>
            </div>
        );
    }
}
