 import Sidebar from "@/components/Sidebar/Sidebar";

export default function Home() {
  return ( 
    <div className="w-screen h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className=" w-1/5">
            <Sidebar />
        </aside>
        <main className="flex-1 bg-red-300 w-4/5 h-[90vh]">
          fefef
        </main>
      </div>
      <footer className="w-full h-full bg-red-400 ">
          fefe
      </footer>
    </div>
  );
}
