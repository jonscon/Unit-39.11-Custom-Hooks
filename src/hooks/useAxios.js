import React, { useState, useEffect } from "react";
import {v1 as uuid} from "uuid";
import axios from "axios";

/** Use axios to get data from a url. */
function useAxios(keyInLocalStorage, baseUrl) {
    const [responses, setResponses] = useLocalStorage(keyInLocalStorage);

    const addData = async (restOfUrl = "") => {
        console.log(restOfUrl);
        const result = await axios.get(`${baseUrl}${restOfUrl}`);
        setResponses(data => [...data, {...result.data, id: uuid()}])
    }

    const clearData = () => setResponses([]);

    // return a piece of state and function to use axios
    return [responses, addData, clearData];
}

/** Use local storage to store previous data drawn */
function useLocalStorage(key, initialValue = []) {
    if (localStorage.getItem(key)) {
      initialValue = JSON.parse(localStorage.getItem(key));
    }
    const [value, setValue] = useState(initialValue);
  
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);
  
    return [value, setValue];
}

export default useLocalStorage;
export { useAxios, useLocalStorage };