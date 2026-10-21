import { useQuery } from "@tanstack/react-query";
import { getEvents } from "../lib/events";

export default function EventsPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["events"],
    queryFn: getEvents,
  });

  if (error) {
    console.log(error);
    return (
      <div>
        Error: {error instanceof Error ? error.message : "Unknown error"}
      </div>
    );
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const events = data?.data?.events || [];
  return (
    <div>
      <ul>
        {events.map((event) => (
          <li key={event.id}>{event.name}</li>
        ))}
      </ul>
    </div>
  );
}
