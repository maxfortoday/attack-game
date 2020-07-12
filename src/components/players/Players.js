import React from 'react'
import './Players.css';

const Players = ({teams}) => {

 // console.log(teams,'teams');

 // 4 cercles total, 3 circles each one is a step, depends on the status of the team (3 statuses) the circle is colored
 // if the team have all statuses on done then the 4th circle is colored also
 // on click on the not colored circle for moving the status of the team by 1
 

 let count = 0;      

 return (
  
  <>
   {
    
    teams.map(team => {
     if(team.steps.length === 0) return null;

     const teamName = team.team_name
     let teamProgress = {
      teamName,
      progress: {
       done: 0,
       in_progress: 0,
       not_started: 0
      }
     }

     team.steps.reduce((acc,curr) => {      
       if(curr.status === 'done') {
        return teamProgress.progress.done = acc + 1
       }
       if(curr.status === 'in_progress') {
        return teamProgress.progress.in_progress = acc + 1
       }
       if(curr.status === 'not_started') {
        return teamProgress.progress.not_started = acc + 1
       }

      return acc
     },0)
     
     let {progress:{done,in_progress,not_started}} = teamProgress;

     if(done >= 3 && in_progress >= 3 && not_started >= 3) {
       teamProgress.complete = true
      }

     if(teamProgress.complete === true) return null;

     const stepHandle = (e) => {

      if(team.team_name === teamName) { 
      
       if(e.target.innerText.includes('Setup')  ) {
        done++
        if(done >= 3) {
         e.target.classList.add("done");
        }
        e.target.innerText = `Setup ${done}`
       }
       if(e.target.innerText.includes('Download Macro')) {
        in_progress++
        if(done >= 3 && in_progress >= 3) {
         e.target.classList.add("in_progress");
        }
         e.target.innerText = `Download Macro ${in_progress}`
       }
       if(e.target.innerText.includes('Anothe Step')) {
        not_started++
        if(done >= 3 && in_progress >= 3 && not_started >= 3) {
         e.target.classList.add("not_started");
        }
        e.target.innerText = `Anothe Step ${not_started}`
       }

       if(done >= 3 && in_progress >= 3 && not_started >= 3) {
        e.target.parentElement.nextElementSibling.classList.add('completed')

        const finishedTeam = e.target.parentElement.parentElement.parentElement;   
        count++
        const div = document.createElement('div')
        div.classList.add('leaders-board');
        div.innerHTML = `
        Team: ${teamName} finished the run in ${count} place`;
         finishedTeam.appendChild(div)
        }
      }

     }
           
      return (
       <div className="players-continer" key={team.team_id}>
         <div className="player-name" >{team.team_name}</div>
         <div className="player-steps">
          <div 
           onClick={stepHandle} 
           className={`player-step ${done >= 3 ? 'done' : ''}`}> Setup: {done} </div>
          <div 
           onClick={stepHandle} 
           className={`player-step ${in_progress >= 3 ? 'in_progress' : ''}`}> Download Macro: {in_progress} </div>
          <div 
           onClick={stepHandle} 
           className={`player-step ${not_started >= 3 ? 'not_started' : ''}`}> Anothe Step: {not_started} </div>
         </div>
         <div className={`player-completed 
          ${done >= 3 && in_progress >= 3 && not_started >= 3 ? 'completed' : ''}
         `}> Attack Completed </div>
       </div>
       
      )
    })
   }
  </>
 )
}

export default Players
