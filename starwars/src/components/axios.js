import React, {useState, useEffect} from 'react';
import { Container, Row } from 'reactstrap';
import Character from './Character.js';
import axios from "axios";


const Axiom = () => {

    const [person, setPerson] = useState([]);    

    
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character`)
        .then(response => {
            console.log(response.data.results);
            setPerson(response.data.results);
        })
        .catch(error => {
            console.log("Bugged");
        })
    }, []);

    return ( 
        <Container>
            <Row>
    {person.map(person => {
        return <Character person={person} />
        }
        )
        }
            </Row>
        </Container>
    )
}

export default Axiom;