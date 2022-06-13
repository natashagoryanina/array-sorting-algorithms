import React from 'react';
import RenderPage from '../render/RenderPage';

const MergeSort = ({arrLength}) => {
    let algorithm = false;
    let array = [];
    let arrayMerge = [];
    let arrayBitonic = [];
    let startTimeMerge = 0;
    let endTimeMerge = 0;
    let startTimeBitonic = 0;
    let endTimeBitonic = 0;
    let acceleration = 0;

    const generateRandomInteger = (max) => {
        return Math.floor(Math.random() * max) + 1;
    };

    const generateRandomArray = () => {
        for (let i = 0; i < arrLength; i++) {
            let randomNumber = generateRandomInteger(10000);
            array.push(randomNumber);
        };
        arrayMerge = [...array];
        arrayBitonic = [...array];
    };

    const calculateAcceleration = (endTimeMerge, endTimeBitonic) => {
        acceleration = Math.round(endTimeMerge / endTimeBitonic); 
        algorithm = true;
    };

    generateRandomArray();

    //! Merge Sort
    startTimeMerge = Date.now();

    const merge = (arr, l, m, r) => {
        let n1 = m - l + 1;
        let n2 = r - m;

        // Create temp arrays
        let L = new Array(n1);
        let R = new Array(n2);

        //Copy data to temp arrays L[] and R[]
        for (let i = 0; i < n1; i++) {
            L[i] = arr[l + i];
        };
        for (let j = 0; j < n2; j++) {
            R[j] = arr[m + 1 + j];
        };

	    // Merge the temp arrays back into arr[l..r]
        // Initial index of first subarray
        let i = 0;
        // Initial index of second subarray
        let j = 0;
        // Initial index of merged subarray
        let k = l;

        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            }
            else {
                arr[k] = R[j];
                j++;
            }
            k++;
        };

        // Copy the remaining elements of
        // L[], if there are any
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        };

        // Copy the remaining elements of
        // R[], if there are any
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        };
    };

    // l is for left index and r is
    // right index of the sub-array
    // of arr to be sorted */
    const mergeSort = (arr, l, r) => {
        if ( l >= r ) {
            return; //returns recursively
        }

        let m = l + parseInt((r-l)/2);

        mergeSort(arr, l, m);
        mergeSort(arr, m+1, r);
        merge(arr, l, m, r);
    };

    //console.log(`Merge Sort Original array: ${array}`);
	mergeSort(arrayMerge, 0, arrLength - 1);
    //console.log(`Merge Sort Sorted array: ${arrayMerge}`);

    endTimeMerge = Date.now() - startTimeMerge;
    //console.log(`miliseconds merge ${endTimeMerge}`);

    //! Bitonic Sort
    startTimeBitonic = Date.now(); 

    const exchange = (arr, i, j, d) => {    
        if ( (arr[i] > arr[j] && d == 1) || (arr[i] < arr[j] && d == 0)) {    
            let temp = arr[i];    
            arr[i] = arr[j];    
            arr[j] = temp;    
        }    
    };   

    const bitonicMerge = (arr, beg, c, d) => {     
        if (c > 1) {    
            let k = c/2;    
            for (let i = beg; i < beg+k; i++)    
                exchange(arr, i, i+k, d);    
                bitonicMerge(arr, beg, k, d);    
                bitonicMerge(arr, beg+k, k, d);    
        }    
    };

    const bitonicSort = (arr, beg, c, d) => {     
        if (c>1) {    
            let k = c/2;    
            bitonicSort(arr, beg, k, 1);  // sort in ascending order  
            bitonicSort(arr, beg+k, k, 0);  // sort in descending order  
            bitonicMerge(arr,beg, c, d);  //merge the sequence in ascending order  
        }    
    };    
     
    /* function to call the bitonicSort() function to sort the given array in   
    ascending order */  
    const sort = (arr, n, order) => {    
        bitonicSort(arr, 0, n, order);    
    };    
 
    let n = arrayBitonic.length;   
    let order = 1;   
    //console.log(`Bitonic Sort before: ${array}`);
    sort(arrayBitonic, n, order);    
    //console.log(`Bitonic Sort after: ${arrayBitonic}`);

    endTimeBitonic = Date.now() - startTimeBitonic;
    //console.log(`miliseconds merge ${endTimeBitonic}`);

    calculateAcceleration(endTimeMerge, endTimeBitonic);
    //console.log(`acceleration ${acceleration}`);

    return (
        <section>
            {algorithm &&
                 <RenderPage
                    algorithmName={"Merge Sort"}
                    parallelAlgorithmName={"Bitonic Sort"}
                    originalArray={array}
                    sortedArray={arrayMerge}
                    parallelSortedArray={arrayBitonic}
                    timeParallel={endTimeBitonic}
                    timeOriginal={endTimeMerge}
                    acceleration={acceleration}
                 />
            }
        </section>
    );
};

export default MergeSort;