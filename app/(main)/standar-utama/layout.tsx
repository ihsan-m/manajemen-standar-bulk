import TopbarSTU from "../../components/(STU)/TopbarSTU";
import SidebarSTU from "../../components/(STU)/SidebarSTU";

export default function STULayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SidebarSTU/>
      <div className="flex grow flex-col">
        <TopbarSTU />
        {children}
      </div>
    </>
  );
}
