import React from 'react';
import { useEffect, useState } from 'react';
import Team from '../Team/Team';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Team/Team.css';
import './Home.css';




const Home = () => {
 
    const [teams , setTeams] = useState([]);
  useEffect(()=>{
    const url =`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain`;
    fetch(url)
    .then(res => res.json())
    .then(data => setTeams(data.teams))
  },[])
    return (
        <div>
          
             <div style={{padding:"100px"}}>
             <h1 style={{color:"#207BB6"}} ><b>YEATUN LEAGUE</b></h1>
             </div>
       
       
           
           <div className= "auto-grid">
       {
          teams.map(team => <Team team={team}></Team>)
        }
       </div>
           
        </div>
    );
};

export default Home;