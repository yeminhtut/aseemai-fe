import React from 'react'

const SvgPhone = props => (
    <svg height={16} width={16} {...props}>
        <g fill='none' fillRule='evenodd'>
            <path d='M0 0h16v16H0z' />
            <path
                d='M4.812 7.283a8.977 8.977 0 003.905 3.905l1.304-1.304a.59.59 0 01.604-.142 6.76 6.76 0 002.116.338c.326 0 .592.267.592.593v2.068a.594.594 0 01-.592.592c-5.565 0-10.074-4.51-10.074-10.074 0-.326.266-.592.592-.592h2.074c.326 0 .593.266.593.592 0 .741.118 1.452.338 2.116a.595.595 0 01-.148.604L4.812 7.283z'
                fill='#838383'
            />
        </g>
    </svg>
)

export default SvgPhone