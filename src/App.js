import { Home, MainLayout } from "./router/router"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
