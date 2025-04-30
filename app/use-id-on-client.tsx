"use client";
import { useId } from "react";

export default function UseIdOnClient() {
  const id = useId();
  return <div>useId on client: {id}</div>;
}
