// Certificate data. To add a certificate: drop an image (.webp/.png/.jpg) and, optionally,
// the PDF into /public/certificates, then add an entry below. All fields come from the
// certificate documents themselves; omit anything the document does not state.

export const certificateCategories = ["Courses", "AWS", "Internships", "Projects"] as const;
export type CertificateCategory = (typeof certificateCategories)[number];

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  /** Display date or period, as printed on the certificate. */
  date: string;
  type: string;
  category: CertificateCategory;
  image: { src: string; width: number; height: number };
  pdf?: string;
  /** Extra facts shown on the card and in the viewer. */
  details?: { label: string; value: string }[];
  /** External verification URL — only add if one genuinely exists. */
  verifyUrl?: string;
};

export const certificates: Certificate[] = [
  {
    id: "ultimate-data-analytics",
    title: "Ultimate Job-Ready AI-Powered Data Analytics Course",
    issuer: "CodeWithHarry",
    date: "27 Jan 2026",
    type: "Course Certificate",
    category: "Courses",
    image: { src: "/certificates/ultimate-data-analytics.webp", width: 1600, height: 1132 },
    pdf: "/certificates/ultimate-data-analytics.pdf",
  },
  {
    id: "aws-cloud-practitioner-essentials",
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS Training and Certification",
    date: "19 May 2025",
    type: "Course Completion Certificate",
    category: "AWS",
    image: { src: "/certificates/aws-cloud-practitioner-essentials.webp", width: 1600, height: 1132 },
    pdf: "/certificates/aws-cloud-practitioner-essentials.pdf",
  },
  {
    id: "aws-cloud-economics-for-startups",
    title: "AWS Cloud Economics for Startups",
    issuer: "AWS Training and Certification",
    date: "19 May 2025",
    type: "Course Completion Certificate",
    category: "AWS",
    image: { src: "/certificates/aws-cloud-economics-for-startups.webp", width: 1600, height: 1132 },
    pdf: "/certificates/aws-cloud-economics-for-startups.pdf",
  },
  {
    id: "procraft-backend-internship",
    title: "Backend Developer Internship",
    issuer: "ProCraft",
    date: "Jan 2026 – May 2026",
    type: "Internship Certificate",
    category: "Internships",
    image: { src: "/certificates/procraft-backend-internship.webp", width: 1600, height: 1132 },
    pdf: "/certificates/procraft-backend-internship.pdf",
  },
  {
    id: "golden-bird-internship",
    title: "Golden Bird Education Internship",
    issuer: "Golden Bird Education",
    date: "15 May 2025",
    type: "Internship Certificate",
    category: "Internships",
    image: { src: "/certificates/golden-bird-internship.webp", width: 1600, height: 1237 },
    pdf: "/certificates/golden-bird-internship.pdf",
    details: [
      { label: "Domain", value: "Android App & Web Development" },
      { label: "Duration", value: "01 Feb 2025 – 15 May 2025" },
    ],
  },
  {
    id: "python-number-guessing",
    title: "Python Project Completion Certificate",
    issuer: "Anjuman Institute of Technology and Management – Bhatkal",
    date: "31 Aug 2023",
    type: "Project Completion Award",
    category: "Projects",
    image: { src: "/certificates/python-number-guessing.webp", width: 1600, height: 1237 },
    pdf: "/certificates/python-number-guessing.pdf",
    details: [
      { label: "Project", value: "Number Guessing" },
      { label: "Course", value: "Python Programming" },
    ],
  },
  {
    id: "certifyem-completion",
    title: "Certificate of Completion",
    issuer: "Certify'em",
    date: "27 Jul 2023",
    type: "Completion Certificate",
    category: "Courses",
    image: { src: "/certificates/certifyem-completion.webp", width: 1600, height: 1200 },
    pdf: "/certificates/certifyem-completion.pdf",
    details: [
      { label: "Passing score", value: "50%" },
      { label: "Certificate ID", value: "4LAZNA-CE000005" },
    ],
  },
];
