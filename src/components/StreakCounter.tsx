import { Trophy } from "lucide-react";

interface StreakCounterProps {
  count: number;
}

export const StreakCounter = ({ count }: StreakCounterProps) => {
  return (
    <div className="streak-badge">
      <Trophy className="mr-2 h-4 w-4" />
      <span>{count} Day Streak!</span>
    </div>
  );
};