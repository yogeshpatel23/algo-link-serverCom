import AddBroker from "@/components/back/AddBroker";
import Breadcrumbs from "@/components/back/Breadcrumbs";

export default function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Accounts", href: "/accounts" },
          { label: "Add Account", href: "/accounts/add", active: true },
        ]}
      />
      <AddBroker />
    </main>
  );
}
