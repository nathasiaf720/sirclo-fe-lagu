// ** React Imports
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const VerticalMenuHeader = (props) => {
  // ** Props
  const { menuCollapsed, menuVisibility, setGroupOpen } = props;

  // ** Reset open group
  useEffect(() => {
    if (!menuVisibility && menuCollapsed) setGroupOpen([]);
  }, [menuVisibility, menuCollapsed]);

  return (
    <div className="navbar-header">
      <ul className="nav navbar-nav flex-row">
        <li className="nav-item mr-auto">
          <Link href="/">
            <a className="navbar-brand active">
              <span className="brand-logo">
                <div
                  style={{ height: 40, width: 40 }}
                  className="position-relative"
                >
                  <Image
                    src="/images/logo/lastfm.png"
                    alt="Logo Kalbe"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </span>
              <h2 className="brand-text mb-0">Last FM</h2>
            </a>
          </Link>
        </li>
        <li className="nav-item nav-toggle">
          <div className="nav-link modern-nav-toggle cursor-pointer"></div>
        </li>
      </ul>
    </div>
  );
};

export default VerticalMenuHeader;
