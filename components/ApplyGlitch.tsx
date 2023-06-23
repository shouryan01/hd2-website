import { useGlitch } from 'react-powerglitch'

type Props = {
    children?: React.ReactNode;
};

export default function ApplyGlitch({ children }: Props) {
    const glitch = useGlitch({
        "playMode": "always",
        "createContainers": true,
        "hideOverflow": false,
        "timing": {
            "duration": 2000
        },
        "glitchTimeSpan": {
            "start": 0.5,
            "end": 0.7
        },
        "shake": {
            "velocity": 15,
            "amplitudeX": 0.2,
            "amplitudeY": 0.2
        },
        "slice": {
            "count": 6,
            "velocity": 15,
            "minHeight": 0.02,
            "maxHeight": 0.15,
            "hueRotate": true
        },
        "pulse": false
    });

    return (
        <span ref={glitch.ref}>
            {children}
        </span>
    );
};