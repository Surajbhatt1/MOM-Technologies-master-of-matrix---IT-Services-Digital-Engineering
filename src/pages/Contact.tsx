// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Clock,
//   MessageCircle,
//   CheckCircle2,
//   AlertCircle,
//   ShieldCheck,
//   ArrowRight,
//   ChevronDown,
// } from 'lucide-react';
// import { motion, AnimatePresence } from 'motion/react';
// import { Section } from '../components/ui/Section';
// import { Button } from '../components/ui/Button';
// import { Badge } from '../components/ui/Badge';
// import { SEOHead } from '../components/seo/SEOHead';
// import { submitContactInquiry, ContactInquiryPayload } from '../services/contactService';

// export const serviceOptions = [
//   'Web Development',
//   'Mobile App Development',
//   'Digital Marketing',
//   'E-commerce',
//   'Custom Business Solutions',
//   'SMS & Email Marketing',
//   'Other',
// ];

// interface FormErrors {
//   name?: string;
//   email?: string;
//   phone?: string;
//   service?: string;
//   projectDetails?: string;
//   general?: string;
// }

// export const Contact: React.FC = () => {
//   const location = useLocation();

//   // Form fields
//   const [formData, setFormData] = useState<ContactInquiryPayload>({
//     name: '',
//     email: '',
//     phone: '',
//     company: '',
//     service: 'Web Development',
//     projectDetails: '',
//   });

//   // Interaction & submission states
//   const [errors, setErrors] = useState<FormErrors>({});
//   const [touched, setTouched] = useState<Record<string, boolean>>({});
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [isSuccess, setIsSuccess] = useState<boolean>(false);
//   const [successMessage, setSuccessMessage] = useState<string>('');
//   const [submittedInquiryId, setSubmittedInquiryId] = useState<string>('');
//   const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

//   // Pre-fill service from URL query params (e.g. ?service=Web+Development)
//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const serviceParam = params.get('service');
//     if (serviceParam) {
//       const match = serviceOptions.find(
//         (opt) =>
//           opt.toLowerCase() === serviceParam.toLowerCase() ||
//           serviceParam.toLowerCase().includes(opt.toLowerCase()) ||
//           opt.toLowerCase().includes(serviceParam.toLowerCase())
//       );
//       if (match) {
//         setFormData((prev) => ({
//           ...prev,
//           service: match,
//           projectDetails:
//             prev.projectDetails ||
//             `I would like to discuss a ${match} project with MOM Technologies.`,
//         }));
//       }
//     }
//   }, [location.search]);

//   // Validation logic
//   const validateField = (field: keyof ContactInquiryPayload, value: string): string | undefined => {
//     switch (field) {
//       case 'name':
//         if (!value.trim()) return 'Name is required.';
//         if (value.trim().length < 2) return 'Please enter your full name.';
//         return undefined;
//       case 'email':
//         if (!value.trim()) return 'Email address is required.';
//         if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
//           return 'Please enter a valid email address.';
//         }
//         return undefined;
//       case 'phone':
//         if (value.trim() && !/^[\d\s+\-().]{7,25}$/.test(value.trim())) {
//           return 'Please enter a valid phone number format.';
//         }
//         return undefined;
//       case 'service':
//         if (!value) return 'Please select a service.';
//         return undefined;
//       case 'projectDetails':
//         if (!value.trim()) return 'Please describe what you are trying to build, improve, or automate.';
//         if (value.trim().length < 10) return 'Please provide at least a brief summary (minimum 10 characters).';
//         return undefined;
//       default:
//         return undefined;
//     }
//   };

//   const validateAll = (): boolean => {
//     const newErrors: FormErrors = {};
//     const nameErr = validateField('name', formData.name);
//     const emailErr = validateField('email', formData.email);
//     const phoneErr = formData.phone ? validateField('phone', formData.phone) : undefined;
//     const serviceErr = validateField('service', formData.service);
//     const detailsErr = validateField('projectDetails', formData.projectDetails);

//     if (nameErr) newErrors.name = nameErr;
//     if (emailErr) newErrors.email = emailErr;
//     if (phoneErr) newErrors.phone = phoneErr;
//     if (serviceErr) newErrors.service = serviceErr;
//     if (detailsErr) newErrors.projectDetails = detailsErr;

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleBlur = (field: keyof ContactInquiryPayload) => {
//     setTouched((prev) => ({ ...prev, [field]: true }));
//     const error = validateField(field, formData[field] || '');
//     setErrors((prev) => ({ ...prev, [field]: error }));
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));

//     if (touched[name]) {
//       const error = validateField(name as keyof ContactInquiryPayload, value);
//       setErrors((prev) => ({ ...prev, [name]: error }));
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Mark all as touched
//     setTouched({
//       name: true,
//       email: true,
//       phone: true,
//       company: true,
//       service: true,
//       projectDetails: true,
//     });

//     if (!validateAll()) {
//       setErrors((prev) => ({
//         ...prev,
//         general: 'Please review the highlighted fields before submitting.',
//       }));
//       return;
//     }

//     setIsLoading(true);
//     setErrors({});

//     try {
//       const response = await submitContactInquiry(formData);
//       if (response.success) {
//         setIsSuccess(true);
//         setSuccessMessage(response.message);
//         setSubmittedInquiryId(response.inquiryId || '');
//       }
//     } catch (err: unknown) {
//       const errorMsg = err instanceof Error ? err.message : 'An error occurred while submitting your message.';
//       setErrors({ general: errorMsg });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleReset = () => {
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       company: '',
//       service: 'Web Development',
//       projectDetails: '',
//     });
//     setErrors({});
//     setTouched({});
//     setIsSuccess(false);
//   };

//   const faqs = [
//     {
//       q: 'What type of projects do you work on?',
//       a: 'We build responsive websites, web applications, cross-platform mobile apps, e-commerce storefronts, custom business operations software, dashboards, and automated email/SMS outreach pipelines.',
//     },
//     {
//       q: 'Do you work with startups?',
//       a: 'Yes. We partner with early-stage founders to scope, architect, and build fast, reliable MVPs and production systems designed to scale cleanly with user growth.',
//     },
//     {
//       q: 'Do you work with existing businesses?',
//       a: 'Absolutely. We help established companies modernize legacy web portals, automate manual operational workflows, redesign storefronts, and build custom internal tooling.',
//     },
//     {
//       q: 'Can you maintain a product after launch?',
//       a: 'Yes. We offer structured post-launch technical retainers covering performance optimization, security monitoring, infrastructure scaling, and continuous feature development.',
//     },
//     {
//       q: 'Do you provide custom business software?',
//       a: 'Yes. We engineer role-based portals, operations management tools, inventory synchronizers, and executive analytics dashboards tailored directly to your business processes.',
//     },
//   ];

//   return (
//     <>
//       <SEOHead
//         title="Contact Us — Let's Build Something Useful"
//         description="Tell us what you're trying to build, improve, automate, or grow. Contact MOM Technologies for technical consultations, web engineering, mobile development, and custom business solutions."
//       />

//       {/* Page Header */}
//       <section className="pt-12 pb-14 sm:pt-16 sm:pb-18 border-b border-slate-200 tech-grid-pattern bg-white">
//         <div className="max-w-4xl mx-auto text-center px-4 space-y-4">
//           <Badge variant="blue">GET IN TOUCH</Badge>
//           <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
//             Let&apos;s build something useful.
//           </h1>
//           <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
//             Tell us what you&apos;re trying to build, improve, automate, or grow.
//           </p>
//         </div>
//       </section>

//       {/* Main Form & Contact Information Section */}
//       <Section paddingY="lg" background="default">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
//           {/* Left Column: Contact Form (7 cols) */}
//           <div className="lg:col-span-7">
//             <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-10 shadow-2xs relative overflow-hidden">
//               {/* Top ambient highlight */}
//               <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-600/50 to-transparent" />

//               <div className="mb-8">
//                 <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
//                   Project Inquiry
//                 </h2>
//                 <p className="text-sm text-slate-500 mt-1 font-normal">
//                   Fill out the details below and we will get back to you with actionable technical recommendations.
//                 </p>
//               </div>

//               {/* General Error Banner */}
//               {errors.general && (
//                 <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-3 text-rose-800 text-sm">
//                   <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
//                   <div>
//                     <span className="font-semibold block">Submission Notice</span>
//                     <span>{errors.general}</span>
//                   </div>
//                 </div>
//               )}

//               {/* SUCCESS STATE */}
//               {isSuccess ? (
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   className="py-8 text-center space-y-5"
//                 >
//                   <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mx-auto shadow-2xs">
//                     <CheckCircle2 className="w-8 h-8" />
//                   </div>

