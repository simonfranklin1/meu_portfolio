import { ColorModeContext, useMode } from './context'
import { CssBaseline, ThemeProvider } from '@mui/material'
import './App.css'
import { TopBar, SideBar } from "./components"
import { Route, Routes } from 'react-router-dom'
import { Bar, Calendar, Contacts, Dashboard, FAQ, Form, Geography, Invoices, Line, Pie, Team } from "./routes"

function App() {
  const [ theme, colorMode ] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>

      <ThemeProvider theme={theme}>

        <CssBaseline />

        <div className="App">

          <SideBar />

          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>

        </div>

      </ThemeProvider>
      
    </ColorModeContext.Provider>
  )
}

export default App
