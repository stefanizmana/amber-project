const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors({
  credentials: true,
  origin: true,
}));

app.use('/login', (req, res) => {
  res.send(
    [
      {
        username: 'test',
        password: 'test'
      },
      {
        username: 'admin',
        password: 'admin'
      },
      {
        username: 'user',
        password: 'user'
      },
      {
        username: ''
      }
    ]
  )
})

app.use('/properties', (req, res) => {
  res.send([{
    id: "528471d3-f8d9-4905-ab91-08d858e49abe",

    name: "Los Angeles Empire",

    description: "Nice view and amazing garden",

    location: {

      type: "Point",

      coordinates: [34.052235, -118.243683]

    },

    sold_price: "130000",

    currency: "USD",

    images: [

      "./assets/AM1506.jpg",

    ],

    type: "House"


  },
    {
      id: "6328471d3-f8d9-4905-ab91-08d858e49abe",

      name: "New York City",

      description: "Nice view and cosy",

      location: {

        type: "Point",

        coordinates: [40.730610, -73.935242]

      },

      sold_price: "200000",

      currency: "EUR",

      images: [

        "./assets/House.jpg"

      ],

      type: "House"


    },
    {
      id: "3328471d3-f8d9-4905-ab91-08d858e49abe",

      name: "London City",

      description: "Nice view and cosy",

      location: {

        type: "Point",

        coordinates: [51.509865, -0.118092]

      },

      sold_price: "300000",

      currency: "EUR",

      images: [

        "./assets/apart1.jpg",

      ],

      type: "Apartament"


    },
    {
      id: "4328471d3-f8d9-4905-ab91-08d858e49abe",

      name: "Bucharest City",

      description: "Nice view and cosy",

      location: {

        type: "Point",

        coordinates: [44.439663, 26.096306]

      },

      sold_price: "445000",

      currency: "EUR",

      images: [

        "./assets/apart2.jpg",

      ],

      type: "Apartament"


    },
    {
      id: "3255471d3-f8d9-4905-ab91-08d858e49abe",

      name: "Moscow City",

      description: "Nice view and cosy",

      location: {

        type: "Point",

        coordinates: [55.751244, 37.618423]

      },

      sold_price: "150000",

      currency: "EUR",

      images: [

        "./assets/apart3.jpg",

      ],

      type: "Apartament"


    },
    {
      id: "1375471d3-f8d9-4905-ab91-08d858e49abe",

      name: "Bucharest City",

      description: "Nice view and cosy",

      location: {

        type: "Point",

        coordinates: [44.462765, 26.114034]

      },

      sold_price: "250000",

      currency: "EUR",

      images: [

        "./assets/apart4.jpg",

      ],

      type: "Apartament"


    }
  ]);
})



app.listen(8090, () => console.log('API is running on http://localhost:8090/login'));