//                   <div className="space-y-2">
//                     <h3 className="text-2xl font-bold text-slate-900">Message Received</h3>
//                     <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
//                       {successMessage}
//                     </p>
//                   </div>

//                   {submittedInquiryId && (
//                     <div className="inline-block px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-blue-700 font-bold">
//                       Reference ID: {submittedInquiryId}
//                     </div>
//                   )}

//                   <div className="pt-4">
//                     <Button
//                       type="button"
//                       variant="secondary"
//                       size="md"
//                       onClick={handleReset}
//                     >
//                       Send Another Message
//                     </Button>
//                   </div>
//                 </motion.div>
//               ) : (
//                 /* CONTACT FORM */
//                 <form onSubmit={handleSubmit} noValidate className="space-y-6">
//                   {/* Name & Email */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                     <div className="space-y-1.5">
//                       <label htmlFor="contact-name" className="block text-xs font-mono font-bold text-slate-700">
//                         Name <span className="text-blue-600">*</span>
//                       </label>
//                       <input
//                         id="contact-name"
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         onBlur={() => handleBlur('name')}
//                         placeholder="Your full name"
//                         disabled={isLoading}
//                         aria-invalid={!!errors.name}
//                         aria-describedby={errors.name ? 'name-error' : undefined}
//                         className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors ${
//                           errors.name
//                             ? 'border-rose-400 focus:border-rose-600 focus:ring-1 focus:ring-rose-600'
//                             : 'border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
//                         }`}
//                       />
//                       {errors.name && (
//                         <p id="name-error" className="text-xs text-rose-600 mt-1 font-medium">
//                           {errors.name}
//                         </p>
//                       )}
//                     </div>

//                     <div className="space-y-1.5">
//                       <label htmlFor="contact-email" className="block text-xs font-mono font-bold text-slate-700">
//                         Email <span className="text-blue-600">*</span>
//                       </label>
//                       <input
//                         id="contact-email"
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         onBlur={() => handleBlur('email')}
//                         placeholder="you@company.com"
//                         disabled={isLoading}
//                         aria-invalid={!!errors.email}
//                         aria-describedby={errors.email ? 'email-error' : undefined}
//                         className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors ${
//                           errors.email
//                             ? 'border-rose-400 focus:border-rose-600 focus:ring-1 focus:ring-rose-600'
//                             : 'border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
//                         }`}
//                       />
//                       {errors.email && (
//                         <p id="email-error" className="text-xs text-rose-600 mt-1 font-medium">
//                           {errors.email}
//                         </p>
//                       )}
//                     </div>
//                   </div>

//                   {/* Phone & Company */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                     <div className="space-y-1.5">
//                       <label htmlFor="contact-phone" className="block text-xs font-mono font-bold text-slate-700">
//                         Phone <span className="text-slate-400 font-normal">(Optional)</span>
//                       </label>
//                       <input
//                         id="contact-phone"
//                         type="tel"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         onBlur={() => handleBlur('phone')}
//                         placeholder="+1 (555) 000-0000"
//                         disabled={isLoading}
//                         aria-invalid={!!errors.phone}
//                         aria-describedby={errors.phone ? 'phone-error' : undefined}
//                         className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors ${
//                           errors.phone
//                             ? 'border-rose-400 focus:border-rose-600 focus:ring-1 focus:ring-rose-600'
//                             : 'border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
//                         }`}
//                       />
//                       {errors.phone && (
//                         <p id="phone-error" className="text-xs text-rose-600 mt-1 font-medium">
//                           {errors.phone}
//                         </p>
//                       )}
//                     </div>

//                     <div className="space-y-1.5">
//                       <label htmlFor="contact-company" className="block text-xs font-mono font-bold text-slate-700">
//                         Company <span className="text-slate-400 font-normal">(Optional)</span>
//                       </label>
//                       <input
//                         id="contact-company"
//                         type="text"
//                         name="company"
//                         value={formData.company}
//                         onChange={handleChange}
//                         placeholder="Company or Organization"
//                         disabled={isLoading}
//                         className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
//                       />
//                     </div>
//                   </div>

//                   {/* Service Dropdown */}
//                   <div className="space-y-1.5">
//                     <label htmlFor="contact-service" className="block text-xs font-mono font-bold text-slate-700">
//                       Service <span className="text-blue-600">*</span>
//                     </label>
//                     <div className="relative">
//                       <select
//                         id="contact-service"
//                         name="service"
//                         value={formData.service}
//                         onChange={handleChange}
//                         disabled={isLoading}
//                         className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors appearance-none pr-10 cursor-pointer"
//                       >
//                         {serviceOptions.map((opt) => (
//                           <option key={opt} value={opt} className="bg-white text-slate-900">
//                             {opt}
//                           </option>
//                         ))}
//                       </select>
//                       <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
//                     </div>
//                   </div>

//                   {/* Project Details */}
//                   <div className="space-y-1.5">
//                     <label htmlFor="contact-details" className="block text-xs font-mono font-bold text-slate-700">
//                       Project Details <span className="text-blue-600">*</span>
//                     </label>
//                     <textarea
//                       id="contact-details"
//                       name="projectDetails"
//                       rows={5}
//                       value={formData.projectDetails}
//                       onChange={handleChange}
//                       onBlur={() => handleBlur('projectDetails')}
//                       placeholder="Tell us what you're trying to build, improve, automate, or grow..."
//                       disabled={isLoading}
//                       aria-invalid={!!errors.projectDetails}
//                       aria-describedby={errors.projectDetails ? 'details-error' : undefined}
//                       className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors resize-none ${
//                         errors.projectDetails
//                           ? 'border-rose-400 focus:border-rose-600 focus:ring-1 focus:ring-rose-600'
//                           : 'border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
//                       }`}
//                     />
//                     {errors.projectDetails && (
//                       <p id="details-error" className="text-xs text-rose-600 mt-1 font-medium">
//                         {errors.projectDetails}
//                       </p>
//                     )}
//                   </div>

//                   {/* CTA Button */}
//                   <div className="pt-2">
//                     <button
//                       id="contact-submit-btn"
//                       type="submit"
//                       disabled={isLoading}
//                       className="w-full py-3.5 px-6 rounded-xl font-mono text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-xs transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                       {isLoading ? (
//                         <>
//                           <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                           <span>Sending Request...</span>
//                         </>
//                       ) : (
//                         <>
//                           <span>Start a Conversation</span>
//                           <ArrowRight className="w-4 h-4" />
//                         </>
//                       )}
//                     </button>
//                   </div>
//                 </form>
//               )}
//             </div>
//           </div>

//           {/* Right Column: Contact Information Areas & Trust (5 cols) */}
//           <div className="lg:col-span-5 space-y-8">
//             {/* Contact Information Cards */}
//             <div className="space-y-4">
//               <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
//                 Direct Contact Channels
//               </h3>

//               <div className="space-y-3">
//                 {/* Email */}
//                 <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-4 shadow-2xs">
//                   <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 flex-shrink-0">
//                     <Mail className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <div className="text-xs font-mono text-slate-500">Email</div>
//                     <a
//                       href="mailto:momtech.india@gmail.com"
//                       className="text-sm font-bold text-slate-900 hover:text-blue-700 transition-colors"
//                     >
//                       momtech.india@gmail.com
//                     </a>
//                     <div className="text-[11px] text-slate-500 mt-0.5">
//                       Direct engineering &amp; project inquiries
//                     </div>
//                   </div>
//                 </div>

//                 {/* Phone */}
//                 <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-4 shadow-2xs">
//                   <div className="w-10 h-10 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 flex-shrink-0">
//                     <Phone className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <div className="text-xs font-mono text-slate-500">Phone</div>
//                     <a
//                       href="tel:+91 8087262006"
//                       className="text-sm font-bold text-slate-900 hover:text-purple-700 transition-colors font-mono"
//                     >
//                       +91 8087262006
//                     </a>
//                     <div className="text-[11px] text-slate-500 mt-0.5">
//                       Mon–Fri consultation desk
//                     </div>
//                   </div>
//                 </div>

                
// {/* WhatsApp */}
// <a
//   href="https://wa.me/918087262006?text=Hello%20MOM%20Tech%2C%20I%20would%20like%20to%20discuss%20a%20project."
//   target="_blank"
//   rel="noopener noreferrer"
//   aria-label="Contact MOM Tech on WhatsApp"
//   className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-4 shadow-2xs hover:border-green-500 hover:bg-green-50/50 transition-all duration-200 group"
// >
//   <div className="w-10 h-10 rounded-lg bg-green-50 border border-green-200 flex items-center justify-center text-green-600 flex-shrink-0 group-hover:bg-green-100">
//     <MessageCircle className="w-5 h-5" />
//   </div>

