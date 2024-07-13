import Logo from '../Images/rainydays-logo.svg'

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-around items-center p-5">
        <a href="/"><img src={Logo} className="" alt="logo" /></a>



      </nav>
    </header>
  )
}

export default Navbar;