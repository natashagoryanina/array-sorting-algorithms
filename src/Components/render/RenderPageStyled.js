import styled from "styled-components";

const TableContainer = styled.table`
    th {
        padding: 6px;
    }

    th, td {
        text-align: center;
        font-family: inherit; 
        font-size: 300; 
        line-height: inherit;
        color: #2e0972;
        background-color: #ffffff5c;
        border: 1px solid #d0bafa;
        border-collapse: collapse;
        border-radius: 0.4rem;
    }

    td {
        max-width: 400px;
    }
`;

export default TableContainer;