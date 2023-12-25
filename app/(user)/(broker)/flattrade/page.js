import { saveToken } from "@/lib/dbQuary";

export default async function Page({ searchParams }) {
  console.log(searchParams);
  const code = searchParams?.code || "";
  const userid = searchParams?.client || "";
  if (!code && !userid) throw new Error("Unable to get code or userid");
  await saveToken(code, userid);
  return <div>Flatetrade</div>;
}
