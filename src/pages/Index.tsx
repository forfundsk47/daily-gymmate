import { WorkoutCard } from "@/components/WorkoutCard";
import { StreakCounter } from "@/components/StreakCounter";
import { MusicPlayer } from "@/components/MusicPlayer";
import { Bell } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Show notification for scheduled workout
    toast({
      title: "Workout Reminder",
      description: "Time for your daily workout! 💪",
      duration: 5000,
    });
  }, []);

  return (
    <div className="min-h-screen pb-24">
      <div className="container py-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">My Workouts</h1>
          <button className="rounded-full bg-card p-2 hover:bg-muted">
            <Bell className="h-6 w-6" />
          </button>
        </div>

        <div className="mb-8 flex justify-center">
          <StreakCounter count={5} />
        </div>

        <div className="grid gap-4">
          <WorkoutCard
            title="Morning Cardio"
            duration="45 min"
            calories={320}
            date="Today"
          />
          <WorkoutCard
            title="Strength Training"
            duration="60 min"
            calories={450}
            date="Yesterday"
          />
          <WorkoutCard
            title="HIIT Session"
            duration="30 min"
            calories={280}
            date="2 days ago"
          />
        </div>
      </div>
      <MusicPlayer />
    </div>
  );
};

export default Index;