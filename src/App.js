import React, {useEffect, useState} from "react";
import axios from "axios";

export default function Harry() {

  let Api = "https://hp-api.herokuapp.com/api/characters";
  const [personagem, setPersonagem] = useState([]);

  useEffect(() => {
    axios.get(Api).then(response => {
      console.log(response.data);
      setPersonagem(response.data.slice(0,25));
    })
  },[Api])

  return (
    <div className="App">
      <section>{personagem.map((item) => (
        <>    
          <h3>{item.name}</h3>
          <div>
            <img src={item.image} alt={item.name}/>
            <ul>
              <li><strong>Espécie:</strong> {item.species}</li>
              <li><strong>Gênero:</strong> {item.gender}</li>
              <li><strong>Casa:</strong> {item.house}</li>
            </ul>
          </div>
        </>
      ))}</section>
    </div>
  );
}