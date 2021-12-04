import React from 'react'

const SvgEmail = props => (
    <svg height={16} width={16} {...props}>
        <g fill='none' fillRule='evenodd'>
            <path d='M0 0h16v16H0z' />
            <path
                d='M12.8 3H3.2c-.66 0-1.194.563-1.194 1.25L2 11.75c0 .688.54 1.25 1.2 1.25h9.6c.66 0 1.2-.563 1.2-1.25v-7.5C14 3.562 13.46 3 12.8 3zm0 2.5L8 8.625 3.2 5.5V4.25L8 7.375l4.8-3.125V5.5z'
                fill='#838383'
            />
        </g>
    </svg>
)

export default SvgEmail
