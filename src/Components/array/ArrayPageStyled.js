import styled from "styled-components";

const ArrayPageContainer = styled.section`
    .form {
        margin-bottom: 16px;

        &-label {
            color: #fff;
            font-weight: 600;
        }
        &-input {
            margin-left: 15px;
            font-family: inherit; 
            font-size: 400; 
            width: 75px;
            color: rgb(1, 33, 102);
            border: 1px solid #0099ff;
            border-radius: 0.4rem;
        }
    }

    .btn {
        padding: 0 12px;
        margin-right: 10px;
        background:#4cffc9;
        color: rgb(1, 33, 102);;
        border: 0;
        border-radius: 12px;
        cursor: pointer;
        display: inline-block;
        font-family: 'Noto Sans', sans-serif;
        font-size: 13px;
        font-weight: 400;
        line-height: 2;
        outline: transparent;
        text-align: center;
        text-decoration: none;
        transition: box-shadow .2s ease-in-out;
    }

    .btn:not([disabled]):hover {
        box-shadow: 0 0 .25rem rgba(255, 255, 255, 0.5), -.125rem -.125rem 1rem rgba(255, 255, 255, 0.603), .125rem .125rem 1rem rgba(255, 255, 255, 0.808);
    }

`;

export default ArrayPageContainer;