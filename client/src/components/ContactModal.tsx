import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactRequestSchema, type InsertContactRequest } from "@shared/schema";
import { useCreateContactRequest } from "@/hooks/use-contact";
import { Loader2 } from "lucide-react";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const { mutate, isPending } = useCreateContactRequest();
  
  const form = useForm<InsertContactRequest>({
    resolver: zodResolver(insertContactRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      type: "Player",
    },
  });

  const onSubmit = (data: InsertContactRequest) => {
    mutate(data, {
      onSuccess: () => {
        form.reset();
        onOpenChange(false);
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-secondary border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">Let's Work Together</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Tell us about your goals. We'll get back to you with a strategy to showcase your talent.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name" className="text-white">Full Name</Label>
            <Input
              id="name"
              {...form.register("name")}
              placeholder="Kylian Mbappé"
              className="bg-background border-input text-white focus:border-blue-500 transition-colors"
            />
            {form.formState.errors.name && (
              <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
            )}
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-white">Email</Label>
            <Input
              id="email"
              type="email"
              {...form.register("email")}
              placeholder="k.mbappe@example.com"
              className="bg-background border-input text-white focus:border-blue-500 transition-colors"
            />
             {form.formState.errors.email && (
              <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="type" className="text-white">I am a...</Label>
            <Select 
              onValueChange={(val) => form.setValue("type", val)} 
              defaultValue="Player"
            >
              <SelectTrigger className="bg-background border-input text-white focus:ring-blue-500">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent className="bg-secondary border-border text-white">
                <SelectItem value="Player">Player</SelectItem>
                <SelectItem value="Agent">Agent</SelectItem>
                <SelectItem value="Academy/Scout">Academy / Scout</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="message" className="text-white">Message</Label>
            <Textarea
              id="message"
              {...form.register("message")}
              placeholder="I have match footage from last season and need a highlight reel for scouts..."
              className="bg-background border-input text-white min-h-[100px] focus:border-blue-500 transition-colors"
            />
             {form.formState.errors.message && (
              <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>
            )}
          </div>

          <Button 
            type="submit" 
            disabled={isPending}
            className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold h-11"
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Request"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
