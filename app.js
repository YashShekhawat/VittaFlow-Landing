import React from 'react';
import ReactDOM from 'react-dom/client';
import VittaFlow from './src/components/VittaFlow';
import VittaFlow2 from './src/components/VittaFlow2';
import VittaFlow3 from './src/components/VittaFlow3';
import VittaFlow4 from './src/components/VittaFlow4';
import VittaFlow5 from './src/components/VittaFlow5';
import VittaFlow6 from './src/components/VittaFlow6';
import VittaFlowAbout from './src/components/VittaFlowAbout/VittaFlowAbout';


const AppLayout = () => {

    return (
        <div className="app">
            <VittaFlow />
            <VittaFlow2 />
            <VittaFlow3 />
            <VittaFlow4 />
            <VittaFlow5 />
            <VittaFlow6 />
            <VittaFlowAbout />
        </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<AppLayout />);
