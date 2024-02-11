import { NextResponse } from "next/server";
import adminStore  from "@/store/adminStore";

export async function GET(){
    const res = await adminStore;

    return NextResponse.json(res)
}