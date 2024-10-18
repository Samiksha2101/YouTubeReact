import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import appStore from "./utils/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Head></Head>
        <RouterProvider router={appRouter}></RouterProvider>
        {/**
         * header
         * body
         *  sidebar
         *    menu
         *  main container
         *    button list
         *    video container
         *      video card
         */}
      </div>
    </Provider>
  );
}

export default App;
