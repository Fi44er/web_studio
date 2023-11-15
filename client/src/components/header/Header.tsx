import style from './Header.module.scss'

const Header = () => {
    return(
        <header>
            <a href="/" className={style.logo}>
                <img src="src/assets/logo (1).svg" alt="" />
            </a>
            <nav className={style.headerNav}>
                <ul>
                    <li>Link_1</li>
                    <li>Link_2</li>
                    <li>Link_3</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header