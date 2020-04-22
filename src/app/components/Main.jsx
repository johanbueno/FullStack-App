import React from 'react';
import { store } from '../store';
import { Provider } from 'react-redux';
import { ConnectedDashboard } from './Dashboard';


export const Main = ()=> (
    <Provider store={store}>
        <div>
            Dashboard Goes Here
            <ConnectedDashboard/>
            
        </div>
    </Provider>
    
    
    
)