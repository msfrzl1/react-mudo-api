import { useRoutes } from "react-router-dom";
import { routeList } from "./components/Routes/route";

function App() {
  const element = useRoutes(routeList);
  return element;
}

export default App;
