import Breadcrumbs from "@/components/back/Breadcrumbs";

export default function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[{ label: "Accounts", href: "/accounts", active: true }]}
      />
    </main>
  );
}
