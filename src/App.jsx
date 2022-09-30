import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

import BlogLayout from "./pages/BlogLayout";
import BlogPostsPage, { loaderPost } from "./pages/BlogPosts";
import NewPostPage, { actionNewPost } from "./pages/NewPost";
import PostDetailPage, { loaderPostDetail } from "./pages/PostDetail";
import RootLayout from "./pages/RootLayout";
import WelcomePage from "./pages/Welcome";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<WelcomePage />} />
      <Route path="/blog" element={<BlogLayout />}>
        <Route
          index
          element={<BlogPostsPage />}
          loader={loaderPost}
          errorElement={<ErrorPage />}
        />
        <Route
          path=":id"
          element={<PostDetailPage />}
          loader={loaderPostDetail}
          errorElement={<ErrorPage />}
        />
      </Route>
      <Route
        path="/blog/new"
        element={<NewPostPage />}
        action={actionNewPost}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
