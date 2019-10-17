import React from 'react';
import './App.css';

import Travel from './Travel';

function App() {
  return ( <React.Fragment>
  <Travel country="Earth"  destination="Neo-Tokyo" distance="58km^3/week" photo={require("./img/_0000_NeonTokyo1.jpg")}/>
  <Travel country="Earth"  destination="Neo-Tokyo" distance="58km^3/week" photo={require("./img/_0001_NeonTokyo2.jpg")}/>
  <Travel country="Earth"  destination="Neo-Tokyo" distance="58km^3/week" photo={require("./img/_0002_NeonTokyo3.jpg")}/>
  <Travel country="Romania"  destination="Bucharest" distance="0 m" photo={require("./img/_0003_Bucharest1.jpg")}/>
  <Travel country="Romania"  destination="Bucharest" distance="0 m" photo={require("./img/_0004_Bucharest2.jpg")}/>
  <Travel country="Romania"  destination="Bucharest" distance="0 m" photo={require("./img/_0005_Bucharest3.jpg")}/></React.Fragment>
  );
}

export default App;
