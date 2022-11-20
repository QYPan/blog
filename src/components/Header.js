import Link from "next/link";

export function Header() {
  return (
    <header className="sticky bg-white top-0 z-50">
      <div className="shadow-lg 2xl:flex 2xl:justify-center">
        <div className="margin flex justify-between items-center">
          <div className="flex flex-row items-center mr-auto">
            <img
              className="w-16 h-16 lg:w-24 lg:h-24 2k:w-32 2k:h-32 4k:w-48 4k:h-48"
              src="/assert/images/logo.png"
              alt="first picture"
            />
            <h1 className="px-2 font-semibold text-xl lg:text-2xl 2xl:px-6 2xl:text-3xl 4k:text-5xl">
              <a href="/">
                最爱午后<span className="text-red-400">红茶</span>
              </a>
            </h1>
          </div>
          <div className="lg:text-xl 2xl:text-2xl flex gap-6 4k:gap-14 4k:text-4xl">
            <div className="relative group">
              <button className="py-8 group-hover:text-red-500">
                知识体系
              </button>
              <div className="absolute hidden group-hover:block z-10 w-96 -right-36 gap-4">
                <div className="p-2">
                  <div className="grid grid-cols-3 border-b-2 bg-gray-200">
                    <a
                      href="#"
                      className="block p-2 bg-gray-200 hover:bg-gray-300 hover:text-gray-800 active:bg-gray-400"
                    >
                      音视频
                    </a>
                    <a
                      href="#"
                      className="block p-2 bg-gray-200 hover:bg-gray-300 hover:text-gray-800 active:bg-gray-400"
                    >
                      系统平台
                    </a>
                    <a
                      href="#"
                      className="block p-2 bg-gray-200 hover:bg-gray-300 hover:text-gray-800 active:bg-gray-400"
                    >
                      编程语言
                    </a>
                    <a
                      href="#"
                      className="block p-2 bg-gray-200 hover:bg-gray-300 hover:text-gray-800 active:bg-gray-400"
                    >
                      工具
                    </a>
                    <a
                      href="#"
                      className="block p-2 bg-gray-200 hover:bg-gray-300 hover:text-gray-800 active:bg-gray-400"
                    >
                      数据结构
                    </a>
                    <a
                      href="#"
                      className="block p-2 bg-gray-200 hover:bg-gray-300 hover:text-gray-800 active:bg-gray-400"
                    >
                      跨学科
                    </a>
                    <a
                      href="#"
                      className="block p-2 bg-gray-200 hover:bg-gray-300 hover:text-gray-800 active:bg-gray-400"
                    >
                      游戏
                    </a>
                    <a
                      href="#"
                      className="block p-2 bg-gray-200 hover:bg-gray-300 hover:text-gray-800 active:bg-gray-400"
                    >
                      英语
                    </a>
                    <a
                      href="#"
                      className="block p-2 bg-gray-200 hover:bg-gray-300 hover:text-gray-800 active:bg-gray-400"
                    >
                      音乐
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="py-8 group-hover:text-red-500">阅读</button>
              <div className="absolute hidden group-hover:block z-10 w-48 -right-20 gap-4">
                <div className="grid grid-cols-2 p-2">
                  <a
                    href="/books"
                    className="block p-2 bg-gray-200 hover:bg-gray-300 hover:text-gray-800 active:bg-gray-400"
                  >
                    读书
                  </a>
                  <a
                    href="#"
                    className="block p-2 bg-gray-200 hover:bg-gray-300 hover:text-gray-800 active:bg-gray-400"
                  >
                    读码
                  </a>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="py-8 group-hover:text-red-500">影视</button>
              <div className="absolute hidden group-hover:block z-10 w-32 -right-10 text-center gap-4">
                <div className="p-2">
                  <a
                    className="block p-2 bg-gray-200 hover:bg-gray-300 hover:text-gray-800 active:bg-gray-400"
                    href="#"
                  >
                    随便看看
                  </a>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="py-8 group-hover:text-red-500">更多</button>
              <div className="absolute hidden group-hover:block z-10 w-32 -right-10 text-center gap-4">
                <div className="p-2">
                  <a
                    className="block p-2 bg-gray-200 hover:bg-gray-300 hover:text-gray-800 active:bg-gray-400"
                    href="https://blog.csdn.net/u013351484?type=blog"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    早期博客
                  </a>
                  <a
                    className="block p-2 bg-gray-200 hover:bg-gray-300 hover:text-gray-800 active:bg-gray-400"
                    href="#"
                  >
                    随便写写
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
