import React from 'react';
import './App.css';
import { QueryClientProvider } from 'react-query';
import queryClient from './config/queryClient';
import { RouterProvider } from 'react-router-dom';
import Routes from './routes/Routes';

function App() {
  return (
    <div className='font-inter'>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Routes} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
