function fixContent(needFix) {
  if (needFix) {
    return "fixed bottom-0 inset-x-0";
  }
  return "";
}

export function Footer({ needFix }) {
  return (
    <footer
      className={`shadow-inner bg-white ${fixContent(
        needFix
      )} 2xl:flex 2xl:justify-center`}
    >
      <div className="margin">
        <p className="py-6 lg:text-md 2xl:text-xl 4k:text-2xl">
          <span>{`Copyright © 2022 - ${new Date().getFullYear()} 最爱午后红茶 | 采用 `}</span>
          <a
            href="https://nextjs.org/"
            className="text-red-400 hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            Next.js
          </a>
          <span> & </span>
          <a
            href="https://tailwindcss.com/"
            className="text-red-400 hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            Tailwind CSS
          </a>
          <span> 搭建</span>
        </p>
      </div>
    </footer>
  );
}
