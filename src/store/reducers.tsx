import {combineReducers} from "redux";
import {TOGGLE_THEME} from "./action.tsx";

const initialState = {
    theme: 'white'
}
const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return {
                ...state,
                theme: action.payload, // так мы не просто переключаем, но используем значение из нашего action
                // theme: state.theme === 'white' ? 'grey' : 'white',
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    theme: themeReducer,
});

export default rootReducer;