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
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

interface WorkoutDay {
  day: string;
  muscles: string[];
  workouts: { [key: string]: string[] };
}

const defaultWorkouts = {
  "Chest": ["Bench Press", "Incline Dumbbell Press", "Chest Flyes"],
  "Back": ["Pull-ups", "Barbell Rows", "Lat Pulldowns"],
  "Legs": ["Squats", "Deadlifts", "Leg Press"],
  "Shoulders": ["Military Press", "Lateral Raises", "Front Raises"],
  "Arms": ["Bicep Curls", "Tricep Extensions", "Hammer Curls"],
  "Core": ["Planks", "Russian Twists", "Crunches"],
  "Cardio": ["Running", "Cycling", "Jump Rope"]
};

const weeklySchedule: WorkoutDay[] = [
  { day: "Monday", muscles: [], workouts: {} },
  { day: "Tuesday", muscles: [], workouts: {} },
  { day: "Wednesday", muscles: [], workouts: {} },
  { day: "Thursday", muscles: [], workouts: {} },
  { day: "Friday", muscles: [], workouts: {} },
  { day: "Saturday", muscles: [], workouts: {} }
];

export const WeeklySchedule = () => {
  const { toast } = useToast();
  const [schedule, setSchedule] = useState(weeklySchedule);
  const [selectedMuscle, setSelectedMuscle] = useState<string | null>(null);

  const handleAddMuscle = (dayIndex: number, muscle: string) => {
    const newSchedule = [...schedule];
    if (!newSchedule[dayIndex].muscles.includes(muscle)) {
      newSchedule[dayIndex].muscles.push(muscle);
      newSchedule[dayIndex].workouts[muscle] = [];
      setSchedule(newSchedule);
      toast({
        title: "Muscle Group Added! 💪",
        description: `Added ${muscle} to your ${newSchedule[dayIndex].day} schedule`,
        duration: 3000,
      });
    }
  };

  const handleAddWorkout = (dayIndex: number, muscle: string, workout: string) => {
    const newSchedule = [...schedule];
    if (!newSchedule[dayIndex].workouts[muscle].includes(workout)) {
      newSchedule[dayIndex].workouts[muscle].push(workout);
      setSchedule(newSchedule);
      toast({
        title: "Workout Added! 🎯",
        description: `Added ${workout} to your ${muscle} workout`,
        duration: 3000,
      });
    }
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {schedule.map((day, dayIndex) => (
        <Sheet key={day.day}>
          <SheetTrigger className="w-full">
            <Card className="animate-fade-in hover:bg-card/80 transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{day.day}</span>
                  <span className="text-sm text-muted-foreground">
                    {day.muscles.join(", ") || "No muscles assigned"}
                  </span>
                </CardTitle>
              </CardHeader>
            </Card>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>{day.day}</SheetTitle>
            </SheetHeader>
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-sm font-semibold mb-2">Add Muscle Groups</h3>
                <div className="grid grid-cols-2 gap-2">
                  {Object.keys(defaultWorkouts).map((muscle) => (
                    <Button
                      key={muscle}
                      variant="outline"
                      size="sm"
                      className="justify-between"
                      onClick={() => handleAddMuscle(dayIndex, muscle)}
                    >
                      {muscle}
                      <Plus className="h-4 w-4 ml-2" />
                    </Button>
                  ))}
                </div>
              </div>

              {day.muscles.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold mb-2">Your Muscle Groups</h3>
                  {day.muscles.map((muscle) => (
                    <div key={muscle} className="mb-4">
                      <h4 className="text-sm font-medium mb-2">{muscle}</h4>
                      <div className="space-y-2">
                        {defaultWorkouts[muscle].map((workout) => (
                          <div
                            key={workout}
                            className="flex items-center justify-between p-2 rounded-lg bg-card"
                          >
                            <span className="text-sm">{workout}</span>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleAddWorkout(dayIndex, muscle, workout)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                        <div className="mt-2">
                          <h5 className="text-sm font-medium mb-1">Selected Workouts:</h5>
                          <ul className="text-sm text-muted-foreground">
                            {day.workouts[muscle]?.map((workout) => (
                              <li key={workout} className="ml-4">• {workout}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
};