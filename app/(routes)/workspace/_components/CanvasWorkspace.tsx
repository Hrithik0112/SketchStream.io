import React from "react";
import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";

function CanvasWorkspace() {
  return (
    <div style={{ height: "670px" }}>
      <Excalidraw
        theme="light"
        onChange={(excalidrawElements, appState, files) => console.log(excalidrawElements)}
        UIOptions={{
          canvasActions: {
            saveToActiveFile: false,
            toggleTheme: false,
            export: false,
            loadScene: false,
          },
        }}
      >
        <MainMenu>
          <MainMenu.DefaultItems.ClearCanvas />
          <MainMenu.DefaultItems.SaveAsImage />
          <MainMenu.DefaultItems.ChangeCanvasBackground />
        </MainMenu>
        <WelcomeScreen>
          <WelcomeScreen.Hints.MenuHint />
          <WelcomeScreen.Hints.MenuHint />
          <WelcomeScreen.Hints.ToolbarHint />
          <WelcomeScreen.Center>
            <WelcomeScreen.Center.MenuItemHelp />
          </WelcomeScreen.Center>
        </WelcomeScreen>
      </Excalidraw>
    </div>
  );
}

export default CanvasWorkspace;
