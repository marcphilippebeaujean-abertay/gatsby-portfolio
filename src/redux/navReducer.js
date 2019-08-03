const defaultState = {
    currentPage: ""
};

const CHANGE_PAGE = "CHANGE_PAGE";

export const changePage = newPage => ({
    type: CHANGE_PAGE, newPage
});

const navReducer = (previousState = defaultState, action) => {
    let newState =  { ...previousState };
    switch (action.type) {
      case CHANGE_PAGE:
        newState.currentPage = action.newPage;
        break;
      default:
    }
    return newState;
};

export default navReducer;