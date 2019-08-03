import { createStore, compose, applyMiddleware } from "redux"
import rootReducer from './rootReducer';
import thunk from "redux-thunk";
import Layout from "../components/layout";

const middleware = [thunk];

const reduxStore = () =>
          createStore(rootReducer,
                     compose(applyMiddleware(...middleware),
                             window.__REDUX_DEVTOOLS_EXTENSION___ &&
                             window.__REDUX_DEVTOOLS_EXTENSION___()));

export default ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  return (<Provider store={reduxStore}>
            <Layout>
                {element}
            </Layout>
          </Provider>)
}