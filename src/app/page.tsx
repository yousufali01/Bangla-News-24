import MainNews from "../components/MainNews";
import MostRead from "../components/MostRead";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      <div className="max-w-[1160px] mx-auto px-4 sm:px-5 lg:px-0 py-5">

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">

          {/* ================= Main News ================= */}
          <div className="min-w-0">
            <MainNews />
          </div>


          {/* ================= Most Read ================= */}
          <div className="min-w-0">
            <MostRead />
          </div>

        </div>

      </div>

    </main>
  );
}