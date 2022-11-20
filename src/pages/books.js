import bookList from "../../docs/data/bookList";

export default function Books() {
  return (
    <div className="2xl:flex 2xl:justify-center">
      <div className="margin">
        <h1 className="py-4 text-xl text-gray-800">
          罗列出自己看过或者正在看的书
          <br></br>
          希望后续能拾起再看一遍，并在这里记录每本书每个章节的笔记，以及增加搜索功能，通过关键字索引到相关笔记
        </h1>
        <div className="border-b-2 border-gray-300"></div>
        <div className="grid grid-cols-3 border-x-2 border-gray-300">
          {bookList.map((introInfo) => (
            <div
              key={introInfo.name}
              className="py-6 flex flex-col items-center justify-center"
            >
              <img
                className="h-44 w-32 shadow-xl"
                src={introInfo.imageUrl}
                alt={introInfo.imageAlt}
              />
              <div className="py-2">
                <h3 className="">{introInfo.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
