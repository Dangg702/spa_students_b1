import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import styles from './HeaderOnly.module.scss';

const cx = classNames.bind(styles);
function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className={cx('content')}>{children}</div>
        </div>
    );
}

HeaderOnly.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderOnly;
