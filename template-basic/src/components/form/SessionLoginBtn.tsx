import { useSession, signOut } from "next-auth/react";
import DropdownButton from "./Dropdown";
import timeExpectedLogged from "../utils/timeExpectedLogged";

export default function SessionLoginBtn() {
  const { data: session } = useSession();
  if (session) {
    const { days, hours, minutes, seconds } = timeExpectedLogged(
      session.expires
    );
    console.groupCollapsed("Session");
    console.log("Hello ", session.user?.name);
    console.log("--------------------");
    console.log(
      `Votre session expire dans ${days} jours, ${hours} heures, ${minutes} minutes et ${seconds} secondes`
    );
    console.groupEnd();

    return (
      <div className="flex flex-col items-center">
        Signed in as {session.user?.name} <br />
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex gap-2 items-center"
          onClick={() =>
            signOut({ callbackUrl: "http://localhost:3000", redirect: true })
          }
        >
          Sign out
        </button>
      </div>
    );
  }
  return (
    <>
      <DropdownButton />
    </>
  );
}
