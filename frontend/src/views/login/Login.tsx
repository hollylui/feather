//! Images
import loginImage from "../../assest/images/login/loginImage.png";

export default function Login() {
  const containerStyles =
    "h-screen flex flex-col  items-center bg-yellow-200 font-mono";
  const h1Styles =
    "text-4xl p-5 pt-16 bg-yellow-300 font-bold uppercase text-center w-full ";

  const loginStyles = "flex items-center";
  const labelStyles = "mb-1 font-bold text-2xl";
  const formStyles =
    "flex flex-col justify-center bg-yellow-300 h-48 p-4 rounded-2xl";
  const inputStyles =
    "bg-yellow-200 focus:ring focus:ring-red-700 mb-1 rounded-md";
  const buttonStyles =
    "bg-yellow-500 p-1 rounded-2xl mx-8 mt-2 hover:bg-yellow-700 hover:text-white font-bold text-xl";

  return (
    <div className={containerStyles}>
      <h1 className={h1Styles}>Login</h1>
      <div>
        <div className={loginStyles}>
          <img src={loginImage} alt="login" />
          <form className={formStyles} action="">
            <label className={labelStyles} htmlFor="">
              Login Name
            </label>
            <input className={inputStyles} type="text" />
            <label className={labelStyles} htmlFor="">
              Password
            </label>
            <input className={inputStyles} type="password" />
            <button className={buttonStyles} type="button">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
