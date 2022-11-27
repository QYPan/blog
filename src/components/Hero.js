import latestArticleList from "../../docs/data/latestArticleList";
import ArticleIntro from "../components/articleIntro";
import { Layout } from "../components/Layout";

export function Hero() {
  return (
    <Layout>
      <div className="lg:grid grid-cols-2">
        <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0">
          <div className="xl:max-w-xl">
            <img
              className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
              src="/assert/images/logo.png"
              alt="second picture"
            />
            <h1 className="mt-6 text-2xl tracking-tighter font-semibold text-gray-600 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
              学习、分享
            </h1>
            <div className="mt-4 border-b-2 border-red-300"></div>
            <h1 className="mt-4 text-2xl text-gray-600 tracking-tighter font-semibold sm:text-4xl lg:text-3xl xl:text-4xl">
              记录、总结
            </h1>
            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
              对于很多知识，仅仅依赖我们的大脑记忆能力是不可靠的，它们需要以其他形式被记录下来，并能方便查阅
            </p>
          </div>
        </div>
        <div className="hidden relative lg:block">
          <img
            className="absolute inset-0 w-full h-full lg:object-contain lg:object-center"
            src="/assert/images/logo.png"
            alt="second picture"
          />
        </div>
      </div>
      <div className="">
        <div className="px-8 lg:px-12 py-8">
          <div className="lg:grid grid-cols-5">
            <div className="col-span-1"></div>
            <div className="col-span-3 mt-4 gap-6">
              <h1 className="text-2xl text-gray-900">最新文章</h1>
              {latestArticleList.map((introInfo) => (
                <ArticleIntro introInfo={introInfo} key={introInfo.title} />
              ))}
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
