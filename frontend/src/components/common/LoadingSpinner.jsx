import PropTypes from 'prop-types';

const LoadingSpinner = ({ size = "md" }) => {
	const sizeClass = `loading-${size}`;

	return <span className={`loading loading-spinner ${sizeClass}`} />;
};

LoadingSpinner.propTypes = {
    size: PropTypes.string
};
export default LoadingSpinner;