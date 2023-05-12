import {
    GET_TIPOS,
    FILTER_TIPOS,
    GET_POKEMONS,
    ORDER_ATAQUE,
    ORDER_NOMBRE,
    GET_BY_NOMBRE,
    GET_BY_DETALLE,
    GET_CREADOS,
    CREATE_POKE
} from './Actions/constantes.jsx'

const initialState = {
    state : [],
    pokemons: [],
    tipos: [],
    form: [],
    detail:{}
}

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_POKEMONS:
            return { ...state, pokemons: action.payload, state: action.payload };

        case GET_TIPOS:
            return { ...state, tipos: action.payload };

        case GET_BY_NOMBRE:
                  return {
                    ...state,
                    pokemons: action.payload
                  };
              

        case GET_CREADOS:
            return { ...state, pokemons: action.payload };

        case GET_BY_DETALLE:
            return { ...state, detail: action.payload };
        
        case CREATE_POKE:
            return { ...state, form: action.payload };

        case ORDER_NOMBRE:
            const orderNombres = action.payload === 'A-Z' ?
                state.pokemons.sort(function (a, b) {
                    if (a.nombre > b.nombre) {
                        return 1;
                    }
                    if (b.nombre > a.nombre) {
                        return -1
                    }
                    return 0;
                }) :
                state.pokemons.sort(function (a, b) {
                    if (a.nombre > b.nombre) {
                        return -1;
                    }
                    if (b.nombre > a.nombre) {
                        return 1;
                    }
                    return 0;
                })
            return {
                ...state,
                pokemons: orderNombres
            }

        case ORDER_ATAQUE:
            const orderAtaques = action.payload === 'Min' ?
                    state.pokemons.sort(function (a, b) {
                        if (a.ataque > b.ataque) {
                            return 1;
                        }
                        if (b.ataque > a.ataque) {
                            return -1
                        }
                        return 0;
                    }) :
                    state.pokemons.sort(function (a, b) {
                        if (a.ataque > b.ataque) {
                            return -1;
                        }
                        if (b.ataque > a.ataque) {
                            return 1;
                        }
                        return 0;
                    })
                return {
                    ...state,
                    pokemons: orderAtaques
            }

        case FILTER_TIPOS:
            const allPokemons = state.state
            const statusFiltered = action.payload === "All" ? allPokemons : allPokemons?.filter(el => el.tipo?.includes(action.payload) )
            
            return {
                ...state,
                pokemons: statusFiltered
            }

        default:
            return {...state}
    }
}

export default rootReducer;