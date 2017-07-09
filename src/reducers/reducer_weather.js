import {FETCH_WEATHER} from '../actions/index';

export default function WeatherReducer(state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER:
            // return state.concat([action.payload.data]);// es5
            return [action.payload.data, ...state]; // es6, same thing
    }

    return state;
}
