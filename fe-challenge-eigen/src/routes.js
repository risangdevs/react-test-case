import {
    Routes,
    Route,
    Outlet,
    Redirect,
    Navigate,
    useNavigate,
  } from "react-router-dom";
import App from "./App";
import Detail from "./components/Detail";
import News from "./components/News";
  
  function Navigator() {
    return (
      <Routes>
        <Route path="/" /* element={<Layout />} */>
          <Route index element={<News />}></Route>
          {/* <Route path="login" element={<Login />}></Route> */}
          <Route path="/:id" element={<Detail />}></Route>
        </Route>
      </Routes>
    );
  }
  export default Navigator