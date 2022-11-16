import { useState } from 'react'
// import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route } from 'react-router-dom'
import AnimalsList from './components/AnimalsList'
import AnimalCharities from './components/AnimalCharities'
import HomeNav from './components/HomeNav'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import MobileNavigationD from './components/MobileNavigationD'
import MobileNavigation from './components/MobileNavigation'
import Sources from './components/Sources'
import './App.css'
import MobileNavigationS from './components/MobileNavigationS'
function App() {
  const [ darkMode, setDarkMode ] = useState(false)

  const darkTheme = createTheme({
      palette: {
          mode: darkMode ? 'dark' : 'light'
      },
  });
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routes>
        <Route path='/' element={ <><HomeNav check={ darkMode } change={ () => setDarkMode(!darkMode)}/> <MobileNavigation check={ darkMode } change={ () => setDarkMode(!darkMode)}/> <AnimalsList /> </> } />
        <Route path='/donate' element={ <><MobileNavigationD check={ darkMode } change={ () => setDarkMode(!darkMode)}/> <AnimalCharities check={ darkMode } change={ () => setDarkMode(!darkMode)}/> </>}/>
        <Route path='sources' element={ <> <MobileNavigationS check={ darkMode } change={ () => setDarkMode(!darkMode)}/> <Sources check={ darkMode } change={ () => setDarkMode(!darkMode)}/></> }/>
      </Routes>
      </ThemeProvider>
    </div>
  )
}

export default App
