import {Provider} from "react-redux"
import Router from "./Router";
import store from "./store";
import React from "react";

function App() {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    )
}

export default App
