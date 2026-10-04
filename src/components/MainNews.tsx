import homePageData from "../data/homePage.json";
import Image from "next/image";

export default function MainNews() {
  const mainNewsSection = homePageData.data.find(
    (section) => section.title === "প্রধান খবর"
  );

  const mainNews = mainNewsSection?.articles || [];

  const mainArticle = mainNews[0];
  const sideNews = mainNews.slice(1, 5);

  // শুধু এই section গুলো দেখানো হবে
  const allowedSections = [
    "নির্বাচিত খবর",
    "বাংলাদেশ",
    "ভারত",
    "বিশ্ব",
    "স্বাস্থ্য",
    "ভিডিও",
    "অন্যান্য খবর",
  ];

  // নির্দিষ্ট section গুলো filter করা
  const otherSections = homePageData.data.filter((section) =>
    allowedSections.includes(section.title)
  );

  const formatDate = (date: string) => {
    const d = new Date(date);

    return (
      d.toLocaleDateString("bn-BD", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }) +
      " এ " +
      d.toLocaleTimeString("bn-BD", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
    );
  };

  return (
    <section className="w-full">

      {/* =====================================================
          TOP NEWS
      ===================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        {/* ================= Main Article ================= */}
        {mainArticle && (
          <a
            href={mainArticle.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200"
          >
            {/* Image */}
            <figure className="w-full">
              <Image
                src={mainArticle.imageUrl}
                alt={mainArticle.imageAlt}
                width={640}
                height={360}
                priority
                className="w-full aspect-[16/9] object-cover"
              />
            </figure>

            {/* Content */}
            <div className="px-4 pt-4 pb-4">

              {/* Category */}
              <p className="text-[12px] font-medium text-red-600 mb-2">
                {mainArticle.category}
              </p>

              {/* Title */}
              <h1 className="text-[22px] sm:text-[24px] font-bold leading-[1.35] text-gray-900">
                {mainArticle.title}
              </h1>

              {/* Description */}
              <p className="mt-3 text-[14px] leading-[1.7] text-gray-600 line-clamp-3">
                {mainArticle.description}
              </p>

              {/* Date */}
              <time
                dateTime={mainArticle.firstPublished}
                className="block mt-3 text-[11px] text-gray-400"
              >
                {formatDate(mainArticle.firstPublished)}
              </time>

            </div>
          </a>
        )}

        {/* ================= Side News ================= */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">

          {sideNews.map((article) => (
            <a
              key={article.id}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-[11px] border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors duration-150"
            >

              {/* Category */}
              <p className="text-[11px] font-medium text-red-600 mb-1">
                {article.category}
              </p>

              {/* Title */}
              <h3 className="text-[15px] sm:text-[16px] font-semibold leading-[1.45] text-gray-900">
                {article.title}
              </h3>

            </a>
          ))}

        </div>

      </div>


      {/* =====================================================
          OTHER NEWS SECTIONS
      ===================================================== */}
      <div className="mt-8 space-y-9">

        {otherSections.map((section) => (

          <section
            key={section.curationId}
            className="w-full"
          >

            {/* ================= Section Header ================= */}
            <div className="mb-3">

              <div className="flex items-center justify-between">

                <h2 className="text-[20px] sm:text-[22px] font-bold text-gray-900">
                  {section.title}
                </h2>

              </div>

              {/* Red Line */}
              <div className="mt-2 h-[2px] w-full bg-red-600" />

            </div>


            {/* ================= Article Cards ================= */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">

              {section.articles?.map((article) => (

                <a
                  key={article.id}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-200"
                >

                  {/* Image */}
                  <figure className="overflow-hidden">

                    <Image
                      src={article.imageUrl}
                      alt={article.imageAlt}
                      width={640}
                      height={360}
                      className="w-full aspect-[16/9] object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />

                  </figure>


                  {/* Card Content */}
                  <div className="p-3">

                    {/* Category */}
                    <p className="text-[11px] font-medium text-red-600 mb-1.5">
                      {article.category}
                    </p>


                    {/* Title */}
                    <h3 className="text-[17px] font-bold leading-[1.4] text-gray-900 line-clamp-2">
                      {article.title}
                    </h3>


                    {/* Description */}
                    <p className="mt-2 text-[13px] leading-[1.65] text-gray-600 line-clamp-3">
                      {article.description}
                    </p>


                    {/* Date */}
                    <time
                      dateTime={article.firstPublished}
                      className="block mt-3 text-[10px] text-gray-400"
                    >
                      {formatDate(article.firstPublished)}
                    </time>

                  </div>

                </a>

              ))}

            </div>

          </section>

        ))}

      </div>

    </section>
  );
}