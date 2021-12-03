import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.text`
    color: #245ca0;
    font-size: 40px;
`;

export const Button = styled.button`
    width: 168px;
    height: 37px;
    background-color: #245ca0;
    color: #ffffff;
    border-radius: 30px;
    font-size: 20px;
    margin: 25px;
`;

export const Input = styled.input`
    width: 330px;
    height: 41px;
    background-color: #edf0f4;
    border-radius: 10px;
    font-size: 18px;
    margin: 15px;
    padding-left: 15px;
    border: 1px solid #245ca0;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
