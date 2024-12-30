import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface WorkoutDay {
  day: string;
  muscles: string;
  workouts: string[];
}

const weeklySchedule: WorkoutDay[] = [
  {
    day: "Monday",
    muscles: "Chest & Triceps",
    workouts: ["Bench Press", "Incline Dumbbell Press", "Tricep Extensions", "Dips"]
  },
  {
    day: "Tuesday",
    muscles: "Back & Biceps",
    workouts: ["Pull-ups", "Barbell Rows", "Bicep Curls", "Face Pulls"]
  },
  {
    day: "Wednesday",
    muscles: "Legs",
    workouts: ["Squats", "Deadlifts", "Leg Press", "Calf Raises"]
  },
  {
    day: "Thursday",
    muscles: "Shoulders & Arms",
    workouts: ["Military Press", "Lateral Raises", "Hammer Curls", "Skull Crushers"]
  },
  {
    day: "Friday",
    muscles: "Full Body HIIT",
    workouts: ["Burpees", "Mountain Climbers", "Jump Rope", "Box Jumps"]
  },
  {
    day: "Saturday",
    muscles: "Core & Cardio",
    workouts: ["Planks", "Russian Twists", "Running", "Bicycle Crunches"]
  }
];

export const WeeklySchedule = () => {
  const { toast } = useToast();

  const handleAddWorkout = (day: string, workout: string) => {
    toast({
      title: "Workout Added! 💪",
      description: `Added ${workout} to your ${day} schedule`,
      duration: 3000,
    });
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {weeklySchedule.map((schedule) => (
        <Sheet key={schedule.day}>
          <SheetTrigger className="w-full">
            <Card className="animate-fade-in hover:bg-card/80 transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{schedule.day}</span>
                  <span className="text-sm text-muted-foreground">{schedule.muscles}</span>
                </CardTitle>
              </CardHeader>
            </Card>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>{schedule.day} - {schedule.muscles}</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <ul className="space-y-4">
                {schedule.workouts.map((workout) => (
                  <li key={workout} className="flex items-center justify-between p-2 rounded-lg bg-card">
                    <span>{workout}</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleAddWorkout(schedule.day, workout)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
};