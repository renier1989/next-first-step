import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from ".."


const NavItem = [
    {path : '/about', text:'About'},
    {path : '/pricinglist', text:'Pricing'},
    {path : '/contact', text:'Contact'},
]

export const Navbar = () => {
    return (
        <nav className="flex bg-slate-800 opacity-80 p-2 m-2 rounded text-white">
            <Link href={'/'} className=" flex items-center">
                <HomeIcon className="mr-2" />
                <span>Home</span>
            </Link>

            <div className="flex flex-1"></div>

            {NavItem.map( navitem => (
                // <Link key={navitem.path} className="mr-2" href={navitem.path}>{navitem.text}</Link>
                <ActiveLink key={navitem.path} {...navitem} />
            ))}
            {/* <Link className="mr-2" href="/about">About</Link>
            <Link className="mr-2" href="/contact">Contact</Link>
            <Link className="mr-2" href="pricinglist">Pricing</Link> */}
        </nav>
    )
}
