import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Phone, Star, Sparkles, Home as HomeIcon, Building2, Briefcase, Trash2, ChevronRight } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Modern Minimalist Professional
 * - Clean, geometric layouts with generous whitespace
 * - Teal primary (#1a5f7a) for trust and professionalism
 * - Mint green accents (#2ecc71) for call-to-action elements
 * - Poppins for headings, Inter for body text
 * - Smooth, purposeful animations
 */

export default function HomePage() {
  const [hoveredReview, setHoveredReview] = useState<number | null>(null);

  const reviews = [
    {
      author: "Urja Malhotra",
      rating: 5,
      text: "I highly recommend Nessa Cleaning Services for end of tenancy cleaning. Glydis provided exceptional service; she was incredibly quick, professional, and left the room spotlessly clean.",
      timeAgo: "6 months ago",
    },
    {
      author: "Po WG",
      rating: 5,
      text: "The very best professional cleaning service in Cambridge. We've been working with Vanessa for over a year. Herself and her team are nothing short of exceptional - dedicated, reliable and a eagle-eyed for detail.",
      timeAgo: "a year ago",
    },
    {
      author: "Sai Kamara",
      rating: 5,
      text: "My encounter with Nessa cleaning has been such an amazing one. They provide excellent cleaning service at an affordable price compared to the others company I have used in previously. They are reliable and treat your furniture and space with care.",
      timeAgo: "2 years ago",
    },
  ];

  const services = [
    {
      icon: HomeIcon,
      title: "Domestic Cleaning",
      description: "Regular weekly or bi-weekly cleaning for your home with attention to detail.",
    },
    {
      icon: Briefcase,
      title: "Airbnb Turnovers",
      description: "Professional turnover cleaning to keep your property guest-ready between bookings.",
    },
    {
      icon: Building2,
      title: "Commercial & Office",
      description: "Reliable office and commercial space cleaning tailored to your business needs.",
    },
    {
      icon: Sparkles,
      title: "Deep Cleaning",
      description: "Thorough deep cleaning services to refresh and rejuvenate your space.",
    },
    {
      icon: Trash2,
      title: "End of Tenancy",
      description: "Comprehensive end of tenancy cleaning to meet landlord and deposit requirements.",
    },
    {
      icon: Sparkles,
      title: "Oven & Bathroom",
      description: "Specialized deep cleaning for ovens, bathrooms, and other challenging areas.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-lg text-foreground">Nessa Cleaning</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#services" className="text-sm text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#reviews" className="text-sm text-foreground hover:text-primary transition-colors">
              Reviews
            </a>
            <a href="#contact" className="text-sm text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
                <Star className="w-4 h-4 text-accent fill-accent" />
                <span className="text-sm font-medium text-accent">Rated 4.7 out of 5 (27 reviews)</span>
              </div>

              <h1 className="font-display font-bold text-5xl lg:text-6xl text-foreground leading-tight">
                Professional Cleaning Services in Cambridge
              </h1>

              <p className="text-lg text-foreground/70 leading-relaxed">
                Nessa Cleaning Services delivers exceptional cleaning solutions for homes, offices, and Airbnb properties. Our fully trained and DBS-checked team is committed to creating clean, fresh spaces you can feel confident in.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#contact">
                  <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                    Get a Quote
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <a href="tel:07304064029">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Call Now
                  </Button>
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl" />
                <div className="relative p-8 space-y-4">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-16 h-16 text-primary/30" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-primary/10 rounded w-3/4" />
                    <div className="h-3 bg-primary/10 rounded w-1/2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              We offer a comprehensive range of professional cleaning services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const ServiceIcon = service.icon;
              return (
                <Card
                  key={idx}
                  className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50 cursor-pointer"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center transition-colors mb-4">
                      <ServiceIcon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="font-display text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/70">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="font-display font-bold text-4xl text-foreground">Why Choose Nessa Cleaning?</h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Fully Trained & DBS-Checked",
                    description: "Our team is professionally trained and vetted for your peace of mind.",
                  },
                  {
                    title: "High Standards & Reliability",
                    description: "We maintain consistent quality and are punctual with every appointment.",
                  },
                  {
                    title: "Attention to Detail",
                    description: "We treat your furniture and spaces with care, ensuring thorough cleaning.",
                  },
                  {
                    title: "Products Provided",
                    description: "All cleaning products are included in our service for your convenience.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                        <ChevronRight className="w-5 h-5 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-foreground/70">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl" />
              <div className="relative p-8 space-y-6">
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-4 bg-primary/10 rounded w-full" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-4">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-sm font-medium text-accent">Customer Reviews</span>
            </div>
            <h2 className="font-display font-bold text-4xl text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-lg text-foreground/70">Real feedback from satisfied customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <Card
                key={idx}
                className="transition-all duration-300 hover:shadow-lg cursor-pointer"
                onMouseEnter={() => setHoveredReview(idx)}
                onMouseLeave={() => setHoveredReview(null)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="font-display text-lg">{review.author}</CardTitle>
                    <div className="flex gap-1">
                      {Array(review.rating)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                        ))}
                    </div>
                  </div>
                  <CardDescription className="text-xs">{review.timeAgo}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-foreground/70 mb-4">See all reviews on Google Maps</p>
            <a
              href="https://www.google.com/maps/place/Nessa+Cleaning+Services/@52.2,0.1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              View on Google Maps
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-4xl text-foreground mb-4">Get in Touch</h2>
              <p className="text-lg text-foreground/70">
                Ready to experience professional cleaning? Contact us today for a quote or to book your service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="font-display">Phone</CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="tel:07304064029"
                    className="text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    07304 064029
                  </a>
                  <p className="text-sm text-foreground/70 mt-2">WhatsApp: 07943 529706</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="font-display">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="mailto:nessacleanings@gmail.com"
                    className="text-primary hover:text-primary/80 font-medium transition-colors break-all"
                  >
                    nessacleanings@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="font-display">Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 font-medium">Cambridge</p>
                  <p className="text-sm text-foreground/70 mt-2">Cambridgeshire-based serving the local area</p>
                </CardContent>
              </Card>
            </div>

            <Separator className="my-12" />

            <div className="bg-primary/5 rounded-lg p-8 text-center">
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">Ready to Get Started?</h3>
              <p className="text-foreground/70 mb-6">
                Call us today or send an email to discuss your cleaning needs. We're ready to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:07304064029">
                  <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                    Call 07304 064029
                  </Button>
                </a>
                <a href="mailto:nessacleanings@gmail.com">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Send Email
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-display font-bold text-foreground">Nessa Cleaning</span>
              </div>
              <p className="text-sm text-foreground/70">Professional cleaning services in Cambridge</p>
            </div>

            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>
                  <a href="#services" className="hover:text-primary transition-colors">
                    Domestic Cleaning
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary transition-colors">
                    Airbnb Turnovers
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary transition-colors">
                    Commercial Cleaning
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>
                  <a href="tel:07304064029" className="hover:text-primary transition-colors">
                    07304 064029
                  </a>
                </li>
                <li>
                  <a href="mailto:nessacleanings@gmail.com" className="hover:text-primary transition-colors">
                    nessacleanings@gmail.com
                  </a>
                </li>
                <li>Cambridge, UK</li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">Follow Us</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>
                  <a
                    href="https://www.instagram.com/nessacleaningservices/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/Nessacleaningservices/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-foreground/70">
            <p>&copy; 2026 Nessa Cleaning Services. All rights reserved.</p>
            <p>Professional cleaning services for Cambridge and surrounding areas</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
