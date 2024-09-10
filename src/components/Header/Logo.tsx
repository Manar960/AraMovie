import logo from "../../assets/images/filmlogo.png";
const Logo = () => {
  return (
    <a href="./index.html" className="logo">
      <img src={logo} alt="logo" width={170} height={45}/>
    </a>
  );
};

export default Logo;
