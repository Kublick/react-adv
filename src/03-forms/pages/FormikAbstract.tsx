import { Formik, Form } from "formik";
import "../styles/styles.css";
import * as Yup from "yup";
import { MyTextInput } from "../components/MyTextInput";
import { MySelect } from "../components/MySelect";
import { MyCheckbox } from "../components/MyCheckBox";

export const FormikAbstract = () => {
  return (
    <div>
      <h1>Formik Abstract</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Este campo es requerido"),
          lastName: Yup.string()
            .max(10, "Debe de tener 10 caracteres o menos")
            .required("Este campo es requerido"),
          email: Yup.string()
            .required("Este campo es requerido")
            .email("Correo no tiene un formato valido"),
          terms: Yup.boolean().oneOf([true], "Debe de aceptar los terminos"),
          jobType: Yup.string()
            .required("Debe de seleccionar una opcion")
            .notOneOf(
              ["it-junior"],
              "No se puede seleccionar este tipo de trabajo"
            ),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput name="firstName" label="First Name" />
            <MyTextInput name="lastName" label="Last Name" />
            <MyTextInput name="email" label="email" type="email" />

            <MySelect name="jobType" label="Job Type">
              <option value="">Pick a Job</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-junior">IT Junior</option>
            </MySelect>

            <MyCheckbox label="Terms and Conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
