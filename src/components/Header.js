export function Header() {
  return (
    <div className="">
      <header className="flex flex-row justify-end border-b-2 border-gray-200">
        <div className="px-5 py-5 flex flex-row mr-auto">
          <img
            className="w-24 h-24"
            src="/assert/images/logo.png"
            alt="first picture"
          />
          <h1 className="px-5 py-7 text-4xl">
            最爱午后<span className="text-red-400">红茶</span>
          </h1>
        </div>
        <div className="mt-14 mr-14 mt- text-xl flex gap-6">
          <a className="" href="#">
            知识体系
          </a>
          <a className="" href="https://blog.csdn.net/u013351484?type=blog">
            早期博客
          </a>
          <a className="" href="#">
            更多
          </a>
        </div>
      </header>
    </div>
  );
}
