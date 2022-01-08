import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';

export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <MarkLink to="/">Home</MarkLink>
        </li>
        <li>
          <MarkLink to="profile">Profile</MarkLink>
        </li>
        {/* <li>
          <mark>Contacts</mark>
        </li> */}
      </ul>
    </nav>
  );
}

function MarkLink({ children, to, ...props }: LinkProps) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link to={to} {...props}>
      {
        match
          ? <mark>{children}</mark>
          : children
      }
    </Link>
  );
}
