import React from "react";
import Context from "../../Contexts/Context";
import styles from "./IncreaseButton.module.css";

const IncreaseButton = () => {
    return (
        <Context.Consumer>
            {([number, setNumber]) => (
                <button
                    id={styles.increase}
                    onClick={() => setNumber(number + 1)}
                >
                    Increase
                </button>
            )}
        </Context.Consumer>
    );
};

export default IncreaseButton;
