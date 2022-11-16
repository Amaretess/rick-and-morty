import { Route, Routes } from 'react-router-dom'
import { routesConfig } from './confg/routesConfig';
import "./App.css"

const App = () => {
  return (
    <Routes>
      {routesConfig.map(route => <Route  key={route.id} path={route.path} element={route.element}/>)}
    </Routes>
  );
}
export default App;