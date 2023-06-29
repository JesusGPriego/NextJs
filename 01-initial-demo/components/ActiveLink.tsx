import Link from 'next/link';
import { CSSProperties, FC, PropsWithChildren } from 'react';
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

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
};

export default ActiveLink;
