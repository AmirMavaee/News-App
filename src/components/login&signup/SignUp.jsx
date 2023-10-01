import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { notify } from "../../helpers/Toast";
import { validate } from "../../helpers/validate";
import "./Login&Signup.css";

function SignUp() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccept: false,

    isLogin: false,
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
    setErrors(validate(data, "SignUp"));
  }, [data, touched]);

  const changeHandler = (event) => {
    if (event.target.type !== "checkbox") {
      setData({
        ...data,
        [event.target.name]: event.target.value,
      });
    } else {
      setData({
        ...data,
        [event.target.name]: event.target.checked,
      });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify("success", "You Sign in Successfully");
      setTimeout(() => {
        navigate('/')
      }, 6000);
    } else {
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccept: true,
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
            <h1 className="text-header">Sign Up</h1>
          </div>
          <div className="w-full">
            <form onSubmit={submitHandler}>
              <div className="content">
                <label className="mb-3">Name</label>
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={changeHandler}
                  onFocus={focusHandler}
                />
                <span className={errors.name && touched.name && "errorText"}>
                  {touched.name && errors.name}
                </span>
              </div>
              <div className="content">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={changeHandler}
                  onFocus={focusHandler}
                />
                <span className={errors.email && touched.email && "errorText"}>
                  {touched.email && errors.email}
                </span>
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
                <span
                  className={errors.password && touched.password && "errorText"}
                >
                  {touched.password && errors.password}
                </span>
              </div>

              <div className="content">
                <label>Confirm Password</label>
                <input
                  type="text"
                  name="confirmPassword"
                  value={data.confirmPassword}
                  onChange={changeHandler}
                  onFocus={focusHandler}
                />
                <span
                  className={
                    errors.confirmPassword &&
                    touched.confirmPassword &&
                    "errorText"
                  }
                >
                  {touched.confirmPassword && errors.confirmPassword}
                </span>
              </div>

              <div className="policy">
                <div>
                  <label>
                    I accept terms of privacy policy
                  </label>
                  <input
                    type="checkbox"
                    name="isAccept"
                    value={data.isAccept}
                    onChange={changeHandler}
                    onFocus={focusHandler}
                  />
                </div>
                <span
                  className={errors.isAccept && touched.isAccept && "errorText"}
                >
                  {touched.isAccept && errors.isAccept}
                </span>
              </div>

              <div className="btn-container">
                <Link to="/Login">login</Link>
                <button type="submit">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default SignUp;
