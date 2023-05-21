import classNames from 'classnames';

import styles from './Button.module.scss';

function Button({ children, className, inverted = false, ...props }) {
	return (
		<button
			className={classNames(styles.btn, { [styles.inverted]: inverted }, className)}
			{...props}
		>
			{children}
		</button>
	);
}

export default Button;
