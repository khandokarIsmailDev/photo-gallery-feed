import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

// sodo bangla and english support korbo,
let locales = ['bn','en']

// kew jodi onno country jemon russia theke dekhe dokon to amra russian lang use korbo na, default babe english e shift korbo
let defalutLocale = 'en'


function getLocale(request){
    // akhon header theke tar browser er language ta ber kore niye asbo;; accept-language holo header er default value
    const acceptedLanguage = request.headers.get('accept-language') ?? undefined


    //now match korbo accepted-language ki amader locale e ase ki na, na thakele english e shift kore dibo defalut babe
    let headers = {'accept-language':acceptedLanguage}

    let languages = new Negotiator({headers}).language()

    return match (languages,locales,defalutLocale)  // language er sate locales compare kore na mille defalutLocale e convert hobe
}



// akhon pathname ta thik korbo, domain er sate en/bn add korbo forsfully, jemon http://localhost:3000/contact hole tar url auto matic browser er support lang e convert hoy en/bn bose jabe ,jemon: http://localhost:3000/en/contact

export function middleware(request){
    const pathname = request.nextUrl.pathname

    const pathNameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    if(pathNameIsMissingLocale){
        const locale = getLocale(request)

        return NextResponse.redirect(new URL(`/${locale}/${pathname}`,request.url))
    }
}


// amra chai na, ai internationalization application baire apply hok, mane sodo api route /.next, aisob jaygay apply korle api thik moto kaj korbe na tai niche config er maddome ta config kore disi
export const config = {
    matcher:[
        //skip all internal path (_next,api,assets)
        '/((?!api|assets|.*\\..*|_next).*)'
    ]
}







