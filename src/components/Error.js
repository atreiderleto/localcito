import styled from '@emotion/styled';

const Error = ({error}) => {

    const Error = styled.p`
        width: 65%;
        margin-top: 20px;
        padding: 15px;
        text-align: center;
        background-color: #FFFFE0;
        color: red;
        border: 2px solid red;
        border-radius: 15px;
    `;

    return (
        <Error>{error}</Error>
    );
}

export default Error;
