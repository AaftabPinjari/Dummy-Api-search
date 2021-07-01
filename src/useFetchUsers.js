
import { useReducer, useEffect } from 'react'
import axios from 'axios'

//url related stuff
const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '60b6023c98e5768341aefad0';

//declaring actions of request
const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error'
}

//reducer to understand every request and getting results
function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.MAKE_REQUEST:
            return { loading: true, users: [] }
        case ACTIONS.GET_DATA:
            return { ...state, loading: false, users: action.payload.users }
        case ACTIONS.ERROR:
            return { ...state, loading: false, jobs: [] }
        default:
            return state
    }
}

//building custom hook for fetching users
function useFetchUsers(params, page) {
    const [state, dispatch] = useReducer(reducer, { users: [], loading: true })

    //getting list of users on  page change or params change
    useEffect(() => {
        dispatch({ type: ACTIONS.MAKE_REQUEST })
        //axios for get request
        axios.get(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID }, params: { page: page, limit: 99, ...params } })
            .then(res => {
                console.log(res)
                dispatch({ type: ACTIONS.GET_DATA, payload: { users: res.data.data } })
            })
            .catch(e => {
                dispatch({ type: ACTIONS.ERROR, payload: { error: e } })
            })
    }, [page, params])

    return state;
}

export default useFetchUsers
