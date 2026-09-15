const API_BASE = "http://localhost:3005/api";

export type APIMethod = "GET" | "POST" | "PUT" | "DELETE";

export interface APIRequestOptions {
  body?: unknown;
  headers?: Record<string, string>;
}

async function apiRequest<T>(
  endpoint: string,
  method: APIMethod,
  options: APIRequestOptions = {},
): Promise<T> {
  const { body, headers } = options;

  const response = await fetch(`${API_BASE}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    throw new Error(
      `APIRequest failed [${method} ${endpoint}]: ${response.status} ${response.statusText}`,
    );
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return (await response.json()) as T;
}

export const api = {
  get<T>(endpoint: string): Promise<T> {
    return apiRequest<T>(endpoint, "GET");
  },
  post<T>(endpoint: string, body?: unknown): Promise<T> {
    return apiRequest<T>(endpoint, "POST", { body });
  },
  put<T>(endpoint: string, body?: unknown): Promise<T> {
    return apiRequest<T>(endpoint, "PUT", { body });
  },
  delete<T>(endpoint: string, body?: unknown): Promise<T> {
    return apiRequest<T>(endpoint, "DELETE", { body });
  },
};