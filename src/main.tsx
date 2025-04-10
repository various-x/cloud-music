import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import routers from './route/router.tsx'
const router = createBrowserRouter(routers)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
