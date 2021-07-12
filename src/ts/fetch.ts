export async function fetchJson(url: string): Promise<any> {
    const data = await fetch(url);
    return await data.json();
}

export async function getFieldFromJson<T>(url: string, field: string): Promise<T> {
    const json = await fetchJson(url);
    return json.data[field];
}
