"use server"

import { cookies } from "next/headers";
import { useRouter } from "next/navigation";

export async function logOut() {
    (await cookies()).delete("gid");
    const router = useRouter();
    router.refresh();
}