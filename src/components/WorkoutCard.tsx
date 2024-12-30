import { Calendar, Clock, Flame } from "lucide-react";

interface WorkoutCardProps {
  title: string;
  duration: string;
  calories: number;
  date: string;
}

export const WorkoutCard = ({ title, duration, calories, date }: WorkoutCardProps) => {
  return (
    <div className="workout-card animate-fade-in">
      <h3 className="mb-4 text-xl font-bold text-white">{title}</h3>
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Flame className="h-4 w-4" />
          <span>{calories} kcal</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};