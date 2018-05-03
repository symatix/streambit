import React from 'react';

const Icon = (props) => {
    const { css, id } = props;
    return(
        <svg className={css} >
            <use xlinkHref={`img/sprites.svg#${id}`} />
        </svg>
    )
}

export default Icon;