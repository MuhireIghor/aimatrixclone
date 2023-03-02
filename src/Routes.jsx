import React,{lazy} from 'react';
import {useRoutes} from 'react-router-dom'
import Aboutus from './components/About/Aboutus';
import Contacts from './components/contacts/Contacts';
import Maincomponent from './components/Maincomponent';
import Notfoundpage from './components/Notfoundpage';
const Homelayout = lazy(()=>import('./layouts/Homelayout'))
const Routes = () => {
  return useRoutes([{
    path:"/",
    element:<Homelayout />,
    children:[
        {
            index:true,element:<Maincomponent/> 
        },{

          path:"/pages/contact",
          element:<Contacts />
        },{
          path:"/pages/discover-the-power-of-matrix-ai-movement-our-story-and-mission-to-empower-you-with-training-tools-and-e-commerce-store",
          element:<Aboutus />
        }
    ]
  }
  ,{
    path:"*",
    element:<Notfoundpage />
  }])
}

export default Routes