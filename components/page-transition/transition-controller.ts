import gsap from 'gsap';
import { shape1, shape2 } from './PageTransition';

export const leavePage = (cb?: Function) => {
  //callback lorsque l'animation se termine
  const tl = gsap.timeline({
    onComplete: () => {
      cb && cb();
    },
  });
  const path = document.querySelector('.page-transition svg:first-child>path');
  const container = document.querySelector('.page-transition');

  tl.fromTo(
    path,
    {
      attr: {
        d: shape1,
      },
      ease: 'cubicBezier(.7, 0, .2, 1)',
    },
    {
      attr: {
        d: shape2,
      },
    },
  );
  tl.fromTo(
    container,
    {
      top: 'calc(100dvh + 100px)',
      ease: 'cubicBezier(.7, 0, .2, 1)',
    },
    {
      top: -10,
    },
    0,
  );
  tl.duration(0.4);
  tl.play();
};
/////
export const loadPage = (cb?: Function) => {
  const tl = gsap.timeline({
    onComplete: () => {
      cb && cb();
    },
  });
  const path = document.querySelector('.page-transition svg:last-child>path');
  const container = document.querySelector('.page-transition');

  tl.fromTo(
    path,
    {
      attr: {
        d: shape1,
      },
      ease: 'cubicBezier(0.19, 1, 0.22, 1)',
    },
    {
      attr: {
        d: shape2,
      },
    },
  );
  tl.fromTo(
    container,
    {
      top: -10,
      ease: 'cubicBezier(0.19, 1, 0.22, 1)',
    },
    {
      top: 'calc(-100dvh - 100px)',
    },
    0,
  );
  tl.duration(0.4);
  tl.play();
};
