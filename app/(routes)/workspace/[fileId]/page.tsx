import React from "react";
import WorkSpaceHeader from "../_components/WorkSpaceHeader";

function WorkSpace() {
  return (
    <div>
      <WorkSpaceHeader />
      {/* Workspace Layout  */}
      <div
        className="grid grid-cols-1
      md:grid-cols-2"
      >
        {/* Document  */}
        <div className=" h-screen">Editor Document</div>
        {/* Whiteboard/canvas  */}
        <div className=" h-screen border-l">Canvas</div>
      </div>
    </div>
  );
}

export default WorkSpace;
