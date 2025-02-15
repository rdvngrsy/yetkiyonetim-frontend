import { Form, Formik } from "formik";
import { object, string } from "yup";
import FormikInput from "../../../components/FormikInput/FormikInput";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthenticateRequest } from "../../../models/auth/requests/authenticateRequest";
import authService from "../../../services/authService";
import { useDispatch } from "react-redux";
import { login } from "../../../store/slices/authSlice";
import userRoleService from "../../../services/userRoleService";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";

type Props = {};
interface JwtPayload {
  id: string;
  // Diğer JWT payload alanları
}

const Login = (props: Props) => {
  const [userRole, setUserRole] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = object({
    username: string()
      .email("Geçersiz kullanıcı adı")
      .required("Kullanıcı adı boş geçilemez."),
    password: string()
      .required("Şifre alanı zorunludur.")
      .min(2, "Şifre minimum 3 karakter uzunluğunda olmalıdır.")
      .max(30),
  });

  const handleLogin = (values: AuthenticateRequest) => {
    authService.authenticate(values).then(
      (response) => {
        console.log(response);
        if (!response) {
          alert("Kullanıcı adı veya Şifre Yanlış. Lütfen tekrar deneyiniz.");
          //localStorage.removeItem('jsonwebtoken'); // Anahtarı sil
          //navigate('/login'); // useNavigate ile giriş sayfasına yönlendir
        } else {
          const token = response.data.token;
          localStorage.setItem("jsonwebtoken", token);

          const decodedToken = jwtDecode<JwtPayload>(token);
          const userId = decodedToken.id;

          userRoleService.getRolesByUserId({ userId }).then((roleResponse) => {
            let userRoleName = "";
            for (const role of roleResponse.data) {
              if (role.userId === userId) {
                userRoleName = role.roleName;
                break;
              }
            }
            if (userRoleName) {
              localStorage.setItem("role", userRoleName);
              dispatch(login());
              navigate("/");
            } else {
              console.log("Kullanıcının rolü bulunamadı.");
            }
          });
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <>
      <div className="h-screen relative">
        <div className="absolute inset-0 animate-move-bg"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full">
          <h1 className="text-center text-7xl font-bold text-white mb-8 p-4 ">
            Yetki Yönetim Sistemi
          </h1>
          <div className="bg-white p-8 rounded-lg shadow-lg w-[500px]">
            <img
              className="mx-auto rounded-3xl h-60 w-60 mb-8 "
              src="../../../../public/assets/authorization_management_system_logo.png"
            />

            <Formik
              initialValues={initialValues}
              onSubmit={(values) => {
                handleLogin(values);
              }}
              validationSchema={validationSchema}
            >
              <Form className="p-0 shadow-none min-w-[100px]">
                <FormikInput
                  name="username"
                  label="Email"
                  type="email"
                  placeholder="Mailinizi giriniz..."
                />
                <FormikInput
                  name="password"
                  label="Şifre"
                  type="password"
                  placeholder="Şifrenizi giriniz..."
                />

                <div className="flex items-center justify-between">
                  <div className="text-sm ml-auto pb-3 mb-2">
                    <a
                      href="#"
                      className="text-black hover:text-blue-700 font-bold"
                    >
                      Şifremi unuttum
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center bg-purple-800 hover:bg-green-400 text-white hover:text-black p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500"
                  >
                    Giriş Yap
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
