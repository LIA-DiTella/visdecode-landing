import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Logo() {
    const blackRef = useRef(null);
    const yellowRef = useRef(null);

    useEffect(() => {
        // Initial positions (separated)
        gsap.set(blackRef.current, {
            transformOrigin: "center center"
        });

        gsap.set(yellowRef.current, {
            x: 40,
        });

        // Timeline: black slides+spins, yellow pops with elastic ease
        gsap
            .timeline({ defaults: { ease: "power2.inOut" } })
            .to(blackRef.current, {
                duration: 1.8,
                x: 0,
                // rotations: 360,
                rotate: 360
            })
            .to(
                yellowRef.current,
                {
                    duration: 1.3,
                    x: 0,
                    ease: "elastic.out(1, 0.5)",
                },
                "-=0.7" // overlap a bit for snappier feel
            );
    }, []);

    return (
        <div className="flex items-center justify-center w-full bg-white">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 104 109"
                width="200"
                height="200"
                className="overflow-visible flex justify-center items-center"
            >

                {/* Black 3/4 circle & white wedge */}
                <g ref={blackRef}>
                    <path
                        d="M49.9,27v24.8v3.1v1.5v0.1c0,0,0,0,0,0h0h0.2h0.4h0.8h6.2h12.4h6.2h3.1h0.1h0h0c0,0,0,0,0,0c0,0.1,0,0.1,0,0.2
	c0,0.1,0,0.2,0,0.4c0,0.2,0,0.5,0,0.7c0,0.5-0.1,1-0.1,1.5c-0.4,4.2-1.7,8.2-3.7,11.8c-4.1,7.3-11.2,12.5-19.4,14.3
	c-8.2,1.8-16.8,0-23.6-4.9C25.8,75.6,21.4,68,20.5,59.7c-0.9-8.3,1.8-16.6,7.4-22.9C33.5,30.6,41.5,27,49.9,27"
                        fill="#000"
                    />
                    <path
                        d="M38.3,38.6c1.2,1.8,2.4,3.7,3.6,5.5c-1.2,0.8-2.3,1.7-3.3,2.9c-1.7-1.4-3.4-2.8-5-4.2
	C34.9,41.2,36.5,39.8,38.3,38.6"
                        fill="#fff"
                    />
                </g>

                {/* Yellow quarter circle */}
                <path
                    ref={yellowRef}
                    d="M54.1,22.9c16.3,0,29.5,13.2,29.5,29.5H54.1V22.9z"
                    fill="#FDBD4F"
                />
            </svg>
        </div>
    );
}
