import TopbarSTU from "../../components/(STU)/TopbarSTU";
import SidebarSTU from "../../components/(STU)/SidebarSTU";

export default function STULayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <SidebarSTU />
      <div className="flex flex-col w-full h-screen">
        <TopbarSTU />
        <main className="h-full bg-slate-50 p-4">
          <div className="flex justify-center bg-white h-full rounded-xl border px-10 py-5 border-slate-300 text-sm">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
