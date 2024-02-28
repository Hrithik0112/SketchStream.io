import React from "react";
import WorkSpaceHeader from "../_components/WorkSpaceHeader";
import Editor from "../_components/DocWorkspace";

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
        <div className=" h-screen">
          <Editor />
        </div>
        {/* Whiteboard/canvas  */}
        <div className=" h-screen border-l">Canvas</div>
      </div>
    </div>
  );
}

export default WorkSpace;
