import { useState } from "react";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./components/Home";
import Life from "./components/Life";
import Hostel from "./components/Hostel";
import Intro from "./components/Intro";
import Deck from "./components/Deck";
import Experience from "./components/Experience";
import Senior from "./components/Senior";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  let items = ["New York", "San Franciso", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Home />,
      children: [
        { path: "/", element: <Intro /> },
        { path: "/life", element: <Life /> },
        { path: "/life/:deckId", element: <Deck />},
        { path: "/experience", element: <Experience />},
        { path: "/experience/:deckId", element: <Senior />},
        { path: "/hostel", element: <Hostel /> },
      ],
    },
  ];

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}
export default App;