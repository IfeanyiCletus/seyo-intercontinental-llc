# seyo-intercontinental-llc

## Contact form email setup

1. Create a form endpoint with a provider such as Formspree.
2. Copy `.env.example` to `.env.local`.
3. Replace the placeholder value with your real endpoint:

```env
EXPO_PUBLIC_CONTACT_FORM_ENDPOINT=https://formspree.io/f/your-form-id
```

4. Restart Expo after adding the env variable.

The contact form sends `name`, `email`, `subject`, and `message` to that endpoint, and the provider forwards submissions to your email.
