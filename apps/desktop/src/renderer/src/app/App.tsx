import AppLayout from "./AppLayout";

import MenuBar from "../components/MenuBar/MenuBar";
import Ribbon from "../components/Ribbon/Ribbon";
import Toolbar from "../components/Toolbar/Toolbar";
import Workspace from "../components/Workspace/Workspace";
import StatusBar from "../components/StatusBar/StatusBar";

export default function App() {
  return (
    <AppLayout>
      <MenuBar />
      <Ribbon />
      <Toolbar />
      <Workspace />
      <StatusBar />
    </AppLayout>
  );
}