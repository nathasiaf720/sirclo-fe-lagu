// ** Next Imports
import Link from "next/link";

// ** Custom Components
import Avatar from "src/@core/components/avatar";

// ** Third Party Components
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from "reactstrap";
import {
  User,
  Settings,
  HelpCircle,
  Power,
} from "react-feather";
import { signOut } from "next-auth/client";

const UserDropdown = () => {
  return (
    <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
      <DropdownToggle
        href="/"
        tag="a"
        className="nav-link dropdown-user-link"
        onClick={(e) => e.preventDefault()}
      >
        <div className="user-nav d-sm-flex d-none">
          <span className="user-name font-weight-bold">Nathasia</span>
          <span className="user-status">User</span>
        </div>
        <Avatar
          img="/images/logo/lastfm.png"
          imgHeight="40"
          imgWidth="40"
          status="online"
        />
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem tag={Link} href="/pages/profile">
          <a className="dropdown-item">
            <User size={14} className="mr-75" />
            <span className="align-middle">Profile</span>
          </a>
        </DropdownItem>
        <DropdownItem tag={Link} href="/pages/account-settings">
          <a className="dropdown-item">
            <Settings size={14} className="mr-75" />
            <span className="align-middle">Settings</span>
          </a>
        </DropdownItem>
        <DropdownItem tag={Link} href="/pages/faq">
          <a className="dropdown-item">
            <HelpCircle size={14} className="mr-75" />
            <span className="align-middle">FAQ</span>
          </a>
        </DropdownItem>
        <DropdownItem className="dropdown-item w-100" onClick={signOut}>
          <Power size={14} className="mr-75" />
          <span className="align-middle">Logout</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default UserDropdown;
