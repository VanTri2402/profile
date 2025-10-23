export type Role = "user" | "ai";

export interface ChatMessage {
  role: Role;
  text: string;
}
