import React from 'react';
import styled from 'styled-components';

export const Header = styled.div`
    background-color: #ff6666;
    height: 60px;
    padding: 20px;
    color: white;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`
export const User = styled.div`
    height: 60px;
    width: 60px;
    background-image: url("http://en.tintin.com/images/tintin/persos/images/milou.png");
    background-color:orange;
    border-radius: 60%;
    background-size: 100% 100%;
    border: solid 1px #222;
`
export const Filters = styled.div`
    border-radius: 20px;
    width: 300px;
    height: 700px;
    box-shadow: 5px 10px 8px 10px #888888; 
    background-color: LightSteelBlue;
`