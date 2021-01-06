import classes from './Header.module.css';

function Header() {
    return (
        <header className={classes.header}>
            <form method="get" action="" className={classes.search}>
                <a className={classes.search__loupe, classes["search-img"]}></a>
                <input type="search" name="search" placeholder="Пошук..." className={classes.search__main, classes.search_passive}></input>
                <div className={classes["search__images-wrapper"]}>
                    <a className={classes["search__nine-grid"], classes["search-img"]}></a>
                    <a className={classes.search__close, classes["search-img"]}></a>
                </div>
            </form>
        </header>
    );
}

export default Header;