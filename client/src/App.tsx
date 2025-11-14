import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { LeadFormProvider } from "@/contexts/LeadFormContext";
import { HelmetProvider } from "react-helmet-async";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { SkipNavigation } from "@/components/SkipNavigation";
import { useState, useEffect } from "react";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [recaptchaSiteKey, setRecaptchaSiteKey] = useState<string>("");
  const [keyLoaded, setKeyLoaded] = useState<boolean>(false);

  useEffect(() => {
    fetch('/api/config/recaptcha')
      .then(res => res.json())
      .then(data => {
        if (data.siteKey) {
          setRecaptchaSiteKey(data.siteKey);
          setKeyLoaded(true);
        } else {
          console.error("reCAPTCHA site key not available");
          setKeyLoaded(true);
        }
      })
      .catch(err => {
        console.error("Failed to load reCAPTCHA configuration:", err);
        setKeyLoaded(true);
      });
  }, []);

  const appContent = (
    <LeadFormProvider>
      <SkipNavigation />
      <Toaster />
      <Router />
    </LeadFormProvider>
  );

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <TooltipProvider>
            {keyLoaded && recaptchaSiteKey ? (
              <GoogleReCaptchaProvider
                reCaptchaKey={recaptchaSiteKey}
                scriptProps={{
                  async: true,
                  defer: true,
                  appendTo: "head",
                }}
              >
                {appContent}
              </GoogleReCaptchaProvider>
            ) : (
              appContent
            )}
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
