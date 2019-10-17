import React from 'react';

const Travel = ({country, destination, distance, photo}) => (

    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
            <title>Travel Website</title>
        </head>
        <body>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div id="country">
                            <h1>Country</h1>
                            {country}
                            </div>
                    </div>
                    <div className="col">
                        <div id="destination">
                            <h1>Destination</h1>
                            {destination}
                            </div>
                    </div>
                    <div className="col">
                        <div id="distance">
                            <h1>Distance</h1>
                            {distance}
                            </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div id="photo">
                            <h1>Photo</h1>
                            <img src={photo}/>
                            </div>
                    </div>
                </div>
            </div>

        </body>

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </html>
)

export default Travel;