import {Routes, Route} from "react-router-dom"

import './App.css';


function App() {
  return (
      <Routes>
        <Route path={'/'} element={<Layout/>}>

          <Route index element={<HomePage/>}/>


          <Route path={'*'} element={<NotFoundPage/>}/>

        </Route>
      </Routes>
  );
}

export default App;
