import { RestClient } from '../../services/network'
import { customisedAction } from '../actions'
import { Alert } from 'react-native'

export const generalizedEpic = async (method, url, data, successCallback, failureAction) => {
    try {
        let response
        if (method === 'get') {
            response = await RestClient.get(url)
        } else response = await RestClient.post(url, data)
        const { status, data: resObj, problem } = response
        if (status && status === 200) {
          return successCallback(resObj)
        }
        if (status && (status === 401 || status === 422 || status === 503)) {
          Alert.alert('Error','kuch bhe')
          return customisedAction(failureAction,  { message: resObj.msg, type: 'error' })
        }
        if (problem && problem === 'NETWORK_ERROR') {
          Alert.alert('Error','Netwokr error')
          return customisedAction(failureAction,  { message: `Network Error at ${failureAction.replace('_FAILURE', '')}!`, type: 'error' })
        }
        if (problem && problem === 'TIMEOUT_ERROR') {
          Alert.alert('Error','Timeout Error')
          return customisedAction(failureAction,  { message: `Timeout Error at ${failureAction.replace('_FAILURE', '')}!`, type: 'error' })
        }
        Alert.alert('Error','Unknown Error')
        return customisedAction(failureAction,  { message: `Unknown Error at ${failureAction.replace('_FAILURE', '')}!`, type: 'error' })
    } catch (error) {
      Alert.alert('Error','Unknown exception error')
        console.log(`${failureAction.replace('_FAILURE', '')} Unknown Error`, error)
        return customisedAction(failureAction,  { message: error.message, type: 'error' })
    }
}