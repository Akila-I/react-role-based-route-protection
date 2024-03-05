import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { AuthLayout } from './layouts/AuthLayout'
import { LandingLayout } from './layouts/LandingLayout'
import { ProtectedLayout } from './layouts/ProtectedLayout'

import { LandingPage } from './pages/Landing'
import { LoginPage } from './pages/Login'
import { SignupPage } from './pages/Signup'

import { AdminHome } from './pages/admin/AdminHome'
import { InternalUserHome } from './pages/internal-user/InternalUserHome'
import { ExternalUserHome } from './pages/external-user/ExternalUserHome'

import { Profile } from './pages/Profile'

// import './App.css'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<AuthLayout />}>
        <Route path='/' element={<LandingLayout />}>
          <Route index element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
        </Route>

        <Route path='/admin' element={<ProtectedLayout role="admin" />}>
          <Route index element={<AdminHome />} />
          <Route path='profile' element={<Profile />} />
        </Route>

        <Route path='/internal-user' element={<ProtectedLayout role="internal-user" />}>
          <Route index element={<InternalUserHome />} />
          <Route path='profile' element={<Profile />} />
        </Route>

        <Route path='/external-user' element={<ProtectedLayout role="external-user" />}>
          <Route index element={<ExternalUserHome />} />
          <Route path='profile' element={<Profile />} />
        </Route>
      </Route>
    </>
  )
);
