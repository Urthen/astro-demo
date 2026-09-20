export const prerender = false;

import { env } from "cloudflare:workers";

export async function GET({ params, request }: { params: Record<string, string>; request: Request; locals: any }) {
    const { ASTRO_TEST_KV } = env;
    let value = await ASTRO_TEST_KV.get("popularity_" + params.slug);
    if (value === null) {
        value = "1";
    } else {
        value = (parseInt(value) + 1).toString();        
    }
    await ASTRO_TEST_KV.put("popularity_" + params.slug, value);
    return new Response(
        JSON.stringify({
            message: "Hello from the API test route!",
            slug: params.slug,
            queryParams: new URL(request.url).searchParams.toString(),
            requestUrl: request.url,
            popularity: value
        }),
    );
};
