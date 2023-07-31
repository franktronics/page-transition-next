'use client';
import { useEffect, useRef, useState } from 'react';
import { loadPage } from './transition-controller';
import './page-transition.scss';

export const shape1 =
  'M0 90V100H1440V90C1440 90 1159 -1.32637e-05 719 0C279 1.32637e-05 0 90 0 90Z';
export const shape2 =
  'M0 2V100H1440V2C1440 2 1159 -1.32637e-05 719 0C279 1.32637e-05 0 2 0 2Z';

export type PageTransitionProps = {
  pageTitle?: string | JSX.Element;
};

const PageTransition = (props: PageTransitionProps) => {
  const { pageTitle = '' } = props;
  //le temps minimal pour la fin de l'anim.(il peut etre adapté)
  //est calculé en add les temps des differentes anims CSS
  //2000 juste pour la phase de dev (un peu long)
  const TIME = 2000;
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //le titre disparait 600ms avant le splash screen
    const timer0 = setTimeout(() => {
      container.current?.classList.remove('page-transition-words__ctrl');
      clearTimeout(timer0);
    }, TIME - 600);

    const timer = setTimeout(() => {
      container.current?.classList.remove('page-transition-state');
      document.body.classList.add('page-trans-close');
      loadPage();
      clearTimeout(timer);
    }, TIME);
    document.body.classList.remove('page-trans-close');
  }, []);

  return (
    <div
      ref={container}
      className="page-transition page-transition-state page-transition-words__ctrl"
    >
      <svg
        preserveAspectRatio="none"
        width="100%"
        height="100px"
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={shape2} fill="var(--transition-color)" />
      </svg>
      <div>
        <div className="page-word-transition">
          <h3>
            <span>{pageTitle}</span>
          </h3>
        </div>
      </div>
      <svg
        preserveAspectRatio="none"
        width="100%"
        height="100px"
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={shape2} fill="var(--transition-color)" />
      </svg>
    </div>
  );
};

export { PageTransition };
