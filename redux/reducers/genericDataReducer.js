//initial state pass krni hoti hy redux mei
import { GET_CITIES_SUCCESS , GET_TECHNOLOGIES_SUCCESS } from "../../constants/actions"

export default (state = {cities: [] , technologies: []}, { type, payload }) => {
  switch (type) {
    case GET_CITIES_SUCCESS: 
      return { ...state , cities: payload}
    case GET_TECHNOLOGIES_SUCCESS:
      return {...state , technologies: payload}
    default:
      return state
  }
}
