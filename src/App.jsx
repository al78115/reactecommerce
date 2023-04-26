import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import './App.css'
import MyRoutes from './MyRoutes'
import { cartReducer } from './Redux/Reducers/cartReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'


const App = () => {

  const persistConfig = {
  key: 'root',
  storage,
  }
  
  const rootReducer = combineReducers({
    cartStore:cartReducer
  })
    const persistedReducer = persistReducer(persistConfig, rootReducer)

  const store = createStore(persistedReducer)
      let persistor = persistStore(store)

  return (
    <div>
      <Provider store={store}>
                      <PersistGate loading={null} persistor={persistor}>

          <MyRoutes />
             </PersistGate>
        </Provider>
    </div>
  )
}

export default App