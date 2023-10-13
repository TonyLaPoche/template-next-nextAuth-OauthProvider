import { NextResponse } from 'next/server';



export async function GET(request: Request) {

    const origin = request.headers.get('origin');

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
  
    const response: any = await res.json();
    
    return NextResponse.json(response);
  }