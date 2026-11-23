import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { launchFireworks } from "./Fireworks";

const STORAGE_KEY = "portfolio_announcement_v1";

export function Alert() {
  const [open, setOpen] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const alreadySeen = localStorage.getItem(STORAGE_KEY);
    if (!alreadySeen) {
      setOpen(true);

      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      intervalRef.current = launchFireworks();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  const handleClose = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        if (!nextOpen) handleClose();
      }}>
      <DialogContent className="sm:max-w-md border-border bg-card text-card-foreground">
        <DialogHeader>
          <DialogTitle>Good News 🎉</DialogTitle>
          <DialogDescription>
            I'm happy to announce that{" "}
            <span className="font-bold">MikeGallery V2</span> is currently in
            development. This website will no longer be in use once V2 is
            released.
          </DialogDescription>
        </DialogHeader>

        <p className="text-sm text-muted-foreground">
          I'm happy to share this good news.
        </p>

        <p className="text-sm text-muted-foreground italic">
          To stay updated on V2, click the following link{" "}
          <a
            href="https://github.com/maonev/MikeGallery_V2"
            target="_blank"
            className="text-blue-500">
            https://github.com/maonev/MikeGallery_V2
          </a>
        </p>

        <DialogFooter>
          <Button
            type="button"
            onClick={handleClose}
            className="bg-primary text-primary-foreground hover:bg-primary/90">
            Understand
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
