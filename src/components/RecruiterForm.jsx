import React, { useState } from 'react';
import { ArrowUpRight, BriefcaseBusiness, Building2, Mail, ShieldCheck } from 'lucide-react';

const blockedEmailDomains = new Set([
  'gmail.com', 'googlemail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
  'live.com', 'icloud.com', 'me.com', 'proton.me', 'protonmail.com', 'aol.com',
]);

function hostname(value) {
  try { return new URL(value).hostname.replace(/^www\./, '').toLowerCase(); } catch { return ''; }
}

export default function RecruiterForm() {
  const [error, setError] = useState('');
  const submitted = new URLSearchParams(window.location.search).get('sent') === '1';

  function verifySender(event) {
    const form = event.currentTarget;
    const emailDomain = form.email.value.trim().split('@')[1]?.toLowerCase();
    const websiteDomain = hostname(form.company_website.value.trim());
    const domainsMatch = emailDomain && websiteDomain && (websiteDomain === emailDomain || websiteDomain.endsWith(`.${emailDomain}`) || emailDomain.endsWith(`.${websiteDomain}`));

    if (blockedEmailDomains.has(emailDomain) || !domainsMatch) {
      event.preventDefault();
      setError('Please use a company email address that matches the company website. Personal email providers are not accepted for recruiter submissions.');
      form.email.focus();
    }
  }

  return <section className="opportunity-layout" aria-label="Recruiter opportunity form">
    <aside className="recruiter-trust">
      <div className="icon-badge"><BriefcaseBusiness size={22} /></div>
      <h2>Verified professional context.</h2>
      <p>This channel is reserved for genuine hiring conversations.</p>
      <div className="trust-list">
        <div><Building2 size={18} /><span><strong>Company-domain check</strong>Personal email providers are blocked, and the work-email domain must match the company website.</span></div>
        <div><ShieldCheck size={18} /><span><strong>Bot protection</strong>CAPTCHA and a hidden bot trap help block automated submissions.</span></div>
        <div><Mail size={18} /><span><strong>Manual review</strong>Every opportunity is reviewed before a reply is sent.</span></div>
      </div>
      <p className="verification-note">No public web form can prove a person’s identity with certainty. A matching company domain is a meaningful screening step, but Pavit will still verify the company and recruiter profile before responding.</p>
    </aside>

    <form className="recruiter-form" action="https://formsubmit.co/pavitagrawal@gmail.com" method="POST" onSubmit={verifySender}>
      <input type="hidden" name="_subject" defaultValue="Recruiter opportunity from Pavit Agrawal's portfolio" />
      <input type="hidden" name="_template" defaultValue="table" />
      <input type="hidden" name="_captcha" defaultValue="true" />
      <input type="hidden" name="_next" defaultValue="https://pavit-portfolio.vercel.app/opportunities?sent=1" />
      <input className="honeypot" type="text" name="_honey" tabIndex="-1" autoComplete="off" aria-hidden="true" />
      {submitted && <p className="form-success" role="status">Thank you — your opportunity has been sent for review.</p>}
      {error && <p className="form-error" role="alert">{error}</p>}

      <div className="form-grid">
        <label className="form-field">Your name<input name="recruiter_name" type="text" autoComplete="name" required /></label>
        <label className="form-field">Company email<input name="email" type="email" autoComplete="email" placeholder="name@company.com" required /></label>
        <label className="form-field">Company<input name="company" type="text" autoComplete="organization" required /></label>
        <label className="form-field">Company website<input name="company_website" type="url" placeholder="https://company.com" required /></label>
        <label className="form-field">LinkedIn profile<input name="linkedin_profile" type="url" placeholder="https://linkedin.com/in/..." required /></label>
        <label className="form-field">Role title<input name="role_title" type="text" placeholder="e.g. Data Analyst" required /></label>
        <label className="form-field">Opportunity type<select name="opportunity_type" defaultValue="" required><option value="" disabled>Select one</option><option>Full-time</option><option>Internship</option><option>Contract</option><option>Graduate programme</option><option>Freelance</option></select></label>
        <label className="form-field">Best-fit area<select name="best_fit_area" defaultValue="" required><option value="" disabled>Select one</option><option>Data analytics / BI</option><option>Software engineering</option><option>Backend engineering</option><option>Frontend engineering</option><option>Machine learning / AI</option><option>Open to multiple areas</option></select></label>
        <label className="form-field">Location / work mode<input name="location_work_mode" type="text" placeholder="Delhi NCR / Remote / Hybrid" required /></label>
        <label className="form-field">Compensation range <span>(optional)</span><input name="compensation" type="text" placeholder="Range, stipend, or package" /></label>
      </div>
      <label className="form-field">Opportunity details<textarea name="opportunity_details" rows="6" placeholder="Please include responsibilities, team context, timeline, and the application process." required /></label>
      <label className="consent-field"><input name="authorized_contact" type="checkbox" required />I confirm that I am authorized to contact Pavit about this opportunity and that the details above are accurate.</label>
      <button className="primary-btn form-submit" type="submit">Send opportunity <ArrowUpRight size={17} /></button>
    </form>
  </section>;
}
