const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const pokemon = document.querySelector(".name");
const image = document.querySelector(".pokemon-img");
const rank = document.querySelector(".rank");
const attack = document.querySelector(".attack");
const defence = document.querySelector(".defence");
const speed = document.querySelector(".speed");
const type = document.querySelector(".pok-type");
const weight = document.querySelector(".weight");
const cardColor= document.querySelector(".container");


let btn = document.querySelector(".gen");

 async function newPokemon() {
   let id = Math.floor(Math.random()*150)+1;

   const finalUrl = apiUrl+id;
   const res = await fetch(finalUrl);

    let data =  await res.json();
    image.src =  data.sprites.other.dream_world.front_default;
    pokemon.innerText = data.species.name;
    rank.innerText = "HP"+ "  "+ data.stats[0].base_stat;
    
    attack.innerText = data.stats[1].base_stat;
    defence.innerText = data.stats[2].base_stat;
    speed.innerText = data.stats[5].base_stat;
    let colorType = type.innerText = data.types[0].type.name;
    weight.innerText = Math.round(data.weight *0.1) + " kg";

    // Change background color according to types of pokemon;

        if(colorType == "ground")
          {
            cardColor.style.backgroundColor = "#E0C068";
          }
          else if(colorType == "water")
           {
              cardColor.style.backgroundColor = "#6890F0";
           }
          else if(colorType == "bug")
           {
              cardColor.style.backgroundColor = "#A8B820";
            }
          else if(colorType == "dark")
            {
              cardColor.style.backgroundColor = "#705848";
            }
          else if(colorType == "dragon")
            {
              cardColor.style.backgroundColor = "#7038F8";
            }
            else if(colorType == "electric")
              {
                 cardColor.style.backgroundColor = "#F8D030";
              }
             else if(colorType == "fairy")
              {
                 cardColor.style.backgroundColor = "#EE99AC";
               }
             else if(colorType == "fighting")
               {
                 cardColor.style.backgroundColor = "#C03028";
               }
             else if(colorType == "fire")
               {
                 cardColor.style.backgroundColor = "#F08030";
               }
               else if(colorType == "flying")
                {
                   cardColor.style.backgroundColor = "#A890F0";
                }
               else if(colorType == "ghost")
                {
                   cardColor.style.backgroundColor = "#705898";
                 }
               else if(colorType == "grass")
                 {
                   cardColor.style.backgroundColor = "#78C850";
                 }
               else if(colorType == "ice")
                 {
                   cardColor.style.backgroundColor = "#98D8D8";
                 }
                 else if(colorType == "normal")
                   {
                      cardColor.style.backgroundColor = "#A8A878";
                   }
                  else if(colorType == "poison")
                   {
                      cardColor.style.backgroundColor = "#A040A0";
                    }
                  else if(colorType == "psychic")
                    {
                      cardColor.style.backgroundColor = "#F85888";
                    }
                  else if(colorType == "Rock")
                    {
                      cardColor.style.backgroundColor = "#B8A038";
                    }
                  else if(colorType == "Steel")
                    {
                      cardColor.style.backgroundColor = "#B8B8D0";  
                    }
              
            document.querySelector(".info").style.display ="block";
            document.querySelector(".pokemon-img").style.display ="block";
            document.querySelector(".rank").style.display ="block";
            document.querySelector(".front").style.display ="none";
                
      }
 
   btn.addEventListener("click",()=>{
    newPokemon();
    });
