import {
  Route,
  Routes,
} from "react-router-dom";
import Chart from './component/chart';
import HomePage from './welcome';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" component={HomePage} element={<HomePage />} />
        <Route path="/i-chart" component={Chart} element={<Chart />}  />
      </Routes>
    </div>
  );
}

export default App;
