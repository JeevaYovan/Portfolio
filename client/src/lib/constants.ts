// Experience data
export const experiences = [
  {
    title: "Lead DevOps Engineer",
    company: "Zubera",
    period: "Mar 2025 - Present",
    responsibilities: [
      "Worked closely with stakeholders to optimize our existing B2B and B2C products for improving application performance.",
      "Deployed open-source projects on Hetzner Cloud and evaluated functionality for scalability.",
      "Evaluated the existing AWS EKS setup for our application and updated to meet compliance standards, enhancing security.",
      "Migrated all our code from GitHub to Onedev and setup the CI and CD pipeline achieving security and performance.",
      "Migrated the development and uat environment from AWS to Hertzner Cloud Server for cost consumption.",
      "Conducted POCs for Liquibase, DAPR, and Apache APISIX to enhance infrastructure."
    ]
  },
  {
    title: "DevOps and SRE Engineer",
    company: "Avasoft",
    period: "Mar 2024 - Oct 2024",
    responsibilities: [
      "Designed and implemented an end-to-end solution for deploying a web application.",
      "Supported change management processes to ensure smooth transitions and updates.",
      "Managed DevOps tickets through ServiceNow and Jira, addressing issues and providing timely resolutions.",
      "Setting up new projects into GtLab CI/CD.",
      "Handled ad-hoc requests from the client's development team, including application support, integrations team.",
      "Performed hotfixes and optimized deployments for CI/CD pipelines.",
      "Provided 24/7 on-call support for production deployments, ensuring minimal downtime and efficient resolution of critical issues."
    ]
  },
  {
    title: "DevSecOps Engineer",
    company: "Avasoft",
    period: "Nov 2023 - Feb 2024",
    responsibilities: [
      "Established the initial architecture with strategies to identify and mitigate vulnerabilities proactively.",
      "Designed and implemented an end-to-end automated deployment process by integrating security tools into the NextGen products pipeline, ensuring robust product security.",
      "Analyzed security check reports and provided developers with actionable remediation steps in alignment with compliance standards."
    ]
  },
  {
    title: "Cloud Engineer",
    company: "Avasoft",
    period: "Jan 2023 - Oct 2023",
    responsibilities: [
      "Designed and maintained automated CI/CD pipelines using Azure DevOps, GitHub, and servants.",
      "Integrated automated security testing tools (SonarQube, OWASP Dependency Check) into pipelines, reducing vulnerabilities detected in production.",
      "Worked collaboratively with cross-functional teams, including development and application support.",
      "Resolved most of the service tickets within SLA using ServiceNow and Jira.",
      "Achieved high production application availability through proactive monitoring using Datadog and CloudWatch."
    ]
  }
];

// Skills data
export const skillCategories = [
  {
    name: "Cloud Platforms",
    skills: ["AWS EC2", "AWS VPC", "AWS S3", "AWS Lambda", "AWS API Gateway", "AWS RDS", "Hetzner Cloud"]
  },
  {
    name: "CI/CD Tools",
    skills: ["Azure DevOps", "GitHub Actions", "GitLab", "Jenkins", "Onedev"]
  },
  {
    name: "IaC Tools",
    skills: ["Ansible", "Terraform"]
  },
  {
    name: "Containerization",
    skills: ["Docker", "AWS ECR", "AWS ECS", "AWS EKS", "Helm Charts"]
  },
  {
    name: "Monitoring",
    skills: ["CloudWatch", "Logz.io", "Prometheus", "Grafana"]
  },
  {
    name: "Security Tools",
    skills: ["SonarQube", "OWASP ZAP", "Trivy", "GitLeaks", "OWASP Dependency Check"]
  },
  {
    name: "Operating Systems",
    skills: ["Linux", "Windows"]
  },
  {
    name: "Programming/Scripting",
    skills: ["Bash (Basic Knowledge)"]
  }
];

// Projects data
export const projects = [
  {
    title: "DevOps and SRE Engineer - AWS, GitLab (RAC Client)",
    period: "Jan 2024 - Oct 2024",
    description: [
      "Designed and implemented an end-to-end solution for deploying a web application.",
      "Supported change management processes to ensure smooth transitions and updates.",
      "Managed DevOps tickets through ServiceNow and Jira, addressing issues and providing timely resolutions.",
      "Setting up new projects into GitLab CI/CD.",
      "Handled ad-hoc requests from the client's development team, including application support, integrations team.",
      "Performed hotfixes and optimized deployments for CI/CD pipelines.",
      "Provided 24/7 on-call support for production deployments, ensuring minimal downtime and efficient resolution of critical issues."
    ],
    technologies: ["AWS", "GitLab", "CI/CD", "ServiceNow", "Jira"]
  },
  {
    title: "DevSecOps Engineer - AWS, Azure DevOps, Security tools (Zeb Client)",
    period: "Apr 2023 - Dec 2023",
    description: [
      "Established the initial architecture with strategies to identify and mitigate vulnerabilities proactively.",
      "Designed and implemented an end-to-end automated deployment process by integrating security tools into the NextGen products pipeline, ensuring robust product security.",
      "Analyzed security check reports and provided developers with actionable remediation steps in alignment with compliance standards."
    ],
    technologies: ["AWS", "Azure DevOps", "Security Tools", "CI/CD", "Compliance"]
  }
];
