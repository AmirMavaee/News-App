import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import store from "./app/store";
import ContactUs from "./components/contactUs/ContactUs";
import Home from "./components/home/Home";
import Login from "./components/login&signup/Login";
import SignUp from "./components/login&signup/SignUp";
import NotFoundPage from "./components/notFoundPage/NotFoundPage";
import PostContent from "./components/postContent/PostContent";
import Posts from "./components/posts/Posts";
import "./Styles/App.css";

function App() {
  return (
    <section style={{backgroundColor:"#212529"}}>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signup" element={<SignUp/>}/>
          <Route path="/404" element={<NotFoundPage/>}/>
          <Route path="/ContactUs" element={<ContactUs/>}/>
          <Route path="/:Post" element={<Posts/>}/>
          <Route path="/Blog/:title" element={<PostContent/>}/>
        </Routes>
      </Provider>
    </section>
  );
}

export default App;
