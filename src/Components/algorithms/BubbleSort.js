import React from 'react';

const BubbleSort = (arrLength) => {
    let array = [];
    let parallelSortedArr = [];
    let sortedArr = [];

    const generateRandomInteger = (max) => {
        return Math.floor(Math.random() * max) + 1;
    };

    const generateRandomArray = () => {
        for (let i = 0; i < arrLength; i++) {
            let randomNumber = generateRandomInteger(500);
            array.push(randomNumber);
        };
        parallelSortedArr = [...array];
        sortedArr = [...array];
    };

    const sortArray = () => {
        generateRandomArray();

        // parallel bubble sort algorithm
        
        let sorted = 0;

        while( sorted == 0) {
            sorted = 1;
            console.log("odd")
            for( let j = 0; j < arrLength - 1; j+=2) {
                console.log(`j: ${j}`)
                if (parallelSortedArr[j] > parallelSortedArr[j+1]) {
                    let temp = parallelSortedArr[j];
                    parallelSortedArr[j] = parallelSortedArr[j+1];
                    parallelSortedArr[j+1] = temp;
                    sorted = 0;
                }
                console.log(parallelSortedArr, sorted)
                
            }
            console.log("even")
            for( let j = 1; j < arrLength - 1; j+=2) {
                console.log(`j: ${j}`)
                if (parallelSortedArr[j] > parallelSortedArr[j+1]) {
                    let temp = parallelSortedArr[j];
                    parallelSortedArr[j] = parallelSortedArr[j+1];
                    parallelSortedArr[j+1] = temp;
                    sorted = 0;
                }
                console.log(parallelSortedArr, sorted)
            }
        }

        // bubble sort

        for( let i = 0; i < arrLength - 1; i++) {
            for( let j = 0; j < arrLength - 1 - i ; j++) {
                if (sortedArr[j] > sortedArr[j+1]) {
                    let temp = sortedArr[j];
                    sortedArr[j] = sortedArr[j+1];
                    sortedArr[j+1] = temp;
                }
            }
        }
    };

    sortArray();
    console.log(`Array before sorting: ${array}`);
    console.log(`Parallel bubble sort algorithm: ${parallelSortedArr}`);
    console.log(`Bubble sort: ${sortedArr}`);

    return (
        <>
            <h4>Bubble Sort</h4>
        </>
    );
};

export default BubbleSort;