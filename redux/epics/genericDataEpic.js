import { switchMap } from 'rxjs/operators'
import { ofType } from 'redux-observable'

import { customisedAction } from '../actions'
import { generalizedEpic } from './generalizedEpic'
import {
  GET_CITIES,
  GET_CITIES_FAILURE,
  GET_CITIES_SUCCESS,
  GET_TECHNOLOGIES,
  GET_TECHNOLOGIES_FAILURE,
  GET_TECHNOLOGIES_SUCCESS,
} from '../../constants/actions'
import { END_POINTS } from '../../constants/apis'

export class genericDataEpic {
  static getCities = action$ =>
    action$.pipe(
      ofType(GET_CITIES), //action type btaty heyin 
      switchMap(
        async () => {
          return generalizedEpic(
            'get',  //define method
            END_POINTS.getCities, //endpoint
            null , //data pass obj bna k mtlb {}
            (resObj) => { //callback
              const cities = resObj.map( (m , index) => {
                return {
                  key: index , label: m.name
                }
              } )
              return customisedAction(GET_CITIES_SUCCESS, cities)
            },
            GET_CITIES_FAILURE
          )
        }
      )
    )
    static getTechnologies = action$ =>
    action$.pipe(
      ofType(GET_TECHNOLOGIES), 
      switchMap(
        async () => {
          return generalizedEpic(
            'get',  
            END_POINTS.getTechnology,
            null , 
            (resObj) => { 
              const technologies = resObj.map( (m , index) => {
                return {
                  key: index , label: m.name
                }
              } )
              return customisedAction(GET_TECHNOLOGIES_SUCCESS, technologies)
            },
            GET_TECHNOLOGIES_FAILURE
          )
        }
      )
    )
}
