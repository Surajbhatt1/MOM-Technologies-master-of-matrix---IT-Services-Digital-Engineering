export interface ContactInquiryPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  projectDetails: string;
}

export interface ContactInquiryResult {
  success: boolean;
  message: string;
  inquiryId?: string;
}

/**
 * Clean integration-ready client dispatch helper.
 * Currently simulates network latency and returns a validated payload,
 * structured to cleanly target a backend server /api/contact endpoint
 * once external email credentials or server endpoints are wired up.
 */
export async function submitContactInquiry(
  payload: ContactInquiryPayload
): Promise<ContactInquiryResult> {
  // If in future a real endpoint is available:
  // const res = await fetch('/api/contact', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(payload),
  // });
  // return res.json();

  // Simulated latency for loading state validation
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Client validation safeguard
  if (!payload.name || !payload.email || !payload.projectDetails || !payload.service) {
    throw new Error('Please provide all required fields before submitting.');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(payload.email)) {
    throw new Error('Please enter a valid email address.');
  }

  return {
    success: true,
    message: 'Thank you. Your message has been received. Our team will review your project details and follow up within 24 hours.',
    inquiryId: `INQ-${Date.now().toString().slice(-6)}`,
  };
}
