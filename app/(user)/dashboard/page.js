import AccountStatus from "@/components/back/AccountStatus";
import Breadcrumbs from "@/components/back/Breadcrumbs";
import GenerateTokenLink from "@/components/back/GenerateTokenLink";
import IsPrimary from "@/components/back/IsPrimary";
import { fetchAccounts } from "@/lib/dbQuary";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default async function Page() {
  const accounts = await fetchAccounts();
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[{ label: "Dashboard", href: "/dashboard", active: true }]}
      />
      <div className="mt-6 flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="bg-gray-50 p-2 rounded-lg">
            <div>
              {accounts.map((account) => (
                <div
                  key={account._id}
                  className="mb-2 w-full bg-white p-4 rounded-md"
                >
                  <div className="flex items-center justify-between lg:grow gap-2 border-b pb-4 lg:border-none lg:pb-0">
                    <div className="flex items-center gap-4">
                      <p>{account.name}</p>
                      <p className="uppercase">{account.userid}</p>
                      <AccountStatus status={account.isActive} />
                      <IsPrimary isPrimary={account.isPrimary} />
                    </div>
                    <div className="flex items-center gap-4">
                      {/* TODO: Fix this */}
                      {account.token && account.tokenExp ? (
                        <>
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
                        </>
                      ) : (
                        <GenerateTokenLink account={account} />
                      )}
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
