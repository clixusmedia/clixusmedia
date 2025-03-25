function BlurEffect() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      <div className="absolute -inset-[100px] opacity-50">
        {/* Purple blur effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#5D3FD3] blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#5D3FD3] blur-[128px] animate-pulse delay-1000" />
      </div>
    </div>
  );
}

export default BlurEffect;