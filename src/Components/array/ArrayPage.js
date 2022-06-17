import React, { useState } from 'react';
import BubbleSort from '../algorithms/BubbleSort';
import MergeSort from '../algorithms/MergeSort';
import ArrayPageContainer from './ArrayPageStyled';

const ArrayPage = () => {
    const [arrLength, setArrLength] = useState("");
    const [bubbleAlgorithm, setBubbleAlgorithm] = useState(false);
    const [mergeAlgorithm, setMergeAlgorithm] = useState(false);

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
            
            {bubbleAlgorithm && <BubbleSort arrLength={arrLength}/>}
            {mergeAlgorithm && <MergeSort arrLength={arrLength}/>}
        </ArrayPageContainer>
    );
};

export default ArrayPage;