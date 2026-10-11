# BuildZoneCom

## Business policy pages

The homepage footer links to these public pages:

- `/return-policy/` — Return & Refund Policy
- `/privacy-policy/` — Privacy Policy
- `/terms-and-conditions/` — Terms & Conditions

Policy content and contact details are in `src/Components/PolicyPage.jsx`.
Review the text against your actual business practices before publishing,
especially cancellation deductions and the proposed 7-business-day period
for submitting approved refunds. The policies describe PayHere payments
when available; they do not add a payment integration.

Run `npm run build` to compile the website. Its postbuild step creates a
separate entry point for each policy with corrected asset paths so the URLs
also work when opened directly on static hosting. Deploy the complete
`build` directory, then use your live domain plus the paths above in the
PayHere activation form. Deployment and PayHere approval are separate steps.
