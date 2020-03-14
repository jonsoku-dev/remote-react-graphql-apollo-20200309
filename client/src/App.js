import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Mypage from "./pages/Mypage";
import GetPosts from "./pages/Post/GetPosts";
import GetPostById from "./pages/Post/GetPostById";
import PostForm from "./pages/Post/PostForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { IS_LOGGED_IN } from "./shared.local";
import Footer from "./components/Footer";

const App = () => {
  const {
    data: {
      auth: { isLoggedIn }
    },
    loading,
    error
  } = useQuery(IS_LOGGED_IN);

  if (error) return <></>;
  if (loading) return <></>;

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} />
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/signup"} component={Signup} />
        <Route path={"/signin"} component={Signin} />
        {isLoggedIn && <Route path={"/mypage"} component={Mypage} />}
        <Route path={"/post"} exact>
          <GetPosts isLoggedIn={isLoggedIn} />
        </Route>
        {isLoggedIn && (
          <Route path={"/post/create"} exact component={PostForm} />
        )}
        <Route path={"/post/:postId"} exact component={GetPostById} />
        {isLoggedIn && (
          <Route path={"/post/:postId/update"} exact component={PostForm} />
        )}

        <Redirect from={"*"} to={"/"} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
