import React, { useState } from 'react';
import { addArray } from '../../services/API';
import BubbleSort from '../algorithms/BubbleSort';
import BubbleSortDB from '../algorithms/BubbleSortDB';
import MergeSort from '../algorithms/MergeSort';
import ArrayPageContainer from './ArrayPageStyled';

const ArrayPage = () => {
    const [arrLength, setArrLength] = useState("");
    const [bubbleAlgorithm, setBubbleAlgorithm] = useState(false);
    const [mergeAlgorithm, setMergeAlgorithm] = useState(false);

    // second form code 

    const [arrayLength, setArrayLength] = useState("");
    const [selectedAlgorithm, setSelectedAlgorithm] = useState("");
    const [arrayData, setArrayData] = useState({});

    //..................
    const onFormChange = (e) => {
        const { value } = e.target;
        setArrLength(value);
    };
    
    const BubbleAlgorithm = () => {
        setBubbleAlgorithm(true);
    };

    const MergeAlgorithm = () => {
        setMergeAlgorithm(true);
    };

    // second form code

    const onHandleSubmit = (e) => {
        e.preventDefault();
        if(selectedAlgorithm == 'BubbleSort') {
            // BubbleSortDB(arrayLength);
            // console.log(BubbleSortDB(arrayLength));
            const sortDataObj = BubbleSortDB(arrayLength);
            setArrayData(sortDataObj);
            console.log(sortDataObj);
            console.log("array data", arrayData);
        }
    };

    const onSecondFormChange = (e) => {
        const { value, name } = e.target;
        console.log(value, name);
        if (name == "arrayLength") {
            setArrayLength(value);
        }
        else if ( name == "algorithm") {
            setSelectedAlgorithm(value);

        }
        // setArrayLength(value);
        // console.log(value)
        // if (value == "BubbleSort") {
        //     BubbleSortDB(arrayLength);
        //     console.log(BubbleSortDB(arrayLength));
        // }
    };
    //..................
    
    return (
        <ArrayPageContainer>
            <form className='form'>
                <label className='form-label'>
                    Enter an array length, please:
                    <input
                        type='number'
                        min='5'
                        max='5000'
                        value={arrLength}
                        name='arrLength'
                        onChange={onFormChange}
                        className='form-input'
                        required
                    />
                </label>
            </form>
            <button 
                type='button'
                onClick={BubbleAlgorithm}
                className='btn'
            >
                Bubble Sort
            </button>
            <button 
                type='button'
                onClick={MergeAlgorithm}
                className='btn'
            >
                Merge Sort
            </button>
            <form onSubmit={onHandleSubmit}>
                <label>
                    Enter an array length, please:
                    <input
                        type='number'
                        min='5'
                        max='500000'
                        value={arrayLength}
                        name='arrayLength'
                        onChange={onSecondFormChange}
                        //className='form-input'
                        required
                    />
                </label>
                <p>Please select an algorithm:</p>
                <label>
                    Bubble Sort
                    <input 
                        type="radio" 
                        id="bubbleSort" 
                        name="algorithm" 
                        value="BubbleSort"
                        onChange={onSecondFormChange}
                    />
                </label>
                <label>
                    Merge Sort
                    <input 
                        type="radio" 
                        id="mergeSort" 
                        name='algorithm'
                        value='MergeSort'
                        onChange={onSecondFormChange}
                    />
                </label>
                <button 
                    type='submit'
                >
                    Calculate 
                </button>
            </form>
            {bubbleAlgorithm && <BubbleSort arrLength={arrLength}/>}
            {mergeAlgorithm && <MergeSort arrLength={arrLength}/>}
        </ArrayPageContainer>
    );
};

export default ArrayPage;