import type { EventsApiResponse } from "../types/event";
import client from "./api";

export const getEvents = async (): Promise<EventsApiResponse> => {
    const response = await client.get<EventsApiResponse>("/events");
    return response.data;
}