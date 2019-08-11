import styled from 'styled-components';

export const Wrapper = styled.div`
    background: url("https://cdn.dribbble.com/users/28455/screenshots/1389791/weather.gif") no-repeat 50% 50% / cover;
    height: 500px;
    width: 500px;
    `
export const WrapCenter = styled.div`
    display:flex;
    justify-content:flex-end;
    align-items:center;
    height:75%;
    flex-direction:column;
`
export const Temp = styled.div`
    color:white;
    font-size:24px;
    font-family:"Areal",sans-serif;
    margin-bottom:30px;
`