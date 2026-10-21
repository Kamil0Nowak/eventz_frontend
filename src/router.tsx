import { createBrowserRouter } from "react-router-dom";
import EventsPage from "./pages/EventsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <EventsPage />,
  },
]);
