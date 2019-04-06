import React from 'react';
import PropTypes from 'prop-types';


/**
 * Icon component.
 *
 * Given a size, color and a path, represents an SVG icon.
 */
const Icon = ({ size, icon, color }) => {
    const styles = {
        svg: {
            display: 'inline-block',
            margin: 'auto',
            verticalAlign: 'middle',
        },
        path: { fill: color },
    };

    return (
        <svg
            style={ styles.svg }
            width={ `${size}px` }
            height={ `${size}px` }
            viewBox={ `0 0 ${icon.viewBox} ${icon.viewBox}` }
        >
            <path
                style={ styles.path }
                d={ icon.path }
            />
        </svg>
    );
};

Icon.propTypes = {
    /** Color of the icon */
    color: PropTypes.string,
    /** Includes the path of the icon and its viewbox */
    icon: PropTypes.shape({
        path: PropTypes.string.isRequired,
        viewBox: PropTypes.number.isRequired
    }).isRequired,
    /** Height and width of the icon */
    size: PropTypes.number
};

Icon.defaultProps = {
    size: 20
};

export default Icon;
