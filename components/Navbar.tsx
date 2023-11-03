import Image from "next/image"
import Link from "next/link"
import logo from '../public/hilink-logo.svg';


const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href='/'>
            <Image alt="logo" src={logo} width={74} height={29} />
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">

        </ul>

    </nav>
  )
}

export default Navbar