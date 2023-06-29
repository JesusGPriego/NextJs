import Link from 'next/link';
import React, { FC, PropsWithChildren } from 'react';
import { useRouter } from 'next/router';

interface Props {
  href: string;
}

const ActiveLink: FC<PropsWithChildren<Props>> = ({ children, href }) => {
  const { asPath } = useRouter();
  return (
    <Link href={href}>
      <span style={asPath === href ? style : {}}>{children}</span>
    </Link>
  );
};

const style = {
  color: '#0070f3',
  textDecoration: 'underline',
};

export default ActiveLink;
