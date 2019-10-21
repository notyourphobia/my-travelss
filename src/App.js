import React from 'react';
import './App.css';

import Travel from './Travel';
import Destination from './Destinations';


function App() {
  return (
    <div className="madagascar">
      <Travel country="Earth" destination="Neo-Tokyo" distance="58km^3/week" photo={"https://i.imgur.com/mUtqr1P.jpg"} />
      {/* <Travel country="Earth" destination="Neo-Tokyo" distance="58km^3/week" photo={"https://i.imgur.com/H5vk9bo.jpg"} /> */}
      {/* <Travel country="Earth" destination="Neo-Tokyo" distance="58km^3/week" photo={"https://i.imgur.com/rDU3VIl.jpg"} />
      <Travel country="Romania" destination="Bucharest" distance="0 m" photo={"https://i.imgur.com/0h7sS1M.jpg"} />
      <Travel country="Romania" destination="Bucharest" distance="0 m" photo={"https://i.imgur.com/As8VVCE.jpg"} /> */}
      <Travel country="Romania" destination="Bucharest" distance="0 m" photo={"https://i.imgur.com/5VPcEYc.jpg"} />
      <Destination/>
    </div>
  );
}

export default App;
