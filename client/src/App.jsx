import {Toaster} from 'react-hot-toast'
import {Routes, Route, Navigate} from 'react-router-dom'
import LoginLanding from './pages/LoginLanding'
import Layout from './pages/Layout'
import Dashboard from './pages/dashboard'
import Employee from './pages/Employee'
import Attendance from './pages/Attendance'
import Leave from './pages/Leave'
import PaySlips from './pages/PaySlips'
import Setting from './pages/Setting'
import PrintPaySlips from './pages/PrintPaySlips'
import LoginForm from './component/LoginForm'


const App = () => {
  return (
    <>
    <Toaster />
      <Routes>
        <Route path='/login' element={<LoginLanding />} />
        <Route path='/login/admin' element={<LoginForm role="admin" title="Admin Portal" subtitle="Sign in to manage the organization" />} />
        <Route path='/login/employee' element={<LoginForm role="employee" title="Employee Portal" subtitle="Sign in to access your account" />}   />

        <Route element={<Layout />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/employee' element={<Employee />} />
            <Route path='/attendance' element={<Attendance />} />
            <Route path='/leave' element={<Leave />} />
            <Route path='/payslips' element={<PaySlips />} /> 
            <Route path='/setting' element={<Setting />} />
        </Route>
        <Route path='/print/payslips/:id' element={<PrintPaySlips />} />
        <Route path='*' element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </>
  )
}

export default App