export const getData = async (url)=> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${url}`)
    return res.json()
}