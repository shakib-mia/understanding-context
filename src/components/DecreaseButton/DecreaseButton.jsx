import React from "react";
import Context from "../../Contexts/Context";
import styles from "./DecreaseButton.module.css";

const DecreaseButton = () => {
    return (
        <Context.Consumer>
            {([number, setNumber]) => (
                <button
                    id={styles.decreaseButton}
                    onClick={() => setNumber(number - 1)}
                >
                    Decrease
                </button>
            )}
        </Context.Consumer>
    );
};

export default DecreaseButton;
