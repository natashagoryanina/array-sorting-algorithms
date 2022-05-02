import React from 'react';

const BubbleSort = (arrLength) => {
    let array = [];
    let sortedArr = [];

    const generateRandomInteger = (max) => {
        return Math.floor(Math.random() * max) + 1;
    };

    const generateRandomArray = () => {
        for (let i = 0; i < arrLength; i++) {
            let randomNumber = generateRandomInteger(500);
            array.push(randomNumber);
        };
        return sortedArr = [...array];
    };

    const sortArray = () => {
        generateRandomArray();

        for( let i = 0; i < arrLength - 1; i++) {
            for( let j = 0; j < arrLength - i - 1; j++) {
                if (sortedArr[j] > sortedArr[j+1]) {
                    let temp = sortedArr[j];
                    sortedArr[j] = sortedArr[j+1];
                    sortedArr[j+1] = temp;
                }
            }
        }
        return sortedArr;
    };

    sortArray();
    console.log(array);
    console.log(sortedArr);

    return (
        <>
            <h4>Bubble Sort</h4>
        </>
    );
};

export default BubbleSort;