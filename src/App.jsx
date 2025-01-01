
import{ Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'

const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element={<MainLayout/>}>

      <Route index element={<HomePage/>}/>
      <Route path='/jobs' element={<JobsPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
      {/*  The path attribute is set to '*', which is a wildcard character. This means that this route will match any URL path that does not match any of the other defined routes in the application. Essentially, it acts as a catch-all route for undefined paths. */}

   </Route>
    
  )
)

const App = () => {
  return (
    <RouterProvider router={router}/>
     
  )
}

export default App