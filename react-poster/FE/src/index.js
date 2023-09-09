import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import Posts, { loader as PostsLoader } from "./routes/Posts";
import reportWebVitals from "./reportWebVitals";
import RootLayout from "./routes/RootLayout";
import NewPost, { action as SubmitAction} from "./routes/NewPost/NewPost";
import PostDetails, { loader as PostDetailsLoader } from "./routes/postDetails/postDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />, // this element is rendered only after PostsLoader call is resolved
        loader: PostsLoader, // this exposes data in Posts component and respectively in its nested component
        children: [
          { path: "create-posts", element: <NewPost />, action:SubmitAction },
          { path: ":id", element: <PostDetails />, loader:PostDetailsLoader }
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
