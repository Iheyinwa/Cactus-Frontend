import {
  Select,
  Button,
  FormControl,
  FormLabel,
  Heading,
  VStack,
  FormErrorMessage,
  Text,
} from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import InputField from "./InputField";

const Signup = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        bank: "",
        accountNumber: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .required("Name is required")
          .min(6, "Name is too short"),
        email: Yup.string()
          .required("Email is required")
          .email("Invalid email"),
        phone: Yup.number()
          .required("Phone number is required")
          .integer()
          .min(8, "Number is too short")
          .typeError("Please enter a valid phone number"),
        bank: Yup.string().required("Bank is required"),
        accountNumber: Yup.number()
          .integer()
          .required("Account number is required")
          .min(10, "Account number is too short"),
        password: Yup.string()
          .required("Password is required")
          .min(7, "Password must contain atleast 8 characters"),
        confirmPassword: Yup.string()
          .required("Password is required")
          .min(7, "Password must contain atleast 8 characters")
          .oneOf([Yup.ref("password"), null], "Passwords do not match"),
      })}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.resetForm();
      }}
    >
      {(formik) => (
        <VStack
          as="form"
          mx="auto"
          w={{ base: "90%", md: 500 }}
          justifyContent="center"
          onSubmit={formik.handleSubmit}
        >
          <Heading as="h1" size="lg">
            Register a free account
          </Heading>
          <Text fontSize="md">Securely log into your cactus account</Text>

          <InputField label="Full Name" name="name" placeholder="enter name" />

          <InputField
            label="Email Address"
            name="email"
            type="email"
            placeholder="enter email"
          />

          <InputField
            label="Phone Number"
            name="phone"
            type="number"
            placeholder="Phone Number"
          />

          <FormControl isInvalid={formik.errors.bank && formik.touched.bank}>
            <FormLabel>Bank Name</FormLabel>
            <Select
              name="bank"
              placeholder="Select bank"
              {...formik.getFieldProps("bank")}
            >
              <option value="option1">Kuda</option>
              <option value="option2">First Bank</option>
              <option value="option3">Union Bank</option>
            </Select>
            <FormErrorMessage>{formik.errors.bank}</FormErrorMessage>
          </FormControl>

          <InputField
            label="Account Number"
            name="accountNumber"
            type="number"
            placeholder="Account number"
          />

          <InputField
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
          />

          <InputField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
          />

          <Button
            width="100%"
            type="submit"
            variant="solid"
            colorScheme="blackAlpha"
          >
            Register
          </Button>
        </VStack>
      )}
    </Formik>
  );
};

export default Signup;
