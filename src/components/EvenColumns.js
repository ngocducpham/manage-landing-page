import classNames from 'classnames';

import styles from './EvenColumns.module.scss';

function EvenColumns({ children, className }) {
	return <div className={classNames(styles.evenColumns, className)}>{children}</div>;
}

export default EvenColumns;
