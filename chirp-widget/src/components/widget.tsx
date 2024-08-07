import { MessageCircle, StarIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useState } from "react";

import tailwindStyles from "../index.css?inline";

export default function Widget() {
  const [rating, setRating] = useState<number>(0);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const onRatingSelect = (index: number) => setRating(index + 1);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = e.currentTarget;
    const data = {
      name: formData.user.value,
      email: formData.email.value,
      feedback: formData.feedback.value,
      rating,
    };
    setIsSubmitted(true);
    console.log(data);
  };

  return (
    <>
      <style>{tailwindStyles}</style>
      <section className="chirp fixed bottom-6 right-6 z-50">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="inline-flex gap-2 items-center rounded-full shadow-lg hover:scale-105">
              <MessageCircle className="h-5 w-5" />
              <span>Chirp</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="chirp w-full max-w-md rounded-md shadow-lg bg-card">
            <style>{tailwindStyles}</style>
            {isSubmitted ? (
              <div className="space-y-4">
                <h3 className="text-xl font-bold">
                  Thank you for your feedback
                </h3>
                <p>You feedback helps us improve our product and services.</p>
              </div>
            ) : (
              <div className="space-y-6">
                <h3 className="text-xl font-bold">Send us your feedback</h3>
                <form className="space-y-2" onSubmit={handleFormSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="user">Name</Label>
                      <Input id="user" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        placeholder="Enter your email"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="feedback">Feedback</Label>
                    <Textarea
                      id="feedback"
                      placeholder="Tell us what you think"
                      className="min-h-[100px] resize-none"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, index) => (
                        <StarIcon
                          key={index}
                          className={`h-5 w-5 cursor-pointer ${
                            rating > index
                              ? "fill-primary"
                              : "fill-muted stroke-muted-foreground"
                          }`}
                          onClick={() => onRatingSelect(index)}
                        />
                      ))}
                    </div>
                    <Button type="submit" className="rounded-full">
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </PopoverContent>
        </Popover>
      </section>
    </>
  );
}
