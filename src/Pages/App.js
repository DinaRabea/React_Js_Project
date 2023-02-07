import './App.css';
import Login from './Login/Login';
import Regist from './Regist/Regist';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import Show from './Show/Show';
import { LanguageContext } from '../Context/LangContext';
import { useState } from 'react';
import store from '../Store/Store';
import { Provider } from 'react-redux';
import Cart from './Cart';

let routers=createBrowserRouter([
  {path:'/' , element:<Layout/> , children:[
    {index:true , element:<Home/>},
    {path:'Login' , element:<Login/>},
    {path:'Regist' , element:<Regist/>},
    {path:'Show/:id' , element:<Show/>},
    {path:'Cart', element:<Cart/>},

    {path:'*' , element:<NotFound/>},
  ]}
])
function App() {
  const [theme, setTheme] = useState('light');
  const [empty, getEmpty] = useState('regular');
  return (
    
     <div className={`App bg-${theme}`} dir={theme == "light" ? "black" : "white"} x={empty=="regular"?"solid":"regular"} >
      <LanguageContext.Provider  value={{theme , setTheme , empty ,getEmpty}}>
          <RouterProvider router={routers}/>
      </LanguageContext.Provider>
     </div>
  );
}

export default App;
