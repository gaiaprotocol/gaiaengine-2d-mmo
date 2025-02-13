import { Reaction, Rich } from "@common-module/social-components";

export default interface ProximityChatMessageEntity {
  id: number;
  sender: string;

  x: number;
  y: number;
  z: number;

  content?: string;
  rich?: Rich;
  reactions?: Reaction[];

  created_at: string;
  edited_at?: string;
}

export const ProximityChatMessageQuery =
  "id, sender, x, y, z, content, rich, reactions, created_at, edited_at";
