import styled from "styled-components";

const TableContainer = styled.table`
    margin-top: 25px;
    
    th {
        padding: 6px;
    }

    th, td {
        text-align: center;
        font-family: inherit; 
        font-size: 300; 
        line-height: inherit;
        color: rgb(1, 33, 102);
        background-color: #ffffff5c;
        border: 1px solid #8affdc;
        border-collapse: collapse;
        border-radius: 0.4rem;
    }

    td {
        max-width: 600px;
    }
`;

export default TableContainer;