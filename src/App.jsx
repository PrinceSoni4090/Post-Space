import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'
// import Manager from './components/Manager'
import { Toggle } from './components/DarkMode/Toggle'
// import useLocalStorage from 'use-local-storage'

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const [isDark, setIsDark] =useState(true);


  useEffect(() => {
    authService.getCurrentUser()
      .then((userdata) => {
        if (userdata) dispatch(login({ userdata }));
        else dispatch(logout());

      })
      .finally(() => setLoading(false))
  }, [dispatch])


const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />}
        />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};



  return !loading ? (
    <div className='App' data-theme={isDark ? "dark" : "light"}  >

      <div className='min-h-screen flex flex-wrap content-between ' >

        <div className='w-full'>

          <Header />
          <main>
            <Toggle
              isChecked={isDark}
              handleChange={() => setIsDark(!isDark)}
            />
            <Outlet />

          </main>
        </div>
        <div className='w-full block'>
          <Footer />

        </div>


      </div>
    </div>
  ) : null

}

export default App
