import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ListTable from "./components/ListTable";
import SingleDetails from "./components/SingleDetails";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="App" style={{ height: "100vh" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/list" element={<ListTable />} />
          <Route path="/details/:id" element={<SingleDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
