import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";

// interface FormProps {
//   name: string;
//   email: string;
//   password1: string;
//   password2: string;
// }

export const RegisterPage = () => {
  const {
    formData,
    name,
    email,
    password2,
    password1,
    onChange,
    reset,
    isValidEmail,
  } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page</h1>

      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={onChange}
          name="name"
          className={`${name.trim().length <= 0 && "has-error"}`}
        />

        {name.trim().length <= 0 && <span>Este Campo es Necesario</span>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          name="email"
          className={`${!isValidEmail(email) && "has-error"}`}
        />

        {!isValidEmail(email) && <span>Email no es valido</span>}
        <input
          type="text"
          placeholder="Password"
          value={password1}
          onChange={onChange}
          name="password1"
          className={`${password1.trim().length <= 0 && "has-error"}`}
        />

        {password1.trim().length <= 0 && <span>Este Campo no es valido</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && (
          <span>la contraseña debe tener 6 letras</span>
        )}
        <input
          type="text"
          placeholder="Repeat Password"
          value={password2}
          onChange={onChange}
          name="password2"
          className={`${password2.trim().length <= 0 && "has-error"}`}
        />
        {password2.trim().length <= 0 && <span>Este Campo no es valido</span>}
        {password2.trimEnd().length > 0 && password1 !== password2 && (
          <span>Las contraseñas deben ser iguales</span>
        )}
        <button type="submit">Create</button>
        <button type="button" onClick={reset}>
          Reset
        </button>
      </form>
    </div>
  );
};
