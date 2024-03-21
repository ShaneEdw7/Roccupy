import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, Login } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Login />
      </div>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
