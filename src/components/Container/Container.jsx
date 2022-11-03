import React from "react";
import CountNumber from "../CountNumber/CountNumber";
import styles from "./Container.module.css";
import DecreaseButton from "../DecreaseButton/DecreaseButton";
import IncreaseButton from "../IncreaseButton/IncreaseButton";

const Container = () => {
    return (
        <>
            <CountNumber />
            <div id={styles.buttonContainer}>
                <DecreaseButton />
                <IncreaseButton />
            </div>
        </>
    );
};

export default Container;
