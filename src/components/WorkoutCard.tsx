import { Calendar, Clock, Flame, ChevronRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface WorkoutCardProps {
  title: string;
  duration: string;
  calories: number;
  date: string;
}

export const WorkoutCard = ({ title, duration, calories, date }: WorkoutCardProps) => {
  const { toast } = useToast();

  const handleComplete = (e: React.MouseEvent) => {
    e.stopPropagation();
    toast({
      title: "Workout Completed! 🎉",
      description: `Great job completing ${title}!`,
      duration: 3000,
    });
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    toast({
      title: "Workout Deleted",
      description: `${title} has been removed`,
      duration: 3000,
    });
  };

  return (
    <Sheet>
      <SheetTrigger className="w-full">
        <div className="workout-card animate-fade-in hover:bg-card/60 transition-colors cursor-pointer">
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
            <div className="ml-auto">
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>
      </SheetTrigger>
      
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>
            Workout details and actions
          </SheetDescription>
        </SheetHeader>
        
        <div className="mt-6 space-y-4">
          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Duration: {duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Flame className="h-4 w-4" />
              <span>Calories: {calories} kcal</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Date: {date}</span>
            </div>
          </div>
          
          <div className="flex gap-2 mt-6">
            <Button onClick={handleComplete} className="flex-1">
              Complete
            </Button>
            <Button onClick={handleDelete} variant="destructive" className="flex-1">
              Delete
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};