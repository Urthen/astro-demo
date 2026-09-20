export function GET({ params, request }: { params: Record<string, string>; request: Request }) {
    return new Response(
        JSON.stringify({
            message: "Hello from the API test route!",
            params: params,
            queryParams: new URL(request.url).searchParams.toString(),
            requestUrl: request.url
        }),
    );
}
