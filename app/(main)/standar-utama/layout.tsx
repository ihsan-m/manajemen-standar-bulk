import TopbarSTU from "../../components/(STU)/TopbarSTU";
import SidebarSTU from "../../components/(STU)/SidebarSTU";

export default function STULayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <SidebarSTU />
      <div className="flex flex-col w-full h-screen">
        <TopbarSTU />
        <main className="h-full bg-slate-50 p-4">
          <div className="bg-white h-full rounded-xl border p-4 border-slate-300">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
