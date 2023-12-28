import React from "react";
import  ReactDOM  from "react-dom";

function App(){
    return (<h1>Hello World!!</h1>);
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App></App>
    </React.StrictMode>
);