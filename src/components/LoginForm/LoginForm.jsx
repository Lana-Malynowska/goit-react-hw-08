import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { login } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  // const handleSubmit = (values, { resetForm }) => {
  //   dispatch();
  //   console.log(values);
  //   resetForm();
  // };

  const handleSubmit = (values, options) => {
    dispatch(login(values));
    console.log(values);
  };

  const applySchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div>
      <div>
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
        <Form>
          <label>
            <span>Email</span>
            <Field
              type="email"
              name="email"
              autoComplete="email"
              autoCorrect="off"
              autoCapitalize="none"
              placeholder="Email"
            />
            <ErrorMessage name="email" component="div" />
          </label>
          <label>
            <span>Password</span>
            <Field
              type="password"
              name="password"
              autoComplete="current-password"
              autoCorrect="off"
              autoCapitalize="none"
              placeholder="Password"
            />
            <ErrorMessage name="password" component="div" />
          </label>
          <div>
            <Link to="/register">No account yet? Sign up now!</Link>
          </div>
          <button type="submit">Sign in</button>
        </Form>
      </Formik>
      <Link to="/">Return to main page</Link>
    </div>
  );
};

export default LoginForm;
