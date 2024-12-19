import { RouterProvider } from "react-router-dom";

import routes from "./routes/Route";

function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
