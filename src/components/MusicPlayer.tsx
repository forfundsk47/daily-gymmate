import { Play, SkipBack, SkipForward } from "lucide-react";

export const MusicPlayer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card p-4 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h4 className="text-sm font-medium text-white">Workout Mix</h4>
          <p className="text-xs text-muted-foreground">Motivational Playlist</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-muted-foreground hover:text-white">
            <SkipBack className="h-5 w-5" />
          </button>
          <button className="rounded-full bg-primary p-2 text-white hover:bg-primary/90">
            <Play className="h-6 w-6" />
          </button>
          <button className="text-muted-foreground hover:text-white">
            <SkipForward className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};