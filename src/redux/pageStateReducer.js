const defaultState = {
    pageLoaded: false
};

export const CONFIRM_PAGE_LOAD = "CONFIRM_PAGE_LOADED";

export const confirmPageLoad = {
    type: CONFIRM_PAGE_LOAD
}

const pageStateReducer = (previousState = defaultState, action) => {
    let newState =  { ...previousState };
    switch (action.type) {
      case CONFIRM_PAGE_LOAD:
        newState.pageLoaded = true;
        break;
      default:
    }
    return newState;
};

export default pageStateReducer;