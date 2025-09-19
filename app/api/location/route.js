import { getLocations } from "./location-utils";

export async function GET(request, { params }) {
  const locations = getLocations();
  return Response.json(locations);
}
