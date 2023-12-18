import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import Routes from './routes/Routes';
import { store } from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className='font-inter'>
      <Provider store={store}>
        <RouterProvider router={Routes} />
      </Provider>
    </div>
  );
}

export default App;
