import Layout from "./Pages/Layout/Layout";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import Users from "./Pages/Users/Users";
import AddUser from "./Pages/AddUser/AddUser";


function App() {

  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Users />} />
            <Route path="add" element={<AddUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
