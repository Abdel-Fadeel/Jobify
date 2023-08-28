// import styled from "styled-components";
import Wrapper from "../assets/wrappers/BigSidebar.ts";
import { useDashboardContext } from "../context/dashboard";
import Logo from "./Logo";
import NavLinks from "./NavLinks.tsx";

const BigSidebar: React.FC = () => {
  const { showSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div
        className={`sidebar-container ${!showSidebar ? "show-sidebar" : ""}`}
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks isBigSidebar />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;