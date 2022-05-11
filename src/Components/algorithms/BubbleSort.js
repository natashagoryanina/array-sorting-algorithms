import React from 'react';
import RenderPage from '../render/RenderPage';

const BubbleSort = ({arrLength}) => {
    let algorithm = false;
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
        for (let i = 0; i < arrLength; i++) {
            let randomNumber = generateRandomInteger(1500);
            array.push(randomNumber);
        };
        parallelSortedArr = [...array];
        sortedArr = [...array];
    };

    const calculateAcceleration = (endTimeParallel, endTimeOriginal) => {
        acceleration = Math.round(endTimeParallel / endTimeOriginal); 
        algorithm = true;
    };

    const sortArray = () => {
        generateRandomArray();

        // parallel bubble sort algorithm
        let sorted = 0;

        startTimeParallel = Date.now();
        console.log(startTimeParallel);

        while( sorted == 0) {
            sorted = 1;
            //console.log("odd")
            for( let j = 0; j < arrLength - 1; j+=2) {
                //console.log(`j: ${j}`)
                if (parallelSortedArr[j] > parallelSortedArr[j+1]) {
                    let temp = parallelSortedArr[j];
                    parallelSortedArr[j] = parallelSortedArr[j+1];
                    parallelSortedArr[j+1] = temp;
                    sorted = 0;
                }
                //console.log(parallelSortedArr, sorted)
                
            }
            //console.log("even")
            for( let j = 1; j < arrLength - 1; j+=2) {
                //console.log(`j: ${j}`)
                if (parallelSortedArr[j] > parallelSortedArr[j+1]) {
                    let temp = parallelSortedArr[j];
                    parallelSortedArr[j] = parallelSortedArr[j+1];
                    parallelSortedArr[j+1] = temp;
                    sorted = 0;
                }
                //console.log(parallelSortedArr, sorted)
            }
        }
        endTimeParallel = Date.now() - startTimeParallel;
        console.log(`miliseconds parallel: ${endTimeParallel}`);

        // bubble sort
        startTimeOriginal = Date.now();
        console.log(startTimeOriginal);

        for( let i = 0; i < arrLength - 1; i++) {
            for( let j = 0; j < arrLength - 1 - i ; j++) {
                if (sortedArr[j] > sortedArr[j+1]) {
                    let temp = sortedArr[j];
                    sortedArr[j] = sortedArr[j+1];
                    sortedArr[j+1] = temp;
                }
                //console.log(sortedArr);
            }
        }

        endTimeOriginal = Date.now() - startTimeOriginal;
        console.log(`miliseconds regular: ${endTimeOriginal}`); 

        calculateAcceleration(endTimeParallel, endTimeOriginal);
    };

    sortArray();
    console.log(`Array before sorting: ${array}`);
    console.log(`Parallel bubble sort algorithm: ${parallelSortedArr}`);
    console.log(`Bubble sort: ${sortedArr}`);
    console.log(`acceleration: ${acceleration}`);

    return (
        <section>
            {algorithm && 
                <RenderPage 
                    algorithmName={"Bubble Sort"}
                    parallelAlgorithmName={"Parallel Bubble Sort"}
                    originalArray={array}
                    sortedArray={sortedArr}
                    parallelSortedArray={parallelSortedArr}
                    timeParallel={endTimeParallel}
                    timeOriginal={endTimeOriginal}
                    acceleration={acceleration}
                />
            }
        </section>
    );
};

export default BubbleSort;