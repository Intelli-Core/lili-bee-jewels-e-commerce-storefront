import { LogoLink } from "./Header";

const Footer = () => {
  return (
    <footer className="border-t mt-5">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <LogoLink />
        <p>© 2022 Lili Bee Jewels. All Rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
