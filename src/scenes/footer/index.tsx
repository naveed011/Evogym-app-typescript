import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
          Start your fitness journey today at our gym! Transform your body, boost your energy, and achieve your health goals with us. 
          </p>
          <p>© <a href="https://naveed011.github.io/" target="_blank"> <b>NAVEED</b> </a>  All Rights Reserved 2023.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">  Links</h4>
          <p className="my-5 hover:underline"> <a href="https://www.linkedin.com/in/muhammad-naveed-b687a111b/" target="_blank">Linkedin</a> </p>
          {/*<p className="hover:underline">  <a href="https://ekunolapaul.netlify.app/" target="_blank">Portfolio </a> </p>*/}
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5 hover:underline pointer"> <a href="mailto:786muhammadnaveed@gmail.com"> 786muhammadnaveed@gmail.com</a></p>
          <p>+923029101295</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;