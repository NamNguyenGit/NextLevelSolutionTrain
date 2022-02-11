import { OPEN_LIGHTBOX, CLOSE_LIGHTBOX } from "../types/GalleryType";

const GalleryReducer = (state , action) => {
    if(action.type === OPEN_LIGHTBOX) {
        return {
            ...state,
            lightboxStatus: true,
            currentLightBox: action.payload
        }
    } else if(action.type === CLOSE_LIGHTBOX) {
        return {
            ...state,
            lightboxStatus: false,
            currentLightBox: {},
        }
    } 
    else {
        return state;
    }
   
}
export default GalleryReducer