//! Images
import loginImage from "../../assest/images/login/loginImage.png";

export default function Login() {
  const containerStyles = "h-screen flex justify-center items-center ";
  const loginStyles = "flex ";
  const formStyles = "flex flex-col justify-center";
  const inputStyles = "bg-yellow-200";
  const buttonStyles = "bg-yellow-300 p-1 w-20 rounded-2xl";

  return (
    <div className={containerStyles}>
      <div className={loginStyles}>
        <img src={loginImage} alt="login" />
        <form action="" className={formStyles}>
          <label htmlFor="">Login Name</label>
          <input className={inputStyles} type="text" />
          <label htmlFor="">Password</label>
          <input className={inputStyles} type="password" />
          <button type="button" className={buttonStyles}>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
