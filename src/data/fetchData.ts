
let abortController: AbortController;

export default async function fetchData(input: RequestInfo | URL, init?: RequestInit) {
    abortController = getAbortController();
    init = init || {};
    init.signal = abortController.signal;

    return await fetch(input, init);

}


export function getAbortController() {
    if (abortController && !abortController.signal.aborted)
        return abortController;
    return abortController = new AbortController();
}