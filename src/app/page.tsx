import Favorites from "@/components/Main/Favorites";
import SectionTop from "@/components/Main/SectionTop";
import Sidebar from "@/components/Sidebar/Sidebar";

interface PageProps {
  title: string;
}

const Home: React.FC<PageProps> = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className=" w-1/5">
          <Sidebar />
        </aside>
        <main className="flex-1 bg-red-300 w-4/5 h-[90vh] px-5 bg-gradient-to-bl from-green-400 from-10% via-zinc-800 via-20% to-black to-90%">
          <SectionTop />
          <Favorites />
        </main>
      </div>
      <footer className="w-full h-full bg-red-400 ">fefe</footer>
    </div>
  );
};

export default Home;
