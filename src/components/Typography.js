import classNames from 'classnames';

import styles from './Typography.module.scss';

function Title({ children, level = 1, className }) {
	const Tag = `h${level}`;

	return (
		<Tag className={classNames(styles.title, styles[`title${Math.min(level, 3)}`], className)}>
			{children}
		</Tag>
	);
}

function Paragraph({ children, className }) {
	return <p className={classNames(styles.paragraph, className)}>{children}</p>;
}

function Text({ children, className }) {
	return <div className={classNames(styles.text, className)}>{children}</div>;
}

const Typography = {
	Title,
	Paragraph,
	Text
};

export default Typography;
