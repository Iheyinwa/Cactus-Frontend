import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Button, Heading, VStack, Text, Input } from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import InputField from "./InputField";
import axios from "../api/axios";
// import { useAuth } from "../auth-context";

const Login = ({ setSuccessMsg, setErrorMsg }) => {
  // const {login, loggedIn, setUser, user} = useAuth();
  const LOGIN_URL = "/signIn";
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = localStorage.getItem("cactus_token");
    if (getUser) {
      navigate("/dashboard");
    }
  }, [navigate]);
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .required("Email is required")
          .email("Invalid email"),
        password: Yup.string()
          .required("Password is required")
          .min(8, "Password is too short"),
      })}
      onSubmit={async (values, actions) => {
        try {
          const response = await axios.post(LOGIN_URL, values, {
            headers: { "Content-Type": "application/json" },
          });
          const token = response.data.token;

          localStorage.setItem("cactus_token", JSON.stringify(token));

          setSuccessMsg("Successfully logged in!");
          setTimeout(() => {
            setSuccessMsg("");
          }, 5000);

          navigate("/dashboard");
        } catch (error) {
          if (error.response) {
            setErrorMsg(error.response.data);
            setTimeout(() => {
              setErrorMsg("");
            }, 7000);
          }
        }
        actions.resetForm();
      }}
    >
      {(formik) => (
        <VStack as="form" onSubmit={formik.handleSubmit}>
          <Heading color="brand.100" as="h1" size="lg">
            Log in to your account
          </Heading>
          <Text pb="20px" color="brand.200" fontSize="md">
            Securely log into your cactus account
          </Text>

          <InputField
            fieldType={Input}
            label="Email Address"
            name="email"
            type="email"
            placeholder="enter email"
          />

          <InputField
            fieldType={Input}
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
          />

          <div className="w-full pt-5">
            <Button
              width="100%"
              type="submit"
              variant="solid"
              bg="brand.100"
              color="#ffffff"
              _hover={{ bg: "brand.300" }}
            >
              Log In
            </Button>
          </div>

          <p className="text-black pt-5">
            Don't remember your password?
            <Link to="/reset-password" className="text-cactus-brown pl-1">
              Reset Password
            </Link>
          </p>
        </VStack>
      )}
    </Formik>
  );
};

export default Login;
