import { useId } from "react";

export default function UseIdOnServer() {
  const id = useId();
  return <div>useId on server: {id}</div>;
}
