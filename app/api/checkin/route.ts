import { NextResponse } from "next/server";
import pool from "../../lib/db";

export async function POST(req: Request) {
  const { bookingId } = await req.json();

  const client = await pool.connect();
  try {
    const result = await client.query(
      `UPDATE bookings SET status = 'checked-in' WHERE id = $1 RETURNING *`,
      [bookingId]
    );
    return NextResponse.json(result.rows[0]);
  } finally {
    client.release();
  }
}
