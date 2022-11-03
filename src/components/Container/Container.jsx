import React from "react";
import CountNumber from "../CountNumber/CountNumber";
import DecreaseButton from "../DecreaseButton/DecreaseButton";
import IncreaseButton from "../IncreaseButton/IncreaseButton";

const Container = () => {
    return (
        <>
            <CountNumber />
            <DecreaseButton />
            <IncreaseButton />
        </>
    );
};

export default Container;
