import React from 'react';
import Players from '../players/Players';
import Header from '../header/Header';

const Directory = ({headername, teams}) => {
 return (
  <>
   <Header headername={headername}/> 
   <Players teams={teams} />
  </>
 )
}

export default Directory
