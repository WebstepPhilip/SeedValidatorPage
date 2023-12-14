import { GetEnv } from "@/app/GetEnv";

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
    const {searchParams} = new URL(request.url);
    const id = searchParams.get('id');
    const input = searchParams.get('answer');
    let value = NaN;
    if (id) {
    value = parseInt(id);
    }
    let rightAnswer = "";
    if (!isNaN(value) && value < 12) {
    rightAnswer = GetEnv(value);
    }
    if (rightAnswer === input?.toLowerCase()) {
        return Response.json({valid:true})
    } else {
        return Response.json({valid:false})
    }
}