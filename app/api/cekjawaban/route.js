export async function GET(request) {
  const jawaban = request.nextUrl.searchParams.get("angka");
  const benar = ["3", "4", "6"];
  return new Response(benar.includes(jawaban) ? "Benar!" : "Salah!");
}
