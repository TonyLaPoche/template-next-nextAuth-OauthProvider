export async function GET() {
    const res = await fetch('./data.ts', {
        method: 'GET'
    })
    const data = await res.json()
   
    return Response.json({ data })
  }