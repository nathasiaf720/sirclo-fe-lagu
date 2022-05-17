import Link from "next/link";
import { useRouter } from "next/router";

const VerticalNavMenuLink = (props) => {
  // ** Props
  const { item } = props;

  const router = useRouter();

  return (
    <li className={`nav-item ${item.href === router.pathname ? "active" : ""}`}>
      <Link href={item.href}>
        <a className="d-flex align-items-center">
          {item.icon}
          <span className="menu-item text-truncate">{item.title}</span>
        </a>
      </Link>
    </li>
  );
};

export default VerticalNavMenuLink;
