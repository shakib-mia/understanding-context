import React from "react";
import Context from "../../Contexts/Context";
import styles from "./CountNumber.module.css";

const CountNumber = () => {
    return (
        <div id={styles.numberContainer}>
            <Context.Consumer>
                {([number, setNumber]) => <h1>{number}</h1>}
            </Context.Consumer>
        </div>
    );
};

export default CountNumber;
