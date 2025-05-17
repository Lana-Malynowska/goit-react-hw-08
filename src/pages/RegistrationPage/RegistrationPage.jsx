import { useSelector } from "react-redux";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const RegistrationPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <RegisterForm />
    </div>
  );
};

export default RegistrationPage;
