import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    relation: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Tour Request Received",
      description:
        "Our team will contact you within 24 hours to schedule your visit.",
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      relation: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="font-sans text-sm font-medium text-primary uppercase tracking-wider">
                Get in Touch
              </span>
              <h2 className="heading-lg mt-4 mb-6">
                Schedule a <span className="text-primary">Personal Tour</span>
              </h2>
              <p className="body-lg">
                We invite you and your family to experience Bearspaw firsthand.
                Our care coordinators will guide you through our community and
                answer all your questions.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-sans font-semibold text-foreground">
                    Phone
                  </p>
                  <a
                    href="tel:+14035897055"
                    className="font-sans text-muted-foreground hover:text-primary transition-colors"
                  >
                    (403) 555-0123
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-sans font-semibold text-foreground">
                    Email
                  </p>
                  <a
                    href="mailto:info@bearspawseniors.ca"
                    className="font-sans text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@bearspawseniors.ca
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-sans font-semibold text-foreground">
                    Location
                  </p>
                  <p className="font-sans text-muted-foreground">
                    123 Bearspaw Road NW
                    <br />
                    Calgary, AB T3L 2P5
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-[20px] overflow-hidden shadow-card mt-2">
              <iframe
                title="Bearspaw Seniors Living Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.5!2d-114.2!3d51.12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDA3JzEyLjAiTiAxMTTCsDEyJzAwLjAiVw!5e0!3m2!1sen!2sca!4v1700000000000"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-background rounded-[20px] p-8 md:p-10 shadow-card"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="block font-sans text-sm font-medium text-foreground mb-2"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="John"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label
                    htmlFor="lastName"
                    className="block font-sans text-sm font-medium text-foreground mb-2"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Smith"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-sans text-sm font-medium text-foreground mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block font-sans text-sm font-medium text-foreground mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="(403) 555-0123"
                  />
                </div>

                {/* Relation */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="relation"
                    className="block font-sans text-sm font-medium text-foreground mb-2"
                  >
                    Your Relationship
                  </label>
                  <select
                    id="relation"
                    name="relation"
                    value={formData.relation}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="">Select your relationship</option>
                    <option value="self">I'm looking for myself</option>
                    <option value="parent">Parent or Grandparent</option>
                    <option value="spouse">Spouse or Partner</option>
                    <option value="other">Other Family Member</option>
                    <option value="professional">
                      Healthcare Professional
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block font-sans text-sm font-medium text-foreground mb-2"
                  >
                    How Can We Help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="input-field resize-none"
                    placeholder="Tell us about your needs or any questions you have..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full mt-8 inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Request a Tour
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="font-sans text-sm text-muted-foreground text-center mt-4">
                We'll respond within 24 hours to schedule your visit.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
