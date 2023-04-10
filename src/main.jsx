import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Statistics from './components/Statistics'
import AppliedJobs from './components/AppliedJobs'
import Blog from './components/Blog'
import JobDetails from './components/JobDetails'
import { cartAndProductData } from './loader/getCart'



const router = createBrowserRouter([

 {
  path:'/',
  element:<App></App>,
  children:[
    {
      path:'/',
      element:<Home></Home>,
      loader:()=>fetch('jobsData.json')
    },
    {
      path:'statistics',
      element:<Statistics></Statistics>
    },
    {
      path:'jobs',
      element:<AppliedJobs></AppliedJobs>,
       loader :cartAndProductData,
    },
     {
      path:'job/:id',
      element:<JobDetails></JobDetails>,
      loader:({params})=>fetch("/jobsData.json")
      
     },
    {
      path:'blog',
      element:<Blog></Blog>
    }
  ]
 }



])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
