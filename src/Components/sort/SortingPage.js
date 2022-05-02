import React, { useState } from 'react';
import BubbleSort from '../algorithms/BubbleSort';

const SortingPage = () => {
    const [arrLength, setArrLength] = useState("");

    const onFormChange = (e) => {
        const { value } = e.target;
        setArrLength(value);
    };

    const sendData = () => {
        BubbleSort(arrLength);
    };

    return (
        <section>
            <form className='form'>
                <label className='form-label'>
                    Enter an array length, please:
                    <input
                        type='number'
                        min='5'
                        max='500'
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
            >
                Selection Sort
            </button>
        </section>
    );
};

export default SortingPage;