import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

function ActiveLink({ children, href }) {
  const { asPath } = useRouter();
  return (
    <Link href={href}>
      <span style={asPath === href ? style : null}>{children}</span>
    </Link>
  );
}

const style = {
  color: '#0070f3',
  textDecoration: 'underline',
};

export default ActiveLink;
