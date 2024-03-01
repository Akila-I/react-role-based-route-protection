import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { AuthLayout } from './layouts/AuthLayout'
import { LandingLayout } from './layouts/LandingLayout'
import { AdminProtectedLayout } from './layouts/AdminProtectedLayout'
import { InternalUserProtectedLayout } from './layouts/InternalUserProtectedLayout'
import { ExternalUserProtectedLayout } from './layouts/ExternalUserProtectedLayout'

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

        <Route path='/admin' element={<AdminProtectedLayout />}>
          <Route index element={<AdminHome />} />
          <Route path='profile' element={<Profile />} />
        </Route>

        <Route path='/internal-user' element={<InternalUserProtectedLayout />}>
          <Route index element={<InternalUserHome />} />
          <Route path='profile' element={<Profile />} />
        </Route>

        <Route path='/external-user' element={<ExternalUserProtectedLayout />}>
          <Route index element={<ExternalUserHome />} />
          <Route path='profile' element={<Profile />} />
        </Route>
      </Route>
    </>
  )
);
