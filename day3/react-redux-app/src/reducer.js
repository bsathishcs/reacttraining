export default function countReducer(prevState = { count: 0 }, action) {
    let newState
    switch (action.type) {
        case 'INC':
            newState = { ...prevState, count: prevState.count + 1 }
            break;

        case 'DEC':
            newState = { ...prevState, count: prevState.count - 1 }
            break;

        default:
            newState = { ...prevState }
            break;
    }

    console.log('prevState ', prevState)
    console.log('newState ', newState)

    return newState;
}