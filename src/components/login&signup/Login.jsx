import { useEffect, useState } from "react";
import { validate } from "../../helpers/validate";
import { notify } from "../../helpers/Toast";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./Login&Signup.css";
import { AiOutlineClose } from "react-icons/ai";

function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const focusHandler = (event) => [
    setTouched({
      ...touched,
      [event.target.name]: true,
    }),
  ];

  useEffect(() => {
    setErrors(validate(data, "LogIn"));
  }, [data, touched]);

  const changeHandler = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify("success", "You Log in Successfully");
      setTimeout(() => {
        navigate('/')
      }, 6000);
    } else {
      setTouched({
        email: true,
        password: true,
      });
      notify("error", "Invalid Data");
    }
  };
  return (
    <div className="body">
      <div className="container">
        <Link to="/"><AiOutlineClose style={{color:"#fff"}}/></Link>
        <div>
          <div>
            <h1 className="text-header">Login</h1>
          </div>
          <div>
            <form onSubmit={submitHandler}>
              <div className="content">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={changeHandler}
                  onFocus={focusHandler}
                />
                <span className={errors.email && touched.email && "errorText"}>{touched.email && errors.email}</span>
              </div>
              <div className="content">
                <label>Password</label>
                <input
                  type="text"
                  name="password"
                  value={data.password}
                  onChange={changeHandler}
                  onFocus={focusHandler}
                />
                <span className={errors.password && touched.password && "errorText"}>{touched.password && errors.password}</span>
              </div>

              <div className="btn-container">
                <button type="submit">Login</button>
                <Link to="/SignUp">Sign Up</Link>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Login;
