import React from 'react';

import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Team.css';




const Team = (props) => {
   
    const{strTeamBadge, strTeam,strSport,idTeam} = props.team;
   
    return (
        
    <div className="wrapper">
    
         <div >
             
         <Container className= "auto-grid">
           <Row>
           <Col>
           <Card.Title><img style={{width:"150px",height:'150px'}} src={strTeamBadge} alt=""/></Card.Title>
          <Card.Text>
          <h3> {strTeam}</h3> 
          <p>Sports : <b> {strSport}</b>
          </p>
          </Card.Text>
           <button className ="button" ><Link  to ={`/Explore/${idTeam}`}><b>Explore</b></Link></button>
           </Col>
           </Row>
       </Container>
         </div>
        
    </div>

    );
};

export default Team;