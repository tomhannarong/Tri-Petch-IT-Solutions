import DesktopResponsiveDesign from "./DesktopResponsiveDesign";
import MobileResponsiveDesign from "./MobileResponsiveDesign";
import TabletResponsiveDesign from "./TabletResponsiveDesign";

export default function Home() {
  return (
    <>
      <DesktopResponsiveDesign />
      <TabletResponsiveDesign />
      <MobileResponsiveDesign />
    </>
  );
}
