import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock } from "lucide-react";
import { demoBookingSchema, type DemoBooking } from "@shared/schema";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

type DemoBookingForm = DemoBooking;

// Generate time slots in 15-minute intervals from 9:00 AM to 5:00 PM
const generateTimeSlots = () => {
  const slots: string[] = [];
  for (let hour = 9; hour <= 17; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      if (hour === 17 && minute > 0) break; // Stop at 5:00 PM
      const period = hour >= 12 ? "PM" : "AM";
      const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
      const displayMinute = minute.toString().padStart(2, "0");
      slots.push(`${displayHour}:${displayMinute} ${period}`);
    }
  }
  return slots;
};

const TIME_SLOTS = generateTimeSlots();

const DATE_OPTIONS = [
  { value: "2026-02-04", label: "Wednesday, February 4, 2026" },
  { value: "2026-02-05", label: "Thursday, February 5, 2026" },
  { value: "2026-02-06", label: "Friday, February 6, 2026" },
];

interface DemoBookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DemoBookingModal({ open, onOpenChange }: DemoBookingModalProps) {
  const { toast } = useToast();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<DemoBookingForm>({
    resolver: zodResolver(demoBookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      date: undefined,
      time: "",
    },
  });

  const bookingMutation = useMutation({
    mutationFn: async (data: DemoBookingForm & { recaptchaToken: string }) => {
      return await apiRequest("POST", "/api/demo-bookings", data);
    },
    onSuccess: () => {
      toast({
        title: "Demo Booked Successfully!",
        description: "Check your email for confirmation and next steps.",
      });
      reset();
      setTimeout(() => {
        onOpenChange(false);
      }, 2000);
    },
    onError: (error: Error) => {
      toast({
        title: "Booking Failed",
        description: error.message || "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: DemoBookingForm) => {
    if (!executeRecaptcha) {
      toast({
        title: "Error",
        description: "reCAPTCHA not loaded. Please refresh the page.",
        variant: "destructive",
      });
      return;
    }

    try {
      const recaptchaToken = await executeRecaptcha("demo_booking_submit");
      bookingMutation.mutate({ ...data, recaptchaToken });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to verify reCAPTCHA. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]" data-testid="dialog-demo-booking">
        <DialogHeader>
          <DialogTitle className="text-2xl">Book a Demo</DialogTitle>
          <DialogDescription className="text-base">
            Schedule a personalized demonstration of our services
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              placeholder="John Smith"
              {...register("name")}
              data-testid="input-booking-name"
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@dealership.com"
              {...register("email")}
              data-testid="input-booking-email"
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(555) 123-4567"
              {...register("phone")}
              data-testid="input-booking-phone"
            />
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company Name *</Label>
            <Input
              id="company"
              placeholder="Acme Inc."
              {...register("company")}
              data-testid="input-booking-company"
            />
            {errors.company && (
              <p className="text-sm text-destructive">{errors.company.message}</p>
            )}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="date">Select Date *</Label>
              <Controller
                name="date"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger id="date" data-testid="select-booking-date">
                      <SelectValue placeholder="Choose date">
                        {field.value ? (
                          <span className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {DATE_OPTIONS.find((d) => d.value === field.value)?.label.split(",")[1]}
                          </span>
                        ) : (
                          "Choose date"
                        )}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {DATE_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.date && (
                <p className="text-sm text-destructive">{errors.date.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="time">Select Time *</Label>
              <Controller
                name="time"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger id="time" data-testid="select-booking-time">
                      <SelectValue placeholder="Choose time">
                        {field.value ? (
                          <span className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            {field.value}
                          </span>
                        ) : (
                          "Choose time"
                        )}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent className="max-h-[300px]">
                      {TIME_SLOTS.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.time && (
                <p className="text-sm text-destructive">{errors.time.message}</p>
              )}
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
              data-testid="button-cancel-booking"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={bookingMutation.isPending}
              className="flex-1"
              data-testid="button-submit-booking"
            >
              {bookingMutation.isPending ? "Booking..." : "Book Demo"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
