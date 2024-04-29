import Card from "@/components/Main/Card";
import Favorites from "@/components/Main/Favorites";
import SectionTop from "@/components/Main/SectionTop";
import Sidebar from "@/components/Sidebar/Sidebar";


interface PageProps {
  title: string;
  imageUrl: string;
}

const Home: React.FC<PageProps> = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="md:flex md:flex-1">
        <aside className=" md:w-1/5 w-screen">
          <Sidebar />
        </aside>
        <main className="flex-1  w-4/5 h-[90vh] bg-gradient-to-tr from-zinc-100 from-40% to-green-400">
          <section className="px-5">
            <SectionTop />
            
          </section>
          
          
        </main>
      </div>
      <footer className="w-full h-full bg-red-400 ">
      </footer>
    
    </div>
  );
};

export default Home;
