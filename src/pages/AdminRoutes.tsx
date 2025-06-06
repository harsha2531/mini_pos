import { Navigate, Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import type {RootState} from "../store/store.ts";
import {useSelector} from "react-redux";

const AdminRoutes = () => {
  //read -> selector
  //change -> dispatch
  const isAuthenticated = useSelector((state:RootState)=> state.auth.isAuthenticated);
  if (!isAuthenticated) return <Navigate to='/login' />

  return (
    <div className='flex h-screen overflow-hidden'>
      <div className='flex-shrink-0'>
        <Sidebar />
      </div>
      <div className='flex-1 overflow-y-auto bg-gray-50'>
        <Outlet />
      </div>
    </div>
  )
}

export default AdminRoutes
