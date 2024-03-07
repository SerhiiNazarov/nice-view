import { Formik } from "formik";
import {
  Container,
  Title,
  FormField,
  Label,
  Input,
} from "./СonsultationForm.styled";
import Button from "../Button";

const СonsultationForm = () => {
  return (
    <Container>
      <Title>Поля відмічені * є обов’язковими для заповнення</Title>
      <Formik
        initialValues={{ name: "", phone: "", time: "00:00" }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.email = "Ім'я обов'язкове";
          } else if (
            !values.phone &&
            !/^\+380\d{3}\d{2}\d{2}\d{2}$/i.test(values.phone)
          ) {
            errors.phone = "Не коректний номер телефону";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <FormField onSubmit={handleSubmit}>
            <Label>
              ПІБ*
              <Input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && errors.name}
            </Label>

            <Label>
              Номер телефону*
              <Input
                type="tel"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.phone && touched.phone && errors.phone}
            </Label>
            <Label>
              Зручний час
              <Input
                type="time"
                name="time"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.date && touched.date && errors.date}
            </Label>
            <Button type="submit" disabled={isSubmitting}>
              Дзвінок
            </Button>
          </FormField>
        )}
      </Formik>
    </Container>
  );
};

export default СonsultationForm;
