import GridBackground from './GridBackground';
import BlurEffect from './BlurEffect';

function DarkBackground() {
  return (
    <>
      <BlurEffect />
      <GridBackground />
      <div className="fixed inset-0 -z-30 bg-[#0A0A0A]" />
    </>
  );
}

export default DarkBackground;