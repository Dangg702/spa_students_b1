import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

// bind ràng buộc theo styles đã import --> trả về func
// classNames giúp viết được tên class có chứa dấu -
const cx = classNames.bind(styles);

function Header() {   
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <Link to={'/'} className={cx('logo-link')}>
                    <img src={'https://react-bootstrap.netlify.app/img/logo.svg'} alt="logo" />
                </Link>
                {/* navbar */}
                <nav className={cx('nav')}>
                    <Link to={'/student'} className={cx('nav-link')}>Home</Link>
                    <Link to={'/student/search'} className={cx('nav-link')}>Search</Link>
                    <Link to={'/student/create'} className={cx('nav-link')}>Add Student</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
