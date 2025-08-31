import type { h, JSX } from 'preact';

export default function MetaSparkStudioIcon(props: JSX.IntrinsicElements['svg']) {
    return (
        <svg 
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 252"
            style={{ enableBackground: 'new 0 0 256 252' }}
            xmlSpace="preserve"
        >
            <g transform="translate(-60, -270) scale(1.2)"> 
                <path fill="#FF5C82" d="M96.5,378.8l59.8,27.4l59.3-27.4v-53.8L96.5,378.8z" />
                <path fill="#0099FF" d="M156,352v-53.5l59.6,26.6L156,352z" />
                <path fill="#1CE0BA" d="M215.6,271.6l-59.8-27.4l-59.3,27.4v53.8L215.6,271.6z" />
                <path fill="#0D7ACC" d="M156,298.5V352l-59.6-26.6L156,298.5z" />
            </g>
        </svg>
    );
}