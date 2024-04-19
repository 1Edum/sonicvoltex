import Favorites from "@/components/Main/Favorites";
import SectionTop from "@/components/Main/SectionTop";
import Sidebar from "@/components/Sidebar/Sidebar";
import Teste from "@/app/Teste"

interface PageProps {
  title: string;
  imageUrl: string;
}

const Home: React.FC<PageProps> = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className=" w-1/5">
          <Sidebar />
        </aside>
        <main className="flex-1 bg-red-300 w-4/5 h-[90vh] px-5 bg-gradient-to-tr from-zinc-100 from-40% to-green-400">
          <SectionTop />
          <Favorites />
        </main>
      </div>
      <Teste imagePath="path/to/your/image.jpg"/>
      <footer className="w-full h-full bg-red-400 ">fefe</footer>
    </div>
  );
};

export default Home;
