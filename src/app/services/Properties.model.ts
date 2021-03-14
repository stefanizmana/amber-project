export interface PropertiesModel {

  id: string;

  name: string;

  description: string;

  location: {

    type: string,

    coordinates: [number, number]

  };

  sold_price: string;

  currency: string;

  images: [

    string,

    string,

  ];

  type: string;
}
