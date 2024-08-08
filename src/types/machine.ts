import { z } from 'zod';

export type Player = 'x' | 'o';

export type ContextType = {
  board: Array<Player | null>;
  moves: number;
  player: Player;
  winner: Player | undefined;
};

export const playEventSchema = z.object({
  type: z.literal('PLAY'),
  value: z.number().min(0).max(8),
});
type PlayEventType = z.infer<typeof playEventSchema>;

export const resetEventSchema = z.object({
  type: z.literal('RESET'),
});
type ResetEventType = z.infer<typeof resetEventSchema>;

export type EventsType = PlayEventType | ResetEventType;
