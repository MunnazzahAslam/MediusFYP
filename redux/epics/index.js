import { combineEpics } from 'redux-observable'
import { genericDataEpic } from './genericDataEpic'
export const epics = combineEpics(
    genericDataEpic.getCities,
    genericDataEpic.getTechnologies
    
)
