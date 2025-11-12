import { AdminSidebar } from "@/components/AdminSidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { type LeadSubmission } from "@shared/schema";
import { format } from "date-fns";
import { Mail, Phone, Building, Calendar, Clock, CheckCircle, XCircle } from "lucide-react";
import { AdminAccessGuard } from "@/components/AdminAccessGuard";

export default function AdminLeads() {
  return (
    <AdminAccessGuard>
      <AdminLeadsContent />
    </AdminAccessGuard>
  );
}

function AdminLeadsContent() {
  const { data: submissions, isLoading } = useQuery<LeadSubmission[]>({
    queryKey: ["/api/lead-submissions"],
  });

  if (isLoading) {
    return (
      <div className="flex h-screen overflow-hidden">
        <AdminSidebar />
        <div className="flex flex-1 flex-col overflow-hidden">
          <header className="flex h-16 items-center justify-between border-b px-6">
            <h1 className="text-2xl font-bold">Lead Submissions</h1>
            <ThemeToggle />
          </header>
          <main className="flex-1 overflow-y-auto p-6">
            <div className="flex items-center justify-center h-64">
              <p className="text-muted-foreground">Loading submissions...</p>
            </div>
          </main>
        </div>
      </div>
    );
  }

  const totalSubmissions = submissions?.length || 0;
  const emailsSent = submissions?.filter(s => s.emailSent).length || 0;
  const emailsFailed = submissions?.filter(s => !s.emailSent && s.emailError).length || 0;
  const leadForms = submissions?.filter(s => s.submissionType === "lead_form").length || 0;
  const demoBookings = submissions?.filter(s => s.submissionType === "demo_booking").length || 0;

  return (
    <div className="flex h-screen overflow-hidden">
      <AdminSidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-16 items-center justify-between border-b px-6">
          <div>
            <h1 className="text-2xl font-bold" data-testid="heading-leads">Lead Submissions</h1>
            <p className="text-sm text-muted-foreground">
              All contact form and demo booking submissions
            </p>
          </div>
          <ThemeToggle />
        </header>
        
        <main id="main-content" role="main" tabIndex={-1} className="flex-1 overflow-y-auto p-6">
          {/* Stats Cards */}
          <div className="mb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Submissions</CardTitle>
                <Mail className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalSubmissions}</div>
                <p className="text-xs text-muted-foreground">
                  {leadForms} leads, {demoBookings} demos
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Emails Sent</CardTitle>
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">{emailsSent}</div>
                <p className="text-xs text-muted-foreground">
                  Successfully delivered
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Email Failures</CardTitle>
                <XCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600 dark:text-red-400">{emailsFailed}</div>
                <p className="text-xs text-muted-foreground">
                  Needs attention
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Demo Bookings</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{demoBookings}</div>
                <p className="text-xs text-muted-foreground">
                  NADA Show requests
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Submissions List */}
          <Card>
            <CardHeader>
              <CardTitle>All Submissions</CardTitle>
              <CardDescription>
                Recent lead forms and demo bookings, sorted by submission date
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!submissions || submissions.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Mail className="mb-4 h-12 w-12 text-muted-foreground" />
                  <h3 className="mb-2 text-lg font-semibold">No submissions yet</h3>
                  <p className="text-sm text-muted-foreground">
                    Lead forms and demo bookings will appear here
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {submissions.map((submission) => (
                    <Card key={submission.id} className="overflow-visible" data-testid={`card-submission-${submission.id}`}>
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <CardTitle className="text-lg">{submission.name}</CardTitle>
                              <Badge
                                variant={submission.submissionType === "demo_booking" ? "default" : "secondary"}
                                data-testid={`badge-type-${submission.id}`}
                              >
                                {submission.submissionType === "demo_booking" ? "Demo Booking" : "Lead Form"}
                              </Badge>
                              {submission.emailSent ? (
                                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-400 dark:border-green-800">
                                  <CheckCircle className="mr-1 h-3 w-3" />
                                  Email Sent
                                </Badge>
                              ) : submission.emailError ? (
                                <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-400 dark:border-red-800">
                                  <XCircle className="mr-1 h-3 w-3" />
                                  Email Failed
                                </Badge>
                              ) : null}
                            </div>
                            <CardDescription>
                              Submitted {format(new Date(submission.submittedAt), "PPpp")}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-sm">
                              <Mail className="h-4 w-4 text-muted-foreground" />
                              <a href={`mailto:${submission.email}`} className="hover:underline">
                                {submission.email}
                              </a>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Phone className="h-4 w-4 text-muted-foreground" />
                              <a href={`tel:${submission.phone}`} className="hover:underline">
                                {submission.phone}
                              </a>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Building className="h-4 w-4 text-muted-foreground" />
                              <span>{submission.dealership}</span>
                            </div>
                          </div>

                          <div className="space-y-3">
                            {submission.submissionType === "demo_booking" && submission.demoDate && submission.demoTime && (
                              <>
                                <div className="flex items-center gap-2 text-sm">
                                  <Calendar className="h-4 w-4 text-muted-foreground" />
                                  <span>{format(new Date(submission.demoDate), "PPPP")}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                  <Clock className="h-4 w-4 text-muted-foreground" />
                                  <span>{submission.demoTime}</span>
                                </div>
                              </>
                            )}
                            {submission.message && (
                              <div className="text-sm">
                                <p className="font-medium mb-1">Message:</p>
                                <p className="text-muted-foreground">{submission.message}</p>
                              </div>
                            )}
                          </div>
                        </div>

                        {submission.emailError && (
                          <div className="mt-4 rounded-md bg-red-50 p-3 dark:bg-red-950">
                            <p className="text-sm font-medium text-red-800 dark:text-red-200">Email Error:</p>
                            <p className="text-sm text-red-700 dark:text-red-300">{submission.emailError}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
