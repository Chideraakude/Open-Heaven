import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Attendance from './Components/Attendance/AttendancePage'
import Home from './Components/Home/HomePage'
import Payment from './Components/Payment/PaymentPage'
import SignUp from './Components/Sign/Signup'
import Login from './Components/Login/LoginPage'
import Everybody from './Components/Auth/Everybody'
import Ushers from './Components/Auth/Ushers'
import Pastor_Admin from './Components/Auth/Pastor_Admin'
import View_Payment from './Components/Payment/View_Payment'
import View_Attendance from './Components/Attendance/View_Attendance'
import Accountants_Pastor from './Components/Auth/Accountants_Pastor'
import Manage from './Components/Manage/ManagePage'

const router=createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"/signup",
    element: <SignUp/>
  },
  {
    path:"/login",
    element: <Login/>
  },

  {
    path:"/",
    element:<Accountants_Pastor />,
    children:[
      {
        path:"/viewPayment",
        element: <View_Payment/>
      },
    ]
  },
  {
    path:"/",
    element:<Pastor_Admin />,
    children:[
      {
        path:"/manage",
        element: <Manage />
      },
    ]
  },
  {
    path:"/",
    element:<Ushers />,
    children:[
      {
        path:"/attendance",
        element: <Attendance/>
      },
      {
        path:"/viewAttendance",
        element: <View_Attendance/>
      },
    ]
  },
  {
    path:"/",
    element:<Everybody />,
    children:[
      {
        path:"/payment",
        element: <Payment />
      },
    ]
  }
])
function App() {
  

  return (

    <RouterProvider router={router} />

  )
}

export default App
