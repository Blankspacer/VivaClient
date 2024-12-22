const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80">
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-2">
          <div className="w-4 h-4 rounded-full bg-blue-500 animate-[bounce_0.7s_infinite]"></div>
          <div className="w-4 h-4 rounded-full bg-purple-500 animate-[bounce_0.7s_0.1s_infinite]"></div>
          <div className="w-4 h-4 rounded-full bg-pink-500 animate-[bounce_0.7s_0.2s_infinite]"></div>
        </div>
        <span className="text-lg font-medium text-gray-700">Loading</span>
      </div>
    </div>
  );
};

export default Loading;
