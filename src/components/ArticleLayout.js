import { Layout } from "../components/Layout";

export function ArticleLayout({ children, articleData }) {
  return (
    <Layout>
      <h1>{articleData}</h1>
      <div className="lg:grid grid-cols-4">
        <div className="col-span-1">
          <h1>目录</h1>
          <ul className="list-disc">
            <li>
              第一章
              <ul className="px-6 list-decimal">
                <li>第一节</li>
                <li>第二节</li>
                <li>第三节</li>
                <li>第四节</li>
              </ul>
            </li>
            <li>
              第二章
              <ul className="px-6 list-decimal">
                <li>第一节</li>
                <li>第二节</li>
                <li>第三节</li>
                <li>第四节</li>
              </ul>
            </li>
            <li>
              第三章
              <ul className="px-6 list-decimal">
                <li>第一节</li>
                <li>第二节</li>
                <li>第三节</li>
                <li>第四节</li>
              </ul>
            </li>
            <li>
              第四章
              <ul className="px-6 list-decimal">
                <li>第一节</li>
                <li>第二节</li>
                <li>第三节</li>
                <li>第四节</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="col-span-3 bg-gray-100"></div>
      </div>
    </Layout>
  );
}
