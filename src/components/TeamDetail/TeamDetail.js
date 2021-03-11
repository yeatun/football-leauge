import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetail.css';
import imageUrlMale from '../../male.jpg';
import imageUrlFemale from '../../female.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faGlobe,faFlag,faFutbol,faMars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  
    faYoutube,
    faFacebook,
    faTwitter,
   
  } from "@fortawesome/free-brands-svg-icons";



const TeamDetail = () => {
    const teamStyle ={
        
        padding: "5px",
        paddingTop:"20px",
        border: '0px solid ',
        borderRadius:'20px',
        backgroundColor: "black",
        boxShadow: "10px 10px 5px #505050 ",
       
    }
    
    const {teamId} =useParams();
    const[team, setTeam] = useState([]);
    const{strTeamBadge, strTeam,intFormedYear,strCountry,strSport,strGender,strDescriptionEN,strStadiumDescription} = team;
    
    let imageUrl ="";
    if(team.strGender === true){
       imageUrl= imageUrlFemale;
    }
    else{
        imageUrl=  imageUrlMale ;
    }
    
    useEffect(()=>{
        const url =`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]))

    },[teamId])
    return (
        <div>
            <div className ='background-image' >
            <img  style={{width:"150px",height:'150px'}} src={strTeamBadge} alt=""/>
            
            </div >
            
           
        <div style={teamStyle} className="container">
        <div className="row">
    <div className="col">
       <ul  className="item">
            <li><b>{strTeam}</b></li>
            <li><FontAwesomeIcon icon={faGlobe} /> Founded: <b>{intFormedYear}</b></li>
            <li ><FontAwesomeIcon icon={faFlag}/>  Country: <b>{strCountry}</b></li>
            <li><FontAwesomeIcon icon={faFutbol}/> Sport :<b> {strSport}</b></li>
            <li><FontAwesomeIcon icon={faMars}/>   Gender :<b> {strGender}</b></li>
       </ul>
    </div>
    <div className="col">
    <img style={{width:'350px'}} src={imageUrl} alt=""/>
    </div>
  </div>
        </div>
            
            <div style={{margin:'50px'}}>
                <p>
                {strDescriptionEN}
                </p>
               
                <p>
                    {strStadiumDescription}
                </p>
                
                
            </div>
            <div className="social">
            <a href="https://www.youtube.com/c/jamesqquick"
                   target="_blank" rel="noreferrer"  className="youtube social">
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a href="https://www.facebook.com/learnbuildteach/"
                   target="_blank" rel="noreferrer"  className="facebook social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                <a href="https://www.twitter.com/jamesqquick"  target="_blank" rel="noreferrer" className="twitter social">
                    
                    <FontAwesomeIcon  icon={faTwitter} size="2x" />
                    </a>
            </div>
        </div>
        

        
    );
};

export default TeamDetail;