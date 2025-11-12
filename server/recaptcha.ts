export async function verifyRecaptchaToken(token: string): Promise<boolean> {
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
      errors: data['error-codes'],
    });

    // For reCAPTCHA v3, check score (0.0 - 1.0, higher is better)
    // Typically, 0.5 is a good threshold
    if (data.success && data.score !== undefined) {
      return data.score >= 0.5;
    }

    return data.success;
  } catch (error) {
    console.error("[reCAPTCHA] Verification failed:", error);
    return false;
  }
}
