import React from 'react';

const MergeSort = (arrLength) => {
    let array = [];

    const generateRandomInteger = (max) => {
        return Math.floor(Math.random() * max) + 1;
    };

    const generateRandomArray = () => {
        for (let i = 0; i < arrLength; i++) {
            let randomNumber = generateRandomInteger(100);
            array.push(randomNumber);
        };
    };

    const merge = (arr, l, m, r) => {
        console.log(`l ${l}`)
        let n1 = m - l + 1;
        let n2 = r - m;

        // Create temp arrays
        let L = new Array(n1);
        let R = new Array(n2);

        //Copy data to temp arrays L[] and R[]
        for (let i = 0; i < n1; i++)
            L[i] = arr[l + i];
        for (let j = 0; j < n2; j++)
            R[j] = arr[m + 1 + j];
        
        console.log(`merge array ${arr} L ${L} R ${R}`)

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
                console.log(`array ${arr}`)
            }
            else {
                arr[k] = R[j];
                j++;
                console.log(`array ${arr}`)
            }
            k++;
        }

        // Copy the remaining elements of
        // L[], if there are any
        while (i < n1) {
            console.log(`i ${i} n1 ${n1} k ${k}`)
            arr[k] = L[i];
            console.log(arr)
            i++;
            k++;
        }
        console.log(`Copy the remaining elements of ${arr} L`)

        // Copy the remaining elements of
        // R[], if there are any
        while (j < n2) {
            console.log(`j ${j} n2 ${n2} k ${k}`)
            arr[k] = R[j];
            console.log(arr)
            j++;
            k++;
        }
        console.log(`Copy the remaining elements of ${arr} R`)
    }

    // l is for left index and r is
    // right index of the sub-array
    // of arr to be sorted */
    function mergeSort(arr, l, r){
        console.log(`mergeSort ${arr} l ${l} r ${r}`);

        if(l>=r){
            return; //returns recursively
        }
        let m = l + parseInt((r-l)/2);
        mergeSort(arr,l,m);
        mergeSort(arr,m+1,r);
        merge(arr,l,m,r);
    }


    generateRandomArray();
    console.log(` Original array: ${array}`);
	mergeSort(array, 0, arrLength - 1);
    console.log(` Sorted array: ${array}`);


    /// Bitonic Sort 

    // const BitonicSort = (direction, arr) => {
    //     console.log(`direction ${direction}, arr ${arr}`);

    //     if (arr.length <= 1) {
    //         return arr;
    //     }
    //     else {
    //         let middle = arr.length / 2;
    //         console.log(`middle: ${middle}`);
    //         let firstPartArr = arr.slice(0, middle);
    //         console.log(`first part arr ${firstPartArr}`);
    //         let secondPartArr = arr.slice(middle);
    //         console.log(`second part arr: ${secondPartArr}`)
    //         let first = BitonicSort(true, firstPartArr);
    //         console.log(`first bitonic sort TYPE ${typeof first} ${first}`);
    //         let second = BitonicSort(false, secondPartArr);
    //         console.log(`second bitonic sort TYPE ${typeof second} ${second}`);
    //         return BitonicMerge(direction, [...first, ...second]);
    //     }
    // }

    // const BitonicMerge = (direction, arr) => {
    //     console.log(`BITONIC MERGE arr index 0 ${arr[0]} arr ${arr}`);
        
    //     if (arr.length == 1) {
    //         return arr;
    //     }
    //     else {
    //         BitonicCompare(direction, arr);
    //         let middle = arr.length / 2;
    //         let firstPartArr = arr.slice(0, middle);
    //         let secondPartArr = arr.slice(middle);
    //         let first = BitonicMerge(true, firstPartArr);
    //         console.log(`-- first bitonic Merge TYPE ${typeof first} ${first}`);
    //         let second = BitonicMerge(false, secondPartArr);
    //         console.log(`-- second bitonic Merge TYPE ${typeof second} ${second}`);
    //         return [...first, ...second];
    //     }
    // }

    // const BitonicCompare = (direction, arr) => {
    //     let dist = arr.length / 2;
    //     console.log(`bitonic COMPARE ${arr}`);
    //     for (let i = 0; i < dist; i++) {
    //         // if (arr[i] > arr[i+dist]) {
    //         //     console.log(`arr i ${arr[i]} arr i + dist ${arr[i+dist]} direction ${direction}`)
    //         //     let temp = arr[i];
    //         //     arr[i] = arr[i+dist];
    //         //     arr[i+dist] = temp;
    //         // }

    //         if (arr[i] > arr[i+dist] && direction === true) {
    //             console.log(`arr i ${arr[i]} arr i + dist ${arr[i+dist]} direction ${direction}`)
    //             let temp = arr[i];
    //             arr[i] = arr[i+dist];
    //             arr[i+dist] = temp;
    //             console.log(arr)
    //         }

    //         if (arr[i] < arr[i+dist] && direction === false) {
    //             console.log(`arr i ${arr[i]} arr i + dist ${arr[i+dist]} direction ${direction}`)
    //             let temp = arr[i];
    //             arr[i] = arr[i+dist];
    //             arr[i+dist] = temp;
    //             console.log(arr);
    //         }
    //     }
    // }

    // let testArr = [3, 7, 4, 8, 6, 2, 1, 5];
    // let testArray = BitonicSort(true, testArr);
    // console.log(`bitonic sort ${testArray}`);


    const exchange = (arr, i, j, d) => {    
        if ( (arr[i] > arr[j] && d == 1) || (arr[i] < arr[j] && d == 0)) {    
            let temp = arr[i];    
            arr[i] = arr[j];    
            arr[j] = temp;    
        }    
    }    

    const bitonicMerge = ( arr, beg, c, d) => {     
        if (c > 1) {    
            let k = c/2;    
            for (let i = beg; i < beg+k; i++)    
                exchange(arr, i, i+k, d);    
                bitonicMerge(arr, beg, k, d);    
                bitonicMerge(arr, beg+k, k, d);    
        }    
    } 

    const bitonicSort = (arr, beg, c, d) => {     
        if (c>1) {    
            let k = c/2;    
            bitonicSort(arr, beg, k, 1);  // sort in ascending order  
            bitonicSort(arr, beg+k, k, 0);  // sort in descending order  
            bitonicMerge(arr,beg, c, d);  //merge the sequence in ascending order  
        }    
    }    
     
    /* function to call the bitonicSort() function to sort the given array in   
    ascending order */  
    const sort = (arr, n, order) => {    
        bitonicSort(arr, 0, n, order);    
    }    

    let arr = [3, 7, 4, 8, 6, 2, 1, 5, 19, 59, 29, 69, 49, 9, 4, 39];    
    let n = arr.length;   
    let order = 1;   
    console.log(`before sorting ${arr}`);
    sort(arr, n, order);    
    console.log(`after sorting ${arr}`);

    return (
        <>
        </>
    );
}

export default MergeSort;