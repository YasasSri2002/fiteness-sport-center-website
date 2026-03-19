# Fiteness Sport Center – Gym Promotional Website

## Introduction

Fiteness Sport Center is a responsive promotional website for a local fitness brand launching a new gym. The website is designed to attract new members by showcasing the gym’s services, membership plans, trainers, and allowing visitors to submit inquiries through a contact form powered by EmailJS.

The website is built using **HTML, CSS, Tailwind CSS (via CDN), and JavaScript**, providing a fast, interactive, and mobile-friendly experience without requiring a backend.

## Key Features

- Responsive design for mobile, tablet, and desktop.  
- Showcase gym services with descriptions and images.  
- Membership plans with pricing and benefits.  
- Trainer profiles highlighting experience and specialties.  
- Gallery / Facilities section to showcase the gym.  
- Inquiry / Contact form using EmailJS to submit messages.  
- Client-side form validation for accurate submissions.  
- Interactive UI elements like modals, sliders, and alerts.  
- SEO-friendly structure for better search engine visibility.  

## Tech Stack

- HTML  
- CSS / Tailwind CSS (via CDN)  
- JavaScript  
- EmailJS (for form submission)  

## Website Sections

- **Home / Landing Page** – Eye-catching hero section with gym branding.  
- **About** – Information about the gym’s mission, values, and facilities.  
- **Services** – Detailed description of classes, personal training, and gym facilities.  
- **Contact** – Inquiry form for users to submit questions or membership requests.  
- **Footer** – Contact info, social media links, and location map.  

## Installation & Setup

### Prerequisites

- Modern web browser (Chrome, Firefox, Edge, etc.)  
- Internet connection (for Tailwind CDN and EmailJS)  

### Setup Steps

1. Clone the repository:

```bash
git clone https://github.com/YasasSri2002/fiteness-sport-center.git
cd fiteness-sport-center
```
2. Set up email config
    Sign up at EmailJS and create a new service and email template.
    Add your EmailJS service ID, template ID, and public key in your JavaScript form script, or better yet, use a separate config file:
    ```javascript
        
        export const EMAILJS_CONFIG = {
            SERVICE_ID: 'YOUR_SERVICE_ID',
            TEMPLATE_ID: 'YOUR_TEMPLATE_ID',
            PUBLIC_KEY: 'YOUR_PUBLIC_KEY'
        };
    ```