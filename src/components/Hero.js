export function Hero() {
  return (
    <div className="bg-gray-300">
      <div className="bg-gray-100 lg:grid grid-cols-3">
        <div className="px-8 py-12 h-screen mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 col-span-1">
          <h1 className="mt-6 tracking-tighter font-semibold text-5xl">
            学习、生活
            <br className="inline" />
            <br className="inline" />
            <span className="text-red-400">分享、记录</span>
          </h1>
        </div>
        <div className="relative lg:block col-span-2">
          <img
            className="absolute inset-0 w-full h-full"
            src="/assert/images/hero.png"
            alt="hero picture"
          />
        </div>
      </div>
    </div>
  );
}