//   <div>
//     <div className="text-xs font-mono text-slate-500">
//       WhatsApp
//     </div>
//     <div className="text-sm font-bold text-slate-900 group-hover:text-green-700">
//       +91 8087262006
//     </div>
//     <div className="text-[11px] text-slate-500 mt-0.5">
//       Click to chat with MOM Tech
//     </div>
//   </div>
// </a>


//                 {/* Location */}
//                 <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-4 shadow-2xs">
//                   <div className="w-10 h-10 rounded-lg bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-800 flex-shrink-0">
//                     <MapPin className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <div className="text-xs font-mono text-slate-500">Location</div>
//                     <div className="text-sm font-bold text-slate-900">
//                       Global Remote &amp; Technology Hubs
//                     </div>
//                     <div className="text-[11px] text-slate-500 mt-0.5">
//                       Distributed engineering &amp; strategy teams
//                     </div>
//                   </div>
//                 </div>

//                 {/* Business Hours */}
//                 <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-4 shadow-2xs">
//                   <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 flex-shrink-0">
//                     <Clock className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <div className="text-xs font-mono text-slate-500">Business Hours</div>
//                     <div className="text-sm font-bold text-slate-900">
//                       Monday – Friday: 9:00 AM – 6:00 PM (GMT)
//                     </div>
//                     <div className="text-[11px] text-slate-500 mt-0.5">
//                       Pune &amp; 24h response SLA
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Privacy & Confidentiality Guarantee Box */}
//             <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
//               <div className="flex items-center gap-2 text-blue-800 text-xs font-mono font-bold">
//                 <ShieldCheck className="w-4 h-4" />
//                 <span>NDA &amp; Confidentiality Guarantee</span>
//               </div>
//               <p className="text-xs text-slate-600 leading-relaxed font-normal">
//                 All inquiries and project details shared with MOM Technologies are held in strict confidence. We are glad to execute mutual NDAs prior to in-depth technical scoping.
//               </p>
//             </div>
//           </div>
//         </div>
//       </Section>

//       {/* Frequently Asked Questions Section */}
//       <Section
//         id="faq"
//         badge="FREQUENTLY ASKED QUESTIONS"
//         badgeVariant="purple"
//         title="Common questions about partnering with MOM."
//         description="Clear, concise answers about how we collaborate, scope, and deliver digital systems."
//         background="surface"
//       >
//         <div className="max-w-3xl mx-auto space-y-3">
//           {faqs.map((faq, idx) => {
//             const isOpen = openFaqIndex === idx;

//             return (
//               <div
//                 key={faq.q}
//                 className="rounded-xl bg-white border border-slate-200 overflow-hidden transition-colors shadow-2xs"
//               >
//                 <button
//                   type="button"
//                   onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
//                   className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
//                   aria-expanded={isOpen}
//                 >
//                   <span className="font-bold text-slate-900 text-base">
//                     {faq.q}
//                   </span>
//                   <ChevronDown
//                     className={`w-5 h-5 text-blue-700 flex-shrink-0 transition-transform duration-200 ${
//                       isOpen ? 'rotate-180' : ''
//                     }`}
//                   />
//                 </button>

//                 <AnimatePresence initial={false}>
//                   {isOpen && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: 'auto', opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 font-normal">
//                         {faq.a}
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             );
//           })}
//         </div>
//       </Section>
//     </>
//   );
// };




import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  ArrowUpRight,
} from 'lucide-react';

import { Section } from '../components/ui/Section';
import { Badge } from '../components/ui/Badge';
import { SEOHead } from '../components/seo/SEOHead';

