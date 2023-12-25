import AccountStatus from "@/components/back/AccountStatus";
import Breadcrumbs from "@/components/back/Breadcrumbs";
import IsPrimary from "@/components/back/IsPrimary";
import { fetchAccounts } from "@/lib/dbQuary";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default async function Page() {
  const accounts = await fetchAccounts();
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[{ label: "Accounts", href: "/accounts", active: true }]}
      />
      <div className="mt-6 flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="bg-gray-50 p-2 rounded-lg">
            <div>
              {accounts.map((account) => (
                <div
                  key={account._id}
                  className="grid lg:grid-cols-3 mb-2 w-full bg-white p-4 rounded-md"
                >
                  <div className="flex items-center justify-between lg:grow gap-2 border-b pb-4 lg:border-none lg:pb-0">
                    <p>{account.name}</p>
                    <p className="capitalize">{account.broker}</p>
                    <p className="uppercase">{account.userid}</p>
                  </div>
                  <div className="flex items-center justify-around lg:grow gap-2 border-b py-2 lg:border-none lg:py-0">
                    <div>
                      <span>Lot Size :</span> <span>{account.lot}</span>{" "}
                    </div>
                    <div>
                      <span>Risk /trade :</span> <span>{account.risk}</span>{" "}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 gap-4 lg:pt-0">
                    <div className="flex justify-start gap-4">
                      <AccountStatus status={account.isActive} />
                      <IsPrimary isPrimary={account.isPrimary} />
                    </div>
                    <div className="flex justify-end gap-2">
                      <Link
                        href="/accounts/add"
                        className="border p-2 rounded-md hover:bg-gray-100"
                      >
                        <PencilIcon className="w-5" />
                      </Link>
                      <button className="border p-2 rounded-md bg-red-200 hover:bg-gray-100">
                        <span className="sr-only">Delete</span>
                        <TrashIcon className="w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
