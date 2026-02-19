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
import Demolition from "@/pages/Demolition";
import HomeSitePrep from "@/pages/HomeSitePrep";
import LandClearing from "@/pages/LandClearing";
import GradingLeveling from "@/pages/GradingLeveling";
import BrushRemoval from "@/pages/BrushRemoval";
import DrivewayPrep from "@/pages/DrivewayPrep";
import Contact from "@/pages/Contact";
import ServiceArea from "@/pages/ServiceArea";
import Gallery from "@/pages/Gallery";
import FAQ from "@/pages/FAQ";
import Testimonials from "@/pages/Testimonials";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Import from "@/pages/Import";
import Equipment from "@/pages/Equipment";
import Process from "@/pages/Process";
import Insurance from "@/pages/Insurance";
import Safety from "@/pages/Safety";
import Commercial from "@/pages/Commercial";
import Residential from "@/pages/Residential";
import FreeQuote from "@/pages/FreeQuote";
import Environmental from "@/pages/Environmental";
import MobileHomeRemoval from "@/pages/demolition/MobileHomeRemoval";
import CommercialDemolition from "@/pages/demolition/CommercialDemolition";
import ResidentialDemolition from "@/pages/demolition/ResidentialDemolition";
import ConcreteRemoval from "@/pages/demolition/ConcreteRemoval";
import InteriorDemolition from "@/pages/demolition/InteriorDemolition";
import PoolRemoval from "@/pages/demolition/PoolRemoval";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/residential" component={Residential} />
      <Route path="/commercial" component={Commercial} />
      <Route path="/demolition" component={Demolition} />
      <Route path="/demolition/mobile-home-removal" component={MobileHomeRemoval} />
      <Route path="/demolition/commercial" component={CommercialDemolition} />
      <Route path="/demolition/residential" component={ResidentialDemolition} />
      <Route path="/demolition/concrete-removal" component={ConcreteRemoval} />
      <Route path="/demolition/interior" component={InteriorDemolition} />
      <Route path="/demolition/pool-removal" component={PoolRemoval} />
      <Route path="/home-site-prep" component={HomeSitePrep} />
      <Route path="/land-clearing" component={LandClearing} />
      <Route path="/grading-leveling" component={GradingLeveling} />
      <Route path="/brush-removal" component={BrushRemoval} />
      <Route path="/driveway-prep" component={DrivewayPrep} />
      <Route path="/equipment" component={Equipment} />
      <Route path="/process" component={Process} />
      <Route path="/insurance" component={Insurance} />
      <Route path="/safety" component={Safety} />
      <Route path="/environmental" component={Environmental} />
      <Route path="/free-quote" component={FreeQuote} />
      <Route path="/contact" component={Contact} />
      <Route path="/service-area" component={ServiceArea} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/faq" component={FAQ} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/import" component={Import} />
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
