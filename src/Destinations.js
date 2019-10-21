import React from "react";

const Quotes = () => {
    let dArr = ['Neon-Tokyo', 'Unknown', 'Arbitrary', 'Random', 'Wherever'];
    return (<ul>{dArr.map(x => <li>{x}</li>)}</ul>);
};

export default Destination;