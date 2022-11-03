import React, { useState } from "react";
import "./App.css";
import Container from "./components/Container/Container";
import Context from "./Contexts/Context";

/**
 *  Export context globally:
 *	export const Context = React.createContext();
 *  Wrap the all things in <Context.Provider></Context.Provider>
 *  Pass the value that should be passed <Context.Provider value={value}></Context.Provider>
 *  Wrap the child that will receive the data with <Context.Consumer>{value => {jsx}}</Context.Consumer>
 *
 */

export default function App() {
    const [number, setNumber] = useState(0);

    return (
        <div className="App">
            <Context.Provider value={[number, setNumber]}>
                <Container />
            </Context.Provider>
        </div>
    );
}
