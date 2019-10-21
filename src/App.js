import React from 'react';
import './App.css';

import Travel from './Travel';


function App() {
  return (
    <div className="madagascar">
      <Travel country="Earth" destination="Neo-Tokyo" distance="58km^3/week" photo={require("./img/1.jpg")} />
      <Travel country="Earth" destination="Neo-Tokyo" distance="58km^3/week" photo={require("./img/2.jpg")} />
      <Travel country="Earth" destination="Neo-Tokyo" distance="58km^3/week" photo={require("./img/3.jpg")} />
      <Travel country="Romania" destination="Bucharest" distance="0 m" photo={require("./img/4.jpg")} />
      <Travel country="Romania" destination="Bucharest" distance="0 m" photo={require("./img/5.jpg")} />
      <Travel country="Romania" destination="Bucharest" distance="0 m" photo={require("./img/6.jpg")} />
    </div>
  );
}

export default App;
