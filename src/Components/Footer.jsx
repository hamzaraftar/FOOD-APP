const Footer = () => {
    const date = new Date().getFullYear(); 
    console.log(date);
  return (
    <div>
      <p className="text-center">©Hamza {date}</p>
    </div>
  )
}

export default Footer
