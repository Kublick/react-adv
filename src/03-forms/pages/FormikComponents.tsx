import { Formik, Form, Field, ErrorMessage } from "formik";
import "../styles/styles.css";
import * as Yup from "yup";

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components</h1>
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
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">LastName</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component="span" />
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" />

            <label htmlFor="jobType">Job Type</label>
            <Field name="jobType" as="select">
              <option value="">Pick a Job</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-junior">IT Junior</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />
            <label>
              <Field name="terms" type="checkbox" />
              Terms and Conditions
            </label>
            <ErrorMessage name="terms" component="span" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
