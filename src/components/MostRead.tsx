import homePageData from "../data/homePage.json";

export default function MostRead() {
  const allArticles = homePageData.data.flatMap(
    (section) => section.articles || []
  );

  // JSON-এর data থেকেই প্রথম 10টি news নেওয়া হচ্ছে
  const mostReadNews = allArticles.slice(0, 10);

  return (
    <section className="w-full bg-white border border-gray-200 rounded-lg">

      <div className="px-4 py-4">

        {/* ================= Heading ================= */}
        <h2 className="text-[20px] sm:text-[22px] font-bold text-gray-900">
          সর্বাধিক পঠিত
        </h2>

        {/* ================= News List ================= */}
        <div className="mt-2">

          {mostReadNews.map((article, index) => {
            return (
              <a
                key={`${article.id}-${index}`}
                href={article.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 py-[10px] border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors duration-150"
              >

                {/* Number */}
                <span className="shrink-0 w-6 text-[20px] leading-[1.4] font-normal text-red-600">
                  {index + 1}
                </span>

                {/* Headline */}
                <h3 className="text-[14px] sm:text-[15px] font-semibold leading-[1.5] text-gray-900">
                  {article.title}
                </h3>

              </a>
            );
          })}

        </div>

      </div>

    </section>
  );
}