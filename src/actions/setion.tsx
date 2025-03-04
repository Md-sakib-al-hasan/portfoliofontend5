"use server"
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";


export default async function Getseetion() {
  const session = await getServerSession(authOptions);

  return  session;
}
