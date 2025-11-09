import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { LeadFormProvider } from "@/contexts/LeadFormContext";
import { HelmetProvider } from "react-helmet-async";
import { SkipNavigation } from "@/components/SkipNavigation";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Admin from "@/pages/Admin";
import AdminPages from "@/pages/AdminPages";
import AdminSettings from "@/pages/AdminSettings";
import Products from "@/pages/Products";
import FacebookAds from "@/pages/FacebookAds";
import PpcAds from "@/pages/PpcAds";
import VehicleAds from "@/pages/VehicleAds";
import DealerWebsites from "@/pages/DealerWebsites";
import IndependentDealerWebsites from "@/pages/IndependentDealerWebsites";
import DealerSeo from "@/pages/DealerSeo";
import AttributionAI from "@/pages/AttributionAI";
import BlogPost from "@/pages/BlogPost";
import NadaShow from "@/pages/NadaShow";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/products" component={Products} />
      <Route path="/facebook-ads" component={FacebookAds} />
      <Route path="/ppc-ads" component={PpcAds} />
      <Route path="/vehicle-ads" component={VehicleAds} />
      <Route path="/dealer-websites" component={DealerWebsites} />
      <Route path="/independent-dealer-websites" component={IndependentDealerWebsites} />
      <Route path="/dealer-seo" component={DealerSeo} />
      <Route path="/attribution-ai" component={AttributionAI} />
      <Route path="/blog/marketing-roi-evaluation" component={BlogPost} />
      <Route path="/nada-show" component={NadaShow} />
      <Route path="/admin" component={Admin} />
      <Route path="/admin/pages" component={AdminPages} />
      <Route path="/admin/settings" component={AdminSettings} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <TooltipProvider>
            <LeadFormProvider>
              <SkipNavigation />
              <Toaster />
              <Router />
            </LeadFormProvider>
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
