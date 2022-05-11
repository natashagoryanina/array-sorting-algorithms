import React, { useState } from 'react';
import BubbleSort from '../algorithms/BubbleSort';
import MergeSort from '../algorithms/MergeSort';

const ArrayPage = () => {
    const [arrLength, setArrLength] = useState("");
    const [algorithm, setAlgorithm] = useState(false);

    const onFormChange = (e) => {
        const { value } = e.target;
        setArrLength(value);
    };

    const sendData = () => {
        setAlgorithm(true);
    };

    const MergeAlgorithm = () => {
        MergeSort(arrLength);
    };

    return (
        <section>
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
                onClick={sendData}
            >
                Bubble Sort
            </button>
            <button 
                type='button'
                onClick={MergeAlgorithm}
            >
                Merge Sort
            </button>
            {algorithm && <BubbleSort arrLength={arrLength}/>}
        </section>
    );
};

export default ArrayPage;