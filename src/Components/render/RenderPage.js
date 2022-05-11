import React from 'react';
import TableContainer from './RenderPageStyled';

const RenderPage = ({   algorithmName,
                        parallelAlgorithmName,
                        originalArray, 
                        sortedArray, 
                        parallelSortedArray,  
                        timeParallel, 
                        timeOriginal,
                        acceleration }) => {

    const newOriginalArray = originalArray.join(', ');
    const newSortedArray = sortedArray.join(', ');
    const newParallelSortedArray = parallelSortedArray.join(', ');

    return (
        <TableContainer>
            <tr>
                <th></th>
                <th>Original Array</th>
                <th>Sorted Array</th>
                <th>Time</th>
                <th>Acceleration</th>
            </tr>
            <tr>
                <th>{algorithmName}</th>
                <td>{newOriginalArray}</td>
                <td>{newSortedArray}</td>
                <td>{timeOriginal}</td>
                <td>{acceleration}</td>
            </tr>
            <tr>
                <th>{parallelAlgorithmName}</th>
                <td>{newOriginalArray}</td>
                <td>{newParallelSortedArray}</td>
                <td>{timeParallel}</td>
                <td>{acceleration}</td>
            </tr>
        </TableContainer>
    );
}

export default RenderPage;