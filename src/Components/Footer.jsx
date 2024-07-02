const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div>
      <p className="text-center">©Hamza {date}</p>
    </div>
  );
};

export default Footer;
