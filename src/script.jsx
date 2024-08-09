import React from'react';
import ReactDOM from 'react-dom/client';

import Body from "./components/Body";
import Header from "./components/Header";
import Error from './components/Error';
import { createBrowserRouter , RouterProvider , Outlet } from 'react-router-dom';
import About  from './components/About';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Grocery from './components/Grocery';
import Footer from './components/Footer';




const AppLayout = ()=>{
    return (
        <div className="App">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path : '/',
        element : <AppLayout/>,
        children :[
            {
                path : '/',
                element : <Body/>
            },
            {
                path : '/about',
                element : <About/>
            },
            {
                path : '/contact',
                element : <Contact/>
            },
            {
                path : '/restaurants/:resId',
                element : <RestaurantMenu/>
            },
            {
                path : '/grocery',
                element : <Grocery/>
            }

        ],
        errorElement : <Error/>
    }
    
]);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);