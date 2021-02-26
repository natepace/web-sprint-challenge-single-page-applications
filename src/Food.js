import React from 'react';
import styled from 'styled-components';

export default function Food(props){
const {photo,name,price,type,time} = props;



    return (
        <Stylediv>
            <StyleInfo>
            <Styleimg src= {photo}/>
            <h3>{name}</h3>
            <p>{price}</p>
            <p>{type} </p>
            <p>{time} est delivery</p>
            </StyleInfo>
        </Stylediv>
    );
}

const Styleimg = styled.img`
width: 200px;
height 120px;
`
const Stylediv = styled.div`
border: 2px solid ;
justify-content:center;
margin: 5px;


`
const StyleInfo = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
padding: 10px;
`