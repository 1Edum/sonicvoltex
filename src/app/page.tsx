import { musicas } from "@/Dados/Musicas";
import Card from "@/components/Card/Card";
import Sidebar from "@/components/Sidebar/Sidebar";


interface PageProps {
  title: string;
}

const Home: React.FC<PageProps> = ({ title}) => {
  
  const idsSelecionados = [1, 7, 8, 4, 5, 9];
  const musicasSelecionadas = musicas.filter(musica => idsSelecionados.includes(musica.id));

  return ( 
    <div className="w-screen h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className=" w-1/5">
          <Sidebar />
        </aside>
        <main className="flex-1 bg-red-300 w-4/5 h-[90vh]">
          <section className="flex flex-col items-center justify-center bg-slate-500">
            <h1>Ouvidas Anteriormente</h1>
            <div className="grid  grid-rows-2 grid-flow-col gap-y-2 gap-x-4">
              {musicasSelecionadas.map(musica => (
                <div key={musica.id} className="">
                  <h4>
                    {musica.titulo}
                  </h4>
                  <p className="text-xs">
                    {musica.artista}
                  </p>
                </div>
              ))}   
            </div>
          </section>
        </main>
      </div>
      <footer className="w-full h-full bg-red-400 ">
          fefe
      </footer>
    </div>
  );
}

export default Home;