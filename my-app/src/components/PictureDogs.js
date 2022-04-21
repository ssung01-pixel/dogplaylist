import React, { useState } from "react";

const PictureDogs = () => {
  const [dogs, setDogs] = useState();

  const getDogs = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "dog-breeds2.p.rapidapi.com",
        "X-RapidAPI-Key": "mysecretkey",
      },
    };

    fetch("https://dog-breeds2.p.rapidapi.com/dog_breeds", options)
      // it GETS back a response from a server (404(fail), 200(success), 500(internal server))
      // we are using built in function js sending in some url (http) make an api call to it
      // takes the response and converts it into a json data
      // once takes json data we are going to manipulate data as we wish
      .then((response) => response.json())
      // that a arrow function
      // response is a parameter
      // it takes the response like a 400, 200 so on converts it into json
      .then((data) => {
        const temp = data.slice(0, 10);
        setDogs(temp);
        //setting the dogs
        console.log(dogs);

        // funtion taking in parameters
      })
      //(data) => console.log(data) is a function
      // it takes the previous json and prints the data
      .catch((err) => console.error(err));
    // this is just catching error
  };
  getDogs();
  console.log({ dogs });
  return (
    //displaying the dog pictures
    dogs
      ? // is this item not undefined?
        dogs.map((dog) => {
          // take each item in that array. each item in that array is stored in a variable called dog, essentially a for loop
          // state dogs is being looked at before it even becomes official before setting it the array of dogs being read.
          <div>
            <h1>{dog.breed}</h1>
          </div>;
        })
      : null // we are trying to read something that is undefined
    // if this is undefined then return null
  );
};

export default PictureDogs; // export component
