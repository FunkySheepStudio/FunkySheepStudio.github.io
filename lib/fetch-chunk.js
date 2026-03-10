async function fetchChunk(url, opts) {
    let onProgress = opts?opts.onProgress:undefined;
    const response = await fetch(url, opts);
    const reader = response.body.getReader();
    let result = await reader.read();
    let total = 0;
    let contentLength = parseInt(response.headers.get("Content-Length") || 0);

    while (!result.done) {
        const value = result.value;
        total += value.length;
        if(typeof onProgress === "function") {
            onProgress(value, {
                contentLength,  
                transferredLength: total
            });
        }
        result = await reader.read();
    }

    return response;
}