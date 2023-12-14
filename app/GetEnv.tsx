
export function GetEnv(index:number): string {
    switch(index) {
        case 0:
            return process.env.NEXT_PUBLIC_SEEDONE as string;
        case 1:
            return process.env.NEXT_PUBLIC_SEEDTWO as string;
        case 2:
            return process.env.NEXT_PUBLIC_SEEDTHREE as string;
        case 3:
            return process.env.NEXT_PUBLIC_SEEDFOUR as string;
        case 4:
            return process.env.NEXT_PUBLIC_SEEDFIVE as string;
        case 5:
            return process.env.NEXT_PUBLIC_SEEDSIX as string;
        case 6:
            return process.env.NEXT_PUBLIC_SEEDSEVEN as string;
        case 7:
            return process.env.NEXT_PUBLIC_SEEDEIGHT as string;
        case 8:
            return process.env.NEXT_PUBLIC_SEEDNINE as string;
        case 9: 
            return process.env.NEXT_PUBLIC_SEEDTEN as string;
        case 10:
            return process.env.NEXT_PUBLIC_SEEDELEVEN as string;
        case 11:
            return process.env.NEXT_PUBLIC_SEEDTWELVE as string;
        default:
            return "";
    }

}