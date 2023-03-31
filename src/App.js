import Body from "./components/Body";
import Head from "./components/Head";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Head />,
  children: [
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />
        },
      ]
    },

    {
      path: "/watch",
      element: <Body />,
      children: [
        {
          path: "/watch",
          element: <WatchPage />
        }
      ]
    }
  ]
}])

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter} >
      </RouterProvider>
    </div>
  );
}

export default App;
