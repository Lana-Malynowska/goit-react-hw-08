import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  // const handleSubmit = (values, { resetForm }) => {
  //   dispatch();
  //   console.log(values);
  //   resetForm();
  // };

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(register(values));
  };

  const applySchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .trim()
      .required("Required"),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required"),
    password: Yup.string()
      .min(7, "Password must be at least 7 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password doesn't match")
      .required("Please confirm your password"),
  });

  return (
    <div>
      <div>
        <h2>CallSheet</h2>
        <p>
          Saving contacts isn’t rocket science — but we still made an app for
          it. You’re welcome!
        </p>
        <h2>Sign up now!</h2>
      </div>
      <Formik
        validationSchema={applySchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            <span>Name</span>
            <Field
              type="text"
              name="name"
              autoCorrect="off"
              placeholder="Name"
            />
            <ErrorMessage name="name" component="div" />
          </label>
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
              autoComplete="new-password"
              autoCorrect="off"
              autoCapitalize="none"
              placeholder="Password"
            />
            <ErrorMessage name="password" component="div" />
          </label>
          <label>
            <span>Confirm Password</span>
            <Field
              type="password"
              name="confirmPassword"
              autoComplete="new-password"
              autoCorrect="off"
              autoCapitalize="none"
              placeholder="Confirm password"
            />
            <ErrorMessage name="confirmPassword" component="div" />
          </label>
          <div>
            <Link to="/login">Have account? Sign in now!</Link>
          </div>
          <button type="submit">Sign up</button>
        </Form>
      </Formik>
      <Link to="/">Return to main page</Link>
    </div>
  );
};

export default RegisterForm;
