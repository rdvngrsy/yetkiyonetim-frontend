import React from 'react';
import { Form, Formik } from 'formik';
import { object, string } from 'yup';
import authService from '../../services/authService';
import { RegisterRequest } from '../../models/auth/requests/registerRequest';
import FormikInput from '../../components/FormikInput/FormikInput';

type Props = {};

const CreateUsers = (props: Props) => {
  const initialValues: RegisterRequest = {
    username: '',
    password: '',
  };

  const validationSchema = object({
    username: string().email('Geçersiz email adresi').required('Email adresi boş geçilemez.'),
    password: string()
      .required('Şifre alanı zorunludur.')
      .min(6, 'Şifre minimum 6 karakter uzunluğunda olmalıdır.')
      .max(30, 'Şifre maksimum 30 karakter uzunluğunda olabilir.'),
  });

  const handleRegister = async (values: RegisterRequest) => {
    try {
      await authService.register(values);
      alert('Kullanıcı başarıyla oluşturuldu!');
    } catch (error) {
      console.error('Kullanıcı oluşturulurken bir hata oluştu:', error);
      alert('Kullanıcı oluşturulurken bir hata oluştu.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[500px]">
        <Formik
          initialValues={initialValues}
          onSubmit={handleRegister}
          validationSchema={validationSchema}
        >
          <Form>
            <FormikInput
              name="username"
              label="Email"
              type="email"
              placeholder="Email adresinizi giriniz..."
            />
            <FormikInput
              name="password"
              label="Şifre"
              type="password"
              placeholder="Şifrenizi giriniz..."
            />
            <button
              type="submit"
              className="w-full flex justify-center bg-blue-500 hover:bg-blue-700 text-white p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500"
            >
              Oluştur
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default CreateUsers;
