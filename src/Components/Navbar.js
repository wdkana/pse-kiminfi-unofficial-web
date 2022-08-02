import { Navigation, Nav, NavLink } from './Styled/Navigation';
import { AiOutlineSecurityScan, AiOutlineWindows, AiOutlineReconciliation, AiOutlineMail } from 'react-icons/ai';

const Navbar = () => {
  function goTo(link) {
    if (link === "/") {
      window.location.reload();
    }
    window.open(link, '_blank')
  }
  return (
    <Navigation>
      <Nav>
        <NavLink onClick={() => goTo('/')}>
          <AiOutlineWindows />
        </NavLink>
        <NavLink onClick={() => goTo('https://google.com/search?q=sejarah%20iptiki%20kiminfi')}>
          <AiOutlineSecurityScan />
        </NavLink>
        <NavLink onClick={() => goTo('https://google.com/search?q=data%20iptiki%20internet%20sosial')}>
          <AiOutlineReconciliation />
        </NavLink>
        <NavLink onClick={() => goTo('https://google.com/search?q=hubungi%20pse%20kiminfi')}>
          <AiOutlineMail />
        </NavLink>
      </Nav>
    </Navigation>
  )
}

export default Navbar