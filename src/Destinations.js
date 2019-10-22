import React from "react";

const Destination = () => {
    let dArr = ['Neon-Tokyo', 'Unknown', 'Arbitrary', 'Random', 'Wherever'];
    return (<ul>{dArr.map(x => <li>{x}</li>)}</ul>);
};

export default Destination;