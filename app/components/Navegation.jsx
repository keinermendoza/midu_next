import Link from 'next/link'
import styles from './Navegation.module.css'

const links = [{
    label: 'Home',
    route: '/',
  }, {
    label: 'About',
    route: '/about',
}]

export function Navegation () {
    return (
        <header className={styles.header}>
          <nav>
            <ul className={styles.navegation}>
            {links.map(({label, route}) => (
              <li key={route}>
                <Link href={route}>
                  {label}
                </Link>
              </li>
            ))}
            </ul>
          </nav>
        </header>
    )
}