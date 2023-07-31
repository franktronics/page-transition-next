'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ComponentPropsWithoutRef,
  MouseEventHandler,
  PropsWithChildren,
} from 'react';
import { leavePage } from '../page-transition/transition-controller';

export type AnchorProps = {
  href: string;
} & ComponentPropsWithoutRef<'a'>;

export const Anchor = (props: PropsWithChildren<AnchorProps>) => {
  const { href, children, ...rest } = props;
  const router = useRouter();

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    leavePage(() => {
      //l'anim se termine puis on change de page
      router.push(href);
    });
  };

  return (
    <Link href={href} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
};
