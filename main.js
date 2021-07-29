const pokeCard = document.querySelector('.card') //etiqueta div contenedora

const pokeColors = {
    //colores elegidos para el fondo de cada tipo pokemon
    bug: '#C0F341',
    dark: '#000000',
    dragon: '#5A10EF',
    electric: '#F4D702',
    fairy: '#F36695',
    fighting: '#FF0000',
    fire: '#FF3600',
    flying: '#7093BD',
    ghost: '#140353',
    grass: '#0A7D06',
    ground: '#906850',
    ice: '#0AF9FD',
    normal: '#777777',
    poison: '#21013C',
    psychic: '#BF0FC7',
    rock: '#523507',
    steel: '#676767',
    water: '#2136EC'
}

function mostrarMensaje(event){
    //funcion principal con fetch (no use axios xc)
    event.preventDefault()
    const pokeName = document.getElementById('nombre')
    const namePoke = pokeName.value
    const url = `https://pokeapi.co/api/v2/pokemon/${namePoke.toLowerCase()}` //url
    fetch(url)
    .then(res => res.json())
    .then(req => {
        console.log(req)
        showCard(req)
        // showStats(req)
        
    })
}




function showCard(pokemon){
    pokeCard.style.opacity = 1
    //una funcion por cada parte de la card (1-nombre y sprite, 2-tipos, 3-stats base 4-color de fondo de los tipos)
    showHeader(pokemon)
    showTypes(pokemon)
    showStats(pokemon)
    setCardColor(pokemon)
}


//funcion de la cabecera
function showHeader(pokemon){
     pokeCard.innerHTML = `
     <h2 id="nameHtml" class="text-center mt-2">
        ${pokemon.name}
     </h2>
     <picture class="bg-white d-flex justify-content-center align-items-center">
        <img src="${pokemon.sprites.front_default}" alt="" id="img">
     </picture>
     `
}


//funcion de los tipos
function showTypes(pokemon){
    //validacion para crear un segundo tipo si el pokemon lo posee
    if (pokemon.types.length == 2) {
        pokeCard.innerHTML += `
        <div class="types" id="types">
            <h3 class="h3 mb-4">Types</h3>
            <span class="d-inline type1 text-white px-3 py-2 mx-3" id="type1" ">
                ${pokemon.types[0].type.name}
            </span>
            <span class="d-inline type2 text-white px-3 py-2 mx-3" id="type2">
                ${pokemon.types[1].type.name}
            </span>
        </div>
        `
    } else {
        pokeCard.innerHTML += `
        <div class="types" id="types">
            <h3 class="h3 mb-4">Types</h3>
            <span class="d-inline type1 text-white px-3 py-2 mx-auto" id="type1">
                ${pokemon.types[0].type.name}
            </span>
        </div>
        `
    }
}

//todas las estadisiticas base
function showStats(pokemon){
    pokeCard.innerHTML += `
    <div class="stats row my-4 my-md-5 bg-white mx-2 py-2">
        <p class="col-md-4 col-12"><b>Hp:</b> ${pokemon.stats[0].base_stat}</p>
        <p class="col-md-4 col-12"><b>Atk:</b> ${pokemon.stats[1].base_stat}</p>
        <p class="col-md-4 col-12"><b>Def:</b> ${pokemon.stats[2].base_stat}</p>
        <p class="col-md-4 col-12"><b>Atk Esp</b>: ${pokemon.stats[3].base_stat}</p>
        <p class="col-md-4 col-12"><b>Def Esp:</b> ${pokemon.stats[4].base_stat}</p>
        <p class="col-md-4 col-12"><b>Speed:</b> ${pokemon.stats[5].base_stat}</p>
    </div>
    `
}

const setCardColor = (pokemon)=>{
        switch (pokemon.types[0].type.name) {
            case 'bug':
                document.getElementById('type1').style.background = pokeColors.bug
                break;
            case 'dark':
                document.getElementById('type1').style.background = pokeColors.dark
                break;
            case 'dragon':
                document.getElementById('type1').style.background = pokeColors.dragon
                break;
            case 'electric':
                document.getElementById('type1').style.background = pokeColors.electric
                break;
            case 'fairy':
                document.getElementById('type1').style.background = pokeColors.fairy
                break;
            case 'fighting':
                document.getElementById('type1').style.background = pokeColors.fighting
                break;
            case 'ghost':
                document.getElementById('type1').style.background = pokeColors.ghost
                break;
            case 'grass':
                document.getElementById('type1').style.background = pokeColors.grass
                break;
            case 'ground':
                document.getElementById('type1').style.background = pokeColors.ground
                break;
            case 'ice':
                document.getElementById('type1').style.background = pokeColors.ice
                break;
            case 'normal':
                document.getElementById('type1').style.background = pokeColors.normal
                break;
            case 'poison':
                document.getElementById('type1').style.background = pokeColors.poison
                break;
            case 'physic':
                document.getElementById('type1').style.background = pokeColors.psychic
                break;
            case 'rock':
                document.getElementById('type1').style.background = pokeColors.rock
                break;
            case 'steel':
                document.getElementById('type1').style.background = pokeColors.steel
                break;
            case 'water':
                document.getElementById('type1').style.background = pokeColors.water
                break;
            case 'fire':
                document.getElementById('type1').style.background = pokeColors.fire
                break;
            case 'flying':
                document.getElementById('type1').style.background = pokeColors.flying
                break;
            default:
                break;
        }
        //este switch es por si el pokemon tiene dos tipos
        switch (pokemon.types[1].type.name) {
            case 'flying':
                document.getElementById('type2').style.background = pokeColors.flying
                break;
            case 'bug':
                document.getElementById('type2').style.background = pokeColors.bug
                break;
            case 'dark':
                document.getElementById('type2').style.background = pokeColors.dark
                break;
            case 'dragon':
                document.getElementById('type2').style.background = pokeColors.dragon
                break;
            case 'electric':
                document.getElementById('type2').style.background = pokeColors.electric
                break;
            case 'fairy':
                document.getElementById('type2').style.background = pokeColors.fairy
                break;
            case 'fighting':
                document.getElementById('type2').style.background = pokeColors.fighting
                break;
            case 'ghost':
                document.getElementById('type2').style.background = pokeColors.ghost
                break;
            case 'grass':
                document.getElementById('type2').style.background = pokeColors.grass
                break;
            case 'ground':
                document.getElementById('type2').style.background = pokeColors.ground
                break;
            case 'ice':
                document.getElementById('type2').style.background = pokeColors.ice
                break;
            case 'normal':
                document.getElementById('type2').style.background = pokeColors.normal
                break;
            case 'poison':
                document.getElementById('type2').style.background = pokeColors.poison
                break;
            case 'physic':
                document.getElementById('type2').style.background = pokeColors.psychic
                break;
            case 'rock':
                document.getElementById('type2').style.background = pokeColors.rock
                break;
            case 'steel':
                document.getElementById('type2').style.background = pokeColors.steel
                break;
            case 'water':
                document.getElementById('type2').style.background = pokeColors.water
                break;
            case 'fire':
                document.getElementById('type2').style.background = pokeColors.fire
                break;
            
            default:
                break;
        }
     
    
}