export interface ZUser {
  number: string;
  location: {
    provider: string;
    latitude: string;
    longitude: string;
    timestamp: string;
  };
}
