export default function StructuredData() {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mohammad Ismail Emon",
    "jobTitle": "Digital Ops Manager",
    "description": "Digital Operations Manager specializing in Facebook Ads, Social Media Growth, and E-commerce Marketing",
    "image": "https://yourdomain.com/ismail-emon.jpg",
    "url": "https://yourdomain.com",
    "sameAs": [
      "https://github.com/yourusername",
      "https://linkedin.com/in/yourusername"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Oasis Outfit || Zii Zii Island"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "International Islamic University Chittagong"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
    />
  )
} 