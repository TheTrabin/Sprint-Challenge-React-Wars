import React from 'react';
import {
     CardText, CardBody,
    CardTitle, Col, CardImg
  } from 'reactstrap';
  import styled from 'styled-components';

//styles



const Card = styled.div `
border: 2px solid limegreen;
background: grey;
`;

const Name = styled.h1`
color: yellow;
font-size: 1.5rm;
`;

const Status = styled.p `
color: Red;
`;

const Species = styled.p`
color: blue;
`;

const Gender = styled.p`
color: white;
background:black;
`;
const Origin = styled.p`
color: blue;
background:Red;
`;
const Location = styled.p`
color: orange;
background:white;
`;

const Character = ({person}) => {
    return (
        <Col xs="6" md="4" xl="3">
            <Card>
                <CardBody>
                     <CardTitle>
                         <Name>{person.name}</Name>
                    </CardTitle>
                    <CardImg src={person.image} />
                 <CardText>
                    <Status>Status:{person.status}</Status>
                    <Species>Species: {person.species}</Species>
                    <Gender>Gender: {person.gender}</Gender>
                    <Origin>Origin: {person.origin.name}</Origin>
                    <Location>Last Known Location:{person.location.name}</Location>
                 </CardText>
                 </CardBody>
            </Card>
        </Col>
    )
    
}

export default Character;