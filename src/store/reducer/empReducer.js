
export const savaDataReducers = (state = { data: {} }, action) => {
    switch (action.type) {
        case 'EMP_DETAILS_REQUEST':
            return {
                loading: true,
            }
        case 'EMP_DETAILS_SUCCESS':
            return {
                data: action.payload,
                loading: false
            }
        case 'EMP_DETAILS_FAIL':
            return {
                loading: false
            }
        default:
            return state
    }

}

export const getDataReducers = (state = { data: [] }, action) => {
    switch (action.payload) {
        case 'EMP_REQUEST':
            return {
                loading: true
            }
        case 'EMP_SUCCESS':
            return {
                data: action.payload,
                loading: false,
            }
        default:
            return state
    }

}


export const getDataIdReducers = (state = { data: {} }, action) => {
    switch (action.payload) {
        case 'EMP_ID_REQUEST': {
            return {
                loading: true
            }
        }
        case 'EMP_ID_SUCCESS': {
            return {
                loading: false,
                data: action.payload
            }
        }
        default:
            return state
    }
}