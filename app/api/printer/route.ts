import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ message: "3D Printer API endpoint" })
}

