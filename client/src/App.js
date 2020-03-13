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
    }
  } = useQuery(IS_LOGGED_IN);
  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} />
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/signup"} exact component={Signup} />
        <Route path={"/signin"} exact component={Signin} />
        <Route path={"/mypage"} exact component={Mypage} />
        <Route path={"/post"} exact component={GetPosts} />
        <Route path={"/post/create"} exact component={PostForm} />
        <Route path={"/post/:postId"} exact component={GetPostById} />
        <Route path={"/post/:postId/update"} exact component={PostForm} />
        <Redirect to={"/"} from={"*"} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
