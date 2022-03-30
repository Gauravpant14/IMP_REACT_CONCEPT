import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Container, StyledInput } from "../styled";

const BasicForm = () => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const formik = useFormik({
    initialValues: {
      username: "",
      name: "",
      email: "",
      status: "",
      country: "",
      mobile: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(10, "User name must be less than or equal to 10")
        .required("This is required Field"),
      mobile: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
      email: Yup.string()
        .email("Please enter valid email")
        .required("Email is required"),
      status: Yup.string().required('This is required field'),
      country:Yup.string().required('Please select country, required field')
    }),
    onSubmit: (values) => {
      console.log("Form Submitted", { values });
    },
  });

  console.log(formik.errors);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Container>
          <StyledInput
            type="text"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
            onBlur={formik.handleBlur}
            placeholder="username"
          />
          {formik.touched.username && formik.errors.username && (
            <p style={{ color: "red" }}>{formik.errors.username}</p>
          )}

          <StyledInput
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="name"
          />

          <StyledInput
            type="text"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="email"
          />
          {formik.touched.email && formik.errors.email && (
              <p style={{color:'red'}}>{formik.errors.email}</p>
          )}
          <StyledInput
            type="text"
            name="mobile"
            onBlur={formik.onBlur}
            onChange={formik.handleChange}
            value={formik.values.mobile}
            placeholder="mobile number"
          />
          {formik.touched.mobile && formik.errors.mobile && (
            <p style={{ color: "red" }}>{formik.errors.mobile}</p>
          )}
          <br />
          <label htmlFor="single">Single</label>
          <input
            type="radio"
            name="status"
            value="single"
            onChange={formik.handleChange}
          />
          <label htmlFor="coder">Coder</label>

          <input
            type="radio"
            name="status"
            value="coder"
            onChange={formik.handleChange}
          />
          {formik.errors.status && (
              <p style={{color:'red'}}>{formik.errors.status}</p>
          )}
          <br />
          <select name="country" onChange={formik.handleChange} onBlur={formik.handleBlur}>
            <option value="">Select County</option>
            <option value="india">India</option>
            <option value="us">US</option>
            <option value="Rusia">Rusia</option>
          </select>
          {formik.touched && formik.errors.country && (
              <p style={{color:'red'}}>{formik.errors.country}</p>
          )}
          <br />
          <button type="submit">Submit</button>
        </Container>
      </form>
    </div>
  );
};

export default BasicForm;
