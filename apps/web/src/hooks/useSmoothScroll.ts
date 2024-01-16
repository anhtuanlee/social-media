// import Lenis from '@studio-freight/lenis';
// import { useEffect, useRef } from 'react';
// // import LocomotiveScroll from 'locomotive-scroll';

// export const useSmoothScroll = (): void => {
//     const refCog = useRef<any>({ lenis: null, requestAnimation: null });

//     const raf = (time: number) => {
//         refCog.current.lenis.raf(time);
//         refCog.current.requestAnimation = requestAnimationFrame(raf);
//     };

//     useEffect(() => {
//         refCog.current.lenis = new Lenis({
//             wrapper: window,
//             duration: 1.2,
//             easing: t => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
//             smoothTouch: true,
//             touchMultiplier: 2,
//             infinite: false,
//         });

//         refCog.current.requestAnimation = requestAnimationFrame(raf);
//         refCog.current.lenis.start();

//         return () => {
//             cancelAnimationFrame(refCog.current.requestAnimation);
//             refCog.current.lenis.stop();
//             refCog.current.lenis.destroy();
//         };
//     }, []);
// };