export const Contact: React.FC = () => {
  const contactDetails = [
    {
      title: 'Email',
      value: 'momtech.india@gmail.com',
      description: 'Direct engineering & project inquiries',
      icon: Mail,
      color: 'blue',
      link: 'mailto:momtech.india@gmail.com',
      action: 'Send Email',
    },
    {
      title: 'Phone',
      value: '+91 8087262006',
      description: 'Contact our team directly',
      icon: Phone,
      color: 'purple',
      link: 'tel:+918087262006',
      action: 'Call Now',
    },
    {
      title: 'WhatsApp',
      value: '+91 8087262006',
      description: 'Chat with MOM Tech',
      icon: MessageCircle,
      color: 'green',
      link: 'https://wa.me/918087262006?text=Hello%20MOM%20Tech%2C%20I%20would%20like%20to%20discuss%20a%20project.',
      action: 'Start Chat',
    },
  ];

  const colorStyles: Record<string, string> = {
    blue: 'bg-blue-50 text-blue-700 border-blue-200 group-hover:bg-blue-100',
    purple: 'bg-purple-50 text-purple-700 border-purple-200 group-hover:bg-purple-100',
    green: 'bg-green-50 text-green-600 border-green-200 group-hover:bg-green-100',
  };

  return (
    <>
      <SEOHead
        title="Contact Us | MOM Tech - Master of Matrix"
        description="Contact MOM Tech for website development, mobile applications, AI solutions, SEO, digital marketing and custom business solutions."
      />

      {/* Page Header */}
      <section className="pt-12 pb-14 sm:pt-16 sm:pb-18 border-b border-slate-200 tech-grid-pattern bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 space-y-4">

          <Badge variant="blue">
            GET IN TOUCH
          </Badge>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Let's Connect With MOM Tech.
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or looking for a technology partner?
            Get in touch with our team and let's build something amazing together.
          </p>

        </div>
      </section>

      {/* Contact Information */}
      <Section paddingY="lg" background="default">

        <div className="max-w-5xl mx-auto">

          {/* Section Heading */}
          <div className="text-center mb-10">

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Contact Information
            </h2>

            <p className="text-sm sm:text-base text-slate-500 mt-3 max-w-2xl mx-auto">
              Choose your preferred way to connect with MOM Tech.
              Our team is here to help with your business and technology needs.
            </p>

          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {contactDetails.map((contact) => {
              const Icon = contact.icon;

              return (
                <a
                  key={contact.title}
                  href={contact.link}
                  target={
                    contact.title === 'WhatsApp' ? '_blank' : undefined
                  }
                  rel={
                    contact.title === 'WhatsApp'
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="group p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex items-start gap-5"
                >

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 transition-colors ${colorStyles[contact.color]}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">

                    <p className="text-xs font-mono text-slate-500">
                      {contact.title}
                    </p>

                    <h3 className="text-base font-bold text-slate-900 mt-1 break-words">
                      {contact.value}
                    </h3>

                    <p className="text-xs text-slate-500 mt-2">
                      {contact.description}
                    </p>

                    <div className="flex items-center gap-1 mt-4 text-sm font-semibold text-blue-700 group-hover:text-blue-800">
                      {contact.action}
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>

                  </div>

                </a>
              );
            })}

            {/* Location */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-start gap-5">

              <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>

              <div>
                <p className="text-xs font-mono text-slate-500">
                  Location
                </p>

                <h3 className="text-base font-bold text-slate-900 mt-1">
                  Global Remote & Technology Hubs
                </h3>

                <p className="text-xs text-slate-500 mt-2">
                  Distributed engineering & strategy teams
                </p>
              </div>

            </div>

            {/* Business Hours */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-start gap-5">

              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>

              <div>
                <p className="text-xs font-mono text-slate-500">
                  Business Hours
                </p>

                <h3 className="text-base font-bold text-slate-900 mt-1">
                  Monday – Friday
                </h3>

                <p className="text-sm font-semibold text-slate-700 mt-1">
                  9:00 AM – 6:00 PM (GMT)
                </p>

                <p className="text-xs text-slate-500 mt-2">
                  Pune & 24h response SLA
                </p>
              </div>

            </div>

          </div>

          {/* Bottom CTA */}
          <div className="mt-10 rounded-2xl bg-slate-50 border border-slate-200 p-8 sm:p-10 text-center">

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Have a Project in Mind?
            </h3>

            <p className="text-sm text-slate-600 mt-3 max-w-xl mx-auto">
              Let's discuss your ideas, understand your requirements,
              and find the right technology solutions for your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">

              <a
                href="https://wa.me/918087262006"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800 transition-colors w-full sm:w-auto"
              >
                <MessageCircle className="w-4 h-4" />
                Let's Talk
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="mailto:momtech.india@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 text-sm font-semibold hover:border-blue-500 transition-colors w-full sm:w-auto"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>

            </div>

          </div>

        </div>

      </Section>
    </>
  );
};

export default Contact;
