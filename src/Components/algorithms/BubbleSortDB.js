import React from 'react';

const BubbleSortDB = (arrayLength) => {
    let array = [];
    let parallelSortedArr = [];
    let sortedArr = [];
    let startTimeParallel = 0;
    let endTimeParallel = 0;
    let startTimeOriginal = 0;
    let endTimeOriginal = 0;
    let acceleration = 0;

    const generateRandomInteger = (max) => {
        return Math.floor(Math.random() * max) + 1;
    };

    const generateRandomArray = () => {
        for (let i = 0; i < arrayLength; i++) {
            let randomNumber = generateRandomInteger(10000);
            array.push(randomNumber);
        };
        parallelSortedArr = [...array];
        sortedArr = [...array];
    };

    const calculateAcceleration = (endTimeParallel, endTimeOriginal) => {
        acceleration = Math.round(endTimeOriginal / endTimeParallel); 
    };

    const sortArray = () => {
        generateRandomArray();

        //! Parallel Bubble Sort 
        let sorted = 0;

        startTimeParallel = Date.now();
        
        while( sorted == 0) {
            sorted = 1;
            for( let j = 0; j < arrayLength - 1; j+=2) {
                if (parallelSortedArr[j] > parallelSortedArr[j+1]) {
                    let temp = parallelSortedArr[j];
                    parallelSortedArr[j] = parallelSortedArr[j+1];
                    parallelSortedArr[j+1] = temp;
                    sorted = 0;
                }
            }
            for( let j = 1; j < arrayLength - 1; j+=2) {
                if (parallelSortedArr[j] > parallelSortedArr[j+1]) {
                    let temp = parallelSortedArr[j];
                    parallelSortedArr[j] = parallelSortedArr[j+1];
                    parallelSortedArr[j+1] = temp;
                    sorted = 0;
                }
            }
        }
        endTimeParallel = Date.now() - startTimeParallel;

        //! Bubble Sort
        startTimeOriginal = Date.now();

        for( let i = 0; i < arrayLength - 1; i++) {
            for( let j = 0; j < arrayLength - 1 - i ; j++) {
                if (sortedArr[j] > sortedArr[j+1]) {
                    let temp = sortedArr[j];
                    sortedArr[j] = sortedArr[j+1];
                    sortedArr[j+1] = temp;
                }
            }
        }

        endTimeOriginal = Date.now() - startTimeOriginal;
        calculateAcceleration(endTimeParallel, endTimeOriginal);
    };

    sortArray();
    return {
            "timeOriginal": endTimeOriginal, 
            "timeParallel": endTimeParallel, 
            "acceleration": acceleration
        };
};

export default BubbleSortDB;