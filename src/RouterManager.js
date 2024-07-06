
// import User from './component/User/User';
// import LineChart from './component/chartvalue/LineChart'
// import ApexChart from './component/chartvalue/ApexChart';
// import { userIsAuthenticated, userIsNotAuthenticated } from './hoc/authentication'
import Login from './container/Login'
import HomePage from './component/HomePage/HomePage';
import LabIOT from "./component/LabIot/LabIOT"
import UserManage from './component/Admin/Content/UserManage';
import DashBroad from './component/Admin/Content/Dashbroad';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from './App';
import Admin from './component/Admin/Admin';
import CustomScrollbars from './component/custom/CustomScrollbars'
import { ToastContainer } from 'react-toastify';
import Report from './component/User/Report'
import OverView from './container/OverView';
import ListDevice from './container/overview/ListDevice';
import Todolit from './container/Todolit';
const RouterManage = () => {
    return (
        <>
            <BrowserRouter>
                <CustomScrollbars style={{ height: '100vh', width: '100%' }}>
                    <Routes>
                        <Route path='/' element={<App />}>
                            <Route path='/users' element={<LabIOT />}></Route>
                            <Route index element={<HomePage />}></Route>
                            <Route path='/login' element={<Login />}></Route>
                            <Route path='/clients'>
                                <Route path='list-infor-device' element={<ListDevice />}></Route>
                                <Route index element={<OverView />}></Route>
                            </Route>
                            <Route path='/report' element={<Report />}></Route>
                        </Route>
                        <Route path='/todolist' element={<Todolit />}></Route>
                        <Route path='/admins' element={<Admin />}>
                            {/* <Route path='users-manage' element={<OverView />}></Route> */}
                            <Route index element={<DashBroad />}></Route>
                        </Route>
                    </Routes>

                    <ToastContainer
                        position="bottom-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick={true}
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                </CustomScrollbars>
            </BrowserRouter>
        </>
    )
}
export default RouterManage;