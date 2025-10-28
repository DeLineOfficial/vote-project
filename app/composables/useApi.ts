export function useAPI() {
    const runtime = useRuntimeConfig();
    return runtime.public.APIURL;
}