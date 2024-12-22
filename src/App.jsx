import { RouterProvider } from "react-router-dom";

import Tost from "./components/Tost/Tost";
import routes from "./routes/Route";

function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
      <Tost />
    </>
  );
}

export default App;
