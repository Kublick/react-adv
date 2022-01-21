import { Formik, Form } from "formik";
import "../styles/styles.css";
import * as Yup from "yup";
import { MyTextInput } from "../components";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Formik Register Formik</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .min(2, "Debe de tener 2 caracteres o mas")
            .required("Este campo es requerido"),
          email: Yup.string()
            .required("Este campo es requerido")
            .email("Correo no tiene un formato valido"),
          password1: Yup.string()
            .min(6, "Debe de tener 6 caracteres o más")
            .required("Este campo es requerido"),
          password2: Yup.string()
            .min(6, "Debe de tener 6 caracteres o más")
            .required("Este campo es requerido")
            .oneOf(
              [Yup.ref("password1"), null],
              "Las contraseñas no coinciden"
            ),
        })}
      >
        {(formik) => (
          <Form noValidate>
            <MyTextInput name="name" label="First Name" />
            <MyTextInput name="email" label="email" type="email" />
            <MyTextInput name="password1" label="Password" type="password" />
            <MyTextInput
              name="password2"
              label="Retype Password"
              type="password"
            />
            <button type="submit">Submit</button>
            <button onClick={formik.handleReset}>Reset</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
