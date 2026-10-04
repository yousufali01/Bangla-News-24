import headlinesData from "@/data/headlines.json";
import Marquee from "react-fast-marquee";

const HeadlineMarquee = () => {
    return (
        <div className="w-full bg-red-600 text-white">
            <div className="flex min-h-10 items-center max-w-7xl mx-auto">

                {/* Latest News */}
                <div className="z-10 flex h-10 shrink-0 items-center bg-red-900 px-5 text-sm font-bold shadow-md">
                    সর্বশেষ সংবাদ
                </div>

                {/* Headlines */}
                <div className="min-w-0 flex-1 overflow-hidden">
                    <Marquee
                        direction="left"
                        speed={80}
                        // pauseOnHover={false}
                        // pauseOnClick={false}
                        // gradient={false}
                    >
                        {headlinesData.data.map((headline) => (
                            <span
                                key={headline.id}
                                className="mx-5 whitespace-nowrap text-sm font-medium md:text-base"
                            >
                                {headline.title}
                                <span className="mx-4 text-red-200">|</span>
                            </span>
                        ))}
                    </Marquee>
                </div>

            </div>
        </div>
    );
};

export default HeadlineMarquee;

