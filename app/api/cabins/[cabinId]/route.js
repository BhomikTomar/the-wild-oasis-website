import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
  const { cabinId } = params;

  try {
    const [cabin, bookedDates] = await Promise.all[
      (getCabin(cabinId), getBookedDatesByCabinId(cabinId))
    ];
  } catch {
    return Response.json({ cabin: bookedDates });
  }
  return Response.json({ message: "Cabin not found" });
}
