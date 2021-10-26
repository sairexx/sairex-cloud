const SET_FILES = "SET_FILES" //экшен чтобы инициализировать файлы
const SET_CURRENT_DIR = "SET_CURRENT_DIR" //экшен для текущей дериктории

const defaultState = {
    files:[],
    curentDir:null
}

export default function fileReducer(state=defaultState,action){
    switch(action.type){
        case SET_FILES: return {...state, files:action.payload}
        case SET_CURRENT_DIR : return {...state, currentDir:action.payload}
        default:
            return state
    }

} 

export const setFiles = (files) => ({type:SET_FILES, payload: files})  //action creator  - функиця которая вернет нам объект с типом и данными
export const setCurrentDir = (dir) => ({type:SET_CURRENT_DIR, payload: dir})
