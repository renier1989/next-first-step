'use client'
import Link from "next/link";
import styles from './ActiveLinks.module.css'
import { usePathname } from "next/navigation";

interface Props {
    path: string;
    text: string;
}

export const ActiveLink = ({path, text}:Props) => {
    const usePath = usePathname()
  return (
    <Link className={`mr-4 ${styles.link}  ${ usePath === path && styles.activeLink}`} href={path}>{text}</Link>
  )
}
