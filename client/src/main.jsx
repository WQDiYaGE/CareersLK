import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import axios from 'axios'
import { setUser } from './redux/authSlice'
import { toast } from 'sonner'

const persistor = persistStore(store);

// Axios interceptor for session timeout handling
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Dispatch logout action
      store.dispatch(setUser(null)); // Clear user data from Redux
      toast.error('Session expired. Please log in again.');
      window.location.href = '/login'; // Redirect to login page
    }
    return Promise.reject(error); // Forward the error for further handling
  }
);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
