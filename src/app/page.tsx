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
          <Teste />
        </main>
      </div>
      <footer className="w-full h-full bg-red-400 ">
      <img src='https://firebasestorage.googleapis.com/v0/b/sonicvoltex.appspot.com/o/Evidencias%20-%20Chitaozinho%20%26%20Xororo.png?alt=media&token=0e252298-6277-4c85-ae81-1199b1e9b466' alt="Firebase Image" width={500} height={300}/>
      </footer>
    
    </div>
  );
};

export default Home;
