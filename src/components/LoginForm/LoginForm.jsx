import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { login } from "../../redux/auth/operations";
import s from "./LoginForm.module.css";

const initialValues = {
  email: "",
  password: "",
};

const applySchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(7, "Password must be at least 7 characters")
    .required("Password is required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm, setStatus }) => {
    try {
      await dispatch(login(values)).unwrap();
      resetForm();
    } catch (error) {
      setStatus(error || "Login failed");
    }
  };

  return (
    <div className={s.form}>
      <div className={s.text}>
        <h2>Sign in now!</h2>
        <p>
          Good to see you again! Just a quick login — because even genius
          contact organizers need access
        </p>
      </div>
      <Formik
        validationSchema={applySchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ status }) => (
          <Form>
            <label>
              <span>Email</span>
              <Field
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Email"
                required
              />
              <ErrorMessage className={s.error} name="email" component="div" />
            </label>

            <label>
              <span>Password</span>
              <Field
                type="password"
                name="password"
                autoComplete="current-password"
                placeholder="Password"
                required
              />
              <ErrorMessage
                className={s.error}
                name="password"
                component="div"
              />
            </label>

            {status && <div className={s.error}>{status}</div>}

            <button type="submit">Sign in</button>
            <div className={s.link}>
              <Link to="/register">No account yet? Sign up now!</Link>
              <Link to="/">Return to main page</Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
