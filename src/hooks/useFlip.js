import React, { useState } from "react";

/** Flip a card. */
function useFlip() {
    // set initial value to true
    const [isFacingUp, setIsFacingUp] = useState(true);
    const flipCard = () => {
        setIsFacingUp(isUp => !isUp);
    }
    // return state and function to flip
    return [isFacingUp, flipCard];
}

export default useFlip;