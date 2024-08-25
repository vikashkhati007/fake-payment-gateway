// api > hello > [bin] > route.ts
import { GetCreditCard } from "@/lib/CreditCardGenerator";
import {NextRequest, NextResponse} from "next/server";

export async function GET (request: NextRequest, { params }: { params: { slug: number } }){
    const bin = params.slug;
    let card = GetCreditCard(bin);
    const CardDetails = `${card}`
    const json = {
        CardDetails
    };
    return NextResponse.json(json);
}