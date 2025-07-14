import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Logo() {
    const blackRef = useRef(null);
    const yellowRef = useRef(null);
    const vRef = useRef(null);
    const iRef = useRef(null);
    const sRef = useRef(null);
    const dRef = useRef(null);
    const e1Ref = useRef(null);
    const cRef = useRef(null);
    const d2Ref = useRef(null);
    const e2Ref = useRef(null);

    useEffect(() => {
        // Initial positions (separated)
        gsap.set(blackRef.current, {
            transformOrigin: "center center",
            scale: 2,
            x: -100,
        });

        gsap.set(yellowRef.current, {
            x: 40,
            y: -15,
            scale: 2,
        });

        // Get the O position (exact center of the O in the SVG)
        const oPositionX = 182; // X position of the O in the SVG coordinate system

        // Calculate the offset needed to move each letter to the O position
        // Each letter needs to be moved relative to where the O is
        const letterOffsets = [
            { ref: vRef, offsetX: oPositionX - 24 },      // V is around x=24
            { ref: iRef, offsetX: oPositionX - 48 },      // i is around x=48
            { ref: sRef, offsetX: oPositionX - 67 },      // s is around x=67
            { ref: dRef, offsetX: oPositionX - 93 },      // D is around x=93
            { ref: e1Ref, offsetX: oPositionX - 128 },    // e1 is around x=128
            { ref: cRef, offsetX: oPositionX - 155 },     // c is around x=155
            { ref: d2Ref, offsetX: oPositionX - 210 },    // d is around x=210
            { ref: e2Ref, offsetX: oPositionX - 243 }     // e2 is around x=243
        ];

        // Set all letters to start at the exact O position by offsetting them
        letterOffsets.forEach(({ ref, offsetX }) => {
            if (ref.current) {
                gsap.set(ref.current, {
                    x: offsetX,
                    y: 0,
                    opacity: 0,
                    transformOrigin: "center center"
                });
            }
        });

        // Timeline: black slides+spins, yellow pops with elastic ease, then letters slide to positions
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

        // Original O animation
        tl.to(blackRef.current, {
            duration: 1.8,
            x: 0,
            rotate: 360
        }).to(
            yellowRef.current,
            {
                duration: 1.3,
                x: 0,
                ease: "elastic.out(1, 0.5)",
            },
            "-=0.7" // overlap a bit for snappier feel
        );

        // Set all letters to be visible at the start of the timeline
        letterOffsets.forEach(({ ref }) => {
            if (ref.current) {
                tl.set(ref.current, { opacity: 1 });
            }
        });


        // After O animation completes, animate letters sliding to their final positions
        letterOffsets.forEach(({ ref }) => {
            if (ref.current) {
                tl.to(ref.current, {
                    duration: 0.8,
                    x: 0, // Slide to original position
                    y: 0, // Slide to original position
                    // opacity: 1,
                    ease: "power2.out",
                }, "letters"); // Use the same label for all letters to start simultaneously
            }
        });

        tl.to([blackRef.current, yellowRef.current], {
            duration: 0.5,
            scale: 1,
            y: 0,
            ease: "power2.out"
        })
    }, []);

    return (
        <div className="flex items-center justify-center w-full">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 261.1 42.3"
                width="400"
                height="auto"
                className="overflow-visible flex justify-center items-center w-[600px] 2xl:w-[700px] 3xl:w-[800px] 4xl:w-[900px]"
            >

                <polygon points="7,5.1 16.9,5.1 24.2,25.5 31.5,5.1 41.3,5.1 28.3,37.5 20,37.5 " id="V" ref={vRef} />
                <g id="i" ref={iRef}>
                    <rect x="43.9" y="3.8" width="9.1" height="6.4" />
                    <rect x="44.1" y="12.4" width="8.7" height="24.8" />
                </g>
                <path d="M67.6,37.8c-4.2,0-8.3-1.2-11.8-3.7c1.1-1.8,2.2-3.5,3.3-5.3c2.8,1.9,6,2.8,8.5,2.8c1.5,0,2.2-0.5,2.2-1.3v-0.1
	c0-1-1.4-1.4-4-2.1c-4.9-1.3-8.8-2.9-8.8-7.9v-0.1c0-5.3,4.2-8.2,10-8.2c3.6,0,7.4,1.1,10.2,2.9c-1,1.8-2,3.7-3,5.5
	c-2.6-1.4-5.4-2.3-7.3-2.3c-1.3,0-2,0.5-2,1.2v0.1c0,1,1.4,1.4,4,2.2c4.9,1.4,8.8,3.1,8.8,7.9v0.1C77.7,35,73.7,37.8,67.6,37.8" id="s" ref={sRef} />
                <path d="M93.8,5.3c11.5,0,18.1,6.6,18.1,15.9v0.1c0,9.3-6.7,16.2-18.3,16.2H81.4V5.3H93.8z M94,29.5c5.3,0,8.9-2.9,8.9-8.1v-0.1
	c0-5.1-3.5-8.1-8.9-8.1h-3.6v16.3H94z" id="D" ref={dRef} />
                <path d="M128.4,38c-7.8,0-13.3-5.2-13.3-12.9V25c0-7.3,5.2-13,12.5-13c8.6,0,12.5,6.3,12.5,13.6c0,0.6,0,1.2,0,1.8h-16.6
	c0.7,2.7,2.7,4.1,5.4,4.1c2.1,0,3.7-0.8,5.5-2.5c1.6,1.3,3.2,2.7,4.8,4C136.8,36,133.3,38,128.4,38 M131.9,22.9
	c-0.3-2.8-1.9-4.5-4.3-4.5c-2.3,0-3.9,1.8-4.3,4.5H131.9z" id="e1" ref={e1Ref} />
                <path d="M155.8,38c-7.5,0-13-5.9-13-12.9V25c0-7,5.5-12.9,13.3-12.9c5.1,0,8.5,2.2,10.6,5.6c-2,1.5-3.9,2.9-5.9,4.4
	c-1.2-1.7-2.5-2.6-4.6-2.6c-2.8,0-4.9,2.5-4.9,5.5V25c0,3.2,2,5.6,5,5.6c2.1,0,3.4-1,4.8-2.6c1.9,1.4,3.9,2.8,5.8,4.2
	C164.6,35.7,161.3,38,155.8,38" id="c" ref={cRef} />
                <path d="M210.1,38c-5.9,0-11-4.9-11-12.9V25c0-8.1,5.1-13,10.9-13c3.8,0,6,1.7,7.6,3.6V3.9h8.7v33.5h-8.7v-3.3
	C216,36.2,213.8,38,210.1,38 M212.8,30.7c2.8,0,5.1-2.3,5.1-5.6v-0.1c0-3.3-2.2-5.6-5.1-5.6c-2.8,0-5.1,2.3-5.1,5.6V25
	C207.7,28.3,210,30.7,212.8,30.7" id="d" ref={d2Ref} />
                <path d="M243.4,38c-7.8,0-13.3-5.2-13.3-12.9V25c0-7.3,5.2-13,12.5-13c8.6,0,12.5,6.3,12.5,13.6c0,0.6,0,1.2,0,1.8h-16.6
	c0.7,2.7,2.7,4.1,5.4,4.1c2.1,0,3.7-0.8,5.5-2.5c1.6,1.3,3.2,2.7,4.8,4C251.8,36,248.4,38,243.4,38 M247,22.9
	c-0.3-2.8-1.9-4.5-4.3-4.5c-2.3,0-3.9,1.8-4.3,4.5H247z" id="e2" ref={e2Ref} />

                <g ref={blackRef} id="o">
                    <path d="M182.4,12v10.9v1.4V25v0c0,0,0,0,0,0h0h0.1h0.2h0.3h2.7h5.4h2.7h1.4h0h0h0c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0.1,0,0.1,0,0.2
	c0,0.1,0,0.2,0,0.3c0,0.2,0,0.4,0,0.7c-0.2,1.8-0.7,3.6-1.6,5.2c-1.8,3.2-4.9,5.5-8.5,6.3c-3.6,0.8-7.4,0-10.3-2.2
	c-3-2.2-4.9-5.5-5.3-9.1c-0.4-3.7,0.8-7.3,3.2-10C175.2,13.6,178.8,12,182.4,12"/>
                    <path fill="#ffffff" d="M177.3,17.2c0.5,0.7,1,1.5,1.4,2.2l0.1,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0c0,0,0,0,0,0c-0.1,0.1-0.2,0.1-0.3,0.2
	c-0.2,0.1-0.3,0.3-0.5,0.4c-0.2,0.1-0.3,0.3-0.5,0.5c0,0-0.1,0.1-0.1,0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0l-0.1-0.1
	c-0.1-0.1-0.2-0.1-0.2-0.2c-0.3-0.3-0.7-0.6-1-0.8c-0.2-0.1-0.3-0.3-0.5-0.4c-0.1-0.1-0.2-0.1-0.2-0.2c0,0-0.1-0.1-0.1-0.1
	c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0.1-0.1C175.9,18.2,176.6,17.6,177.3,17.2"/>
                    <path fill="#ffffff" d="M177.3,17.2c0.5,0.8,1.1,1.6,1.6,2.4c-0.5,0.4-1,0.8-1.4,1.3c-0.7-0.6-1.5-1.2-2.2-1.9
	C175.9,18.3,176.5,17.7,177.3,17.2"/>

                </g>

                <path fill="#fcb949" d="M184.3,10.2c7.2,0,13,5.8,13,13h-13V10.2z" ref={yellowRef} />

            </svg>
        </div>
    );
}
