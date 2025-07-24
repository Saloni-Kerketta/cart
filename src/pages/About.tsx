
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Truck, Heart, Award } from "lucide-react";

const About = () => {
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  const features = [
    {
      icon: Shield,
      title: "Secure Shopping",
      description: "Your data and payments are protected with industry-leading security measures."
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Free shipping on orders over $50 with express delivery options available."
    },
    {
      icon: Heart,
      title: "Customer Care",
      description: "24/7 customer support to help you with any questions or concerns."
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee with easy returns and exchanges."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={handleSearch} cartCount={0} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-16 mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            About ShopVibe
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
            We're passionate about bringing you the best products at unbeatable prices. 
            Founded in 2024, ShopVibe has become your trusted destination for quality products 
            across electronics, fashion, home goods, and more.
          </p>
          <Button size="lg" className="animate-slide-up">
            Start Shopping
          </Button>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                At ShopVibe, we believe shopping should be enjoyable, convenient, and accessible to everyone. 
                Our mission is to curate the best products from trusted brands and emerging creators, 
                ensuring every purchase brings value to your life.
              </p>
              <p className="text-muted-foreground">
                We're committed to sustainability, fair trade practices, and supporting small businesses 
                while providing our customers with exceptional service and competitive prices.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <div className="text-muted-foreground mb-4">Happy Customers</div>
                <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                <div className="text-muted-foreground mb-4">Products Sold</div>
                <div className="text-4xl font-bold text-primary mb-2">99%</div>
                <div className="text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose ShopVibe?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Alex Johnson", role: "CEO & Founder", bio: "Passionate entrepreneur with 10+ years in e-commerce" },
              { name: "Sarah Chen", role: "Head of Product", bio: "Expert in user experience and product curation" },
              { name: "Mike Rodriguez", role: "CTO", bio: "Technology leader focused on innovation and scalability" }
            ].map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 bg-muted/30 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Shopping?</h2>
          <p className="text-muted-foreground mb-6">
            Join thousands of satisfied customers and discover amazing products today.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">Browse Products</Button>
            <Button variant="outline" size="lg">Contact Us</Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
