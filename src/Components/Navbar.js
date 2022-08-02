import { Navigation, Nav, NavLink } from './Styled/Navigation';
import { AiOutlineSecurityScan, AiOutlineWindows, AiOutlineReconciliation, AiOutlineMail } from 'react-icons/ai';

const Navbar = () => {
  return (
    <Navigation>
      <Nav>
        <NavLink>
          <AiOutlineWindows />
        </NavLink>
        <NavLink>
          <AiOutlineSecurityScan />
        </NavLink>
        <NavLink>
          <AiOutlineReconciliation />
        </NavLink>
        <NavLink>
          <AiOutlineMail />
        </NavLink>
      </Nav>
    </Navigation>
  )
}

export default Navbar