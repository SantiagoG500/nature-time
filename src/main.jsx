import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import ErrorBoundary from './routes/Error-page'
import About from './routes/About'
import Root from './routes/Root'
import Home from './routes/Home'
import AppLayout from './routes/layout/AppLayout'
import WikiPage from './routes/Wikipage'
import Quiz from './routes/Quiz'

import { WikipediaLoader } from './loaders/WikipediaLoader'
import Results from './routes/Results'

const root = createRoot(document.getElementById('app'))
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path='/'
        element={<Root />}
        errorElement={<AppLayout> <ErrorBoundary /> </AppLayout>}
      >
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route
          path='wiki/'
          element={<WikiPage />}
          loader={WikipediaLoader}
        />
        <Route
          path='quiz/'
          element={<Quiz />}
        />
        <Route
          path='results/'
          element={<Results />}
        />
      </Route>
    </>
  )
)

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
