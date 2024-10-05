// app/api/auth/route.ts
import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { username, password } = await request.json();

  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
      username,
      password,
    });

    return NextResponse.json(res.data);
  } catch (error: any) {
    const status = error.response?.status || 500;
    const message = error.response?.data?.msg || 'Something went wrong';
    return NextResponse.json({ msg: message }, { status });
  }
}
