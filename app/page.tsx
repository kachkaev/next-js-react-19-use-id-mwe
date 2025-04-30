import UseIdOnClient from "./use-id-on-client";
import UseIdOnServer from "./use-id-on-server";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <>
      <UseIdOnServer />
      <UseIdOnClient />
      <UseIdOnServer />
      <UseIdOnClient />
    </>
  );
}
