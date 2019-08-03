const initialState = {
    currentUrl: null
}

const pageNavigationReducer = (state = initialState, action) => {
    const newState = state;
    switch(action.type) {
        case "SWITCH_PAGE":
            newState.currentUrl = action.url;
            break;
        default:
            console.error("bad page navigation reducer action type");
            break;
      }
      return newState;
    }

export default pageNavigationReducer;