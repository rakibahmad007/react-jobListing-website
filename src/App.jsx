
import{ Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage'

const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element={<MainLayout/>}>

      <Route path='/' element={<HomePage/>}/>

   </Route>
    
  )
)

const App = () => {
  return (
    <RouterProvider router={router}/>
     
  )
}

export default App