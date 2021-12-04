import React from 'react'

const SvgCheckCircle = props => (
    <svg height={53} width={52} {...props}>
        <defs>
            <filter
                filterUnits='objectBoundingBox'
                height='109.2%'
                id='group-2_svg__a'
                width='108.6%'
                x='-4.3%'
                y='-4.6%'
            >
                <feOffset dy={2} in='SourceAlpha' result='shadowOffsetOuter1' />
                <feGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation={2} />
                <feColorMatrix
                    in='shadowBlurOuter1'
                    result='shadowMatrixOuter1'
                    values='0 0 0 0 0.48627451 0 0 0 0 0.48627451 0 0 0 0 0.48627451 0 0 0 0.5 0'
                />
                <feMerge>
                    <feMergeNode in='shadowMatrixOuter1' />
                    <feMergeNode in='SourceGraphic' />
                </feMerge>
            </filter>
        </defs>
        <g fill='none' fillRule='evenodd' filter='url(#group-2_svg__a)' transform='translate(4 2.731)'>
            <circle cx={22} cy={22} fill='#39ae4a' r={22} />
            <path
                d='M32.675 15.815l-14.98 14.98-6.37-5.83'
                stroke='#FFF'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={4}
            />
        </g>
    </svg>
)

export default SvgCheckCircle
