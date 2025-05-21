import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";
import s from "./RegisterForm.module.css";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    console.log({ name, email, password });
    dispatch(register({ name, email, password }));
    resetForm();
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
    <div className={s.form}>
      <div className={s.text}>
        <h2>Sign up now!</h2>
        <p>
          Saving contacts isn’t rocket science — but we still made an app for
          it. You’re welcome!
        </p>
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
              autoComplete="off"
              autoCorrect="off"
              placeholder="Name"
            />
            <ErrorMessage className={s.error} name="name" component="div" />
          </label>
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
              autoComplete="new-password"
              placeholder="Password"
              required
            />
            <ErrorMessage className={s.error} name="password" component="div" />
          </label>
          <label>
            <span>Confirm Password</span>
            <Field
              type="password"
              name="confirmPassword"
              autoComplete="new-password"
              placeholder="Confirm password"
              required
            />
            <ErrorMessage
              className={s.error}
              name="confirmPassword"
              component="div"
            />
          </label>

          <button type="submit">Sign up</button>
          <div className={s.link}>
            <Link to="/login">Have account? Sign in now!</Link>
            <Link to="/">Return to main page</Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
