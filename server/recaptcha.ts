// Minimum score threshold for reCAPTCHA v3
// 0.0 = very likely bot, 1.0 = very likely human
// 0.5 provides good spam protection while allowing most legitimate users
const RECAPTCHA_SCORE_THRESHOLD = 0.5;

// Valid actions that we expect from the frontend
const VALID_ACTIONS = ['lead_form_submit', 'demo_booking_submit'];

export async function verifyRecaptchaToken(token: string, expectedAction?: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  
  if (!secretKey) {
    console.error("[reCAPTCHA] RECAPTCHA_SECRET_KEY is not configured");
    throw new Error("reCAPTCHA verification is not configured");
  }

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json() as {
      success: boolean;
      score?: number;
      action?: string;
      challenge_ts?: string;
      hostname?: string;
      'error-codes'?: string[];
    };

    console.log("[reCAPTCHA] Verification response:", {
      success: data.success,
      score: data.score,
      action: data.action,
      hostname: data.hostname,
      errors: data['error-codes'],
    });

    // Check if verification was successful
    if (!data.success) {
      console.log("[reCAPTCHA] Verification failed - success=false");
      return false;
    }

    // Verify the action matches what we expect (prevents token reuse attacks)
    if (expectedAction && data.action !== expectedAction) {
      console.log(`[reCAPTCHA] Action mismatch: expected ${expectedAction}, got ${data.action}`);
      return false;
    }

    // Check if action is in our valid list
    if (data.action && !VALID_ACTIONS.includes(data.action)) {
      console.log(`[reCAPTCHA] Invalid action: ${data.action}`);
      return false;
    }

    // For reCAPTCHA v3, check score
    if (data.score !== undefined) {
      const passed = data.score >= RECAPTCHA_SCORE_THRESHOLD;
      console.log(`[reCAPTCHA] Score check: ${data.score} >= ${RECAPTCHA_SCORE_THRESHOLD} = ${passed}`);
      return passed;
    }

    return true;
  } catch (error) {
    console.error("[reCAPTCHA] Verification failed:", error);
    return false;
  }
}
