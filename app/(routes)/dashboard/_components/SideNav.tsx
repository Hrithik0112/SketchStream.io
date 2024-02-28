import React, { useContext, useEffect, useState } from "react";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

import SideNavBottom from "./SideNavBottom";
import SideNavTop, { TEAM } from "./SideNavTop";

function SideNav() {
  const { user }: any = useKindeBrowserClient();
  const [activeTeam, setActiveTeam] = useState<TEAM | any>();

  return (
    <div
      className=" h-screen 
    fixed w-72 borde-r border-[1px] p-6
    flex flex-col
    "
    >
      <div className="flex-1">
        <SideNavTop
          user={user}
          setActiveTeamInfo={(activeTeam: TEAM) => setActiveTeam(activeTeam)}
        />
      </div>

      <div>
        <SideNavBottom />
      </div>
    </div>
  );
}

export default SideNav;
