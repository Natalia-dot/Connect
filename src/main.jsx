import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthContextProvider } from './context/authContext.jsx'
import { ThemeContextProvider } from './context/themeContext.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes.jsx'

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
        

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <PrimeReactProvider>
    <ThemeContextProvider>
    <AuthContextProvider> 
      <GoogleOAuthProvider clientId='203527155510-r6uo696stf129icop0eps6q9klf5kndl.apps.googleusercontent.com'>
      <RouterProvider router={router}/>
      </GoogleOAuthProvider>
      </AuthContextProvider> 
    </ThemeContextProvider>
    </PrimeReactProvider>
  </React.StrictMode>,
)
