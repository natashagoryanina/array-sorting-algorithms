import axios from "axios";

const BASE_URL = "https://sorting-algorithms-bc34d-default-rtdb.firebaseio.com";

export const addArray = async (sortAlgorithm, arrayData) => {
    try {
        const response = await axios.post(
            BASE_URL + `/arrays/${sortAlgorithm}.json`, 
            arrayData
        );
    } catch (error) {
        
    }
};