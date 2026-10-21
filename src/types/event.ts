export interface EventItem {
  id: string;
  name: string;
  description: string;
  starts_at: string;
  capacity: number;
  creator_id: string;
  created_at: string;
  updated_at: string;
}

export interface EventsApiResponse {
  success: boolean;
  data: {
    events: EventItem[];
  };
  meta: {
    pages_total: number;
    total_items: number;
  };
}