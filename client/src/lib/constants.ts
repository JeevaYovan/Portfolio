// ==========================
// Experience Data
// ==========================
export const experiences = [
  {
    title: "Infrastructure & DevOps Engineer",
    company: "Zuberà",
    period: "Mar 2025 - Present",
    location: "Remote, Salem, Tamil Nadu",
    responsibilities: [
      "Architected and deployed end-to-end UAT environment on AWS using EKS, CloudFront, ALB, and WAF with Terraform.",
      "Achieved 75% cost reduction by migrating development and QA workloads from AWS to Hetzner Cloud while maintaining uptime.",
      "Authored Helm charts, Dockerfiles, and Kubernetes manifests for microservices across isolated namespaces.",
      "Deployed a complete observability stack using Prometheus, Grafana, Loki, and Jaeger.",
      "Integrated AlertManager with Prometheus alert rules to reduce alert fatigue and improve incident routing.",
      "Implemented Sentry for real-time error tracking and performance monitoring.",
      "Established synthetic monitoring using Blackbox Exporter for proactive uptime validation.",
      "Integrated Grafana OnCall, reducing MTTA by 40%.",
      "Built RCA dashboards in Grafana for faster incident resolution and post-mortem analysis.",
      "Integrated Istio Ambient service mesh for secure traffic control and distributed tracing.",
      "Established SLI/SLO-based monitoring using OpenSearch dashboards.",
      "Migrated CI/CD from GitHub and Jenkins to OneDev and implemented GitOps using ArgoCD.",
      "Improved deployment frequency by 50% and reduced resource utilization by 20%.",
      "Implemented Argo Rollouts with Istio for canary deployments, integrating Prometheus and Kiali.",
      "Integrated DevSecOps tools including SonarQube, OWASP ZAP, and Trivy into pipelines.",
      "Implemented automated SSL certificate lifecycle management using Let's Encrypt.",
      "Configured Nginx and Caddy as reverse proxy, cache, and SSL terminator.",
      "Managed DNS and SSL automation using Route53 and GoDaddy.",
      "Conducted chaos engineering, stress testing, and failure simulations.",
      "Provided 24/7 on-call support and acted as primary incident commander using Plane.so."
    ]
  },
  {
    title: "Cloud & DevOps Engineer (SRE)",
    company: "zeb",
    period: "Feb 2024 - Oct 2024",
    location: "On-site, Chennai, Tamil Nadu",
    responsibilities: [
      "Managed AWS production infrastructure supporting thousands of global retail stores with 99.9% SLA.",
      "Executed ITIL-compliant change management across dev, qa, uat, perf, and prod environments.",
      "Provided 24/7 on-call support with sub-15-minute response time for P1 incidents.",
      "Resolved 90% of service tickets within SLA using ServiceNow and Jira.",
      "Reduced MTTR by 20% through automated remediation and incident analysis.",
      "Supported large-scale migration from legacy systems to serverless architecture with zero downtime.",
      "Migrated CI/CD pipelines from Jenkins to GitLab, reducing manual intervention by 60%.",
      "Implemented monitoring using CloudWatch, Datadog, and Logz.io.",
      "Optimized AWS Lambda workloads and reduced cold start latency by 40%."
    ]
  },
  {
    title: "Cloud Engineer (DevSecOps Specialist)",
    company: "AVASOFT",
    period: "Feb 2023 - Jan 2024",
    location: "On-site, Chennai, Tamil Nadu",
    responsibilities: [
      "Led a 3-member DevSecOps team securing internal NextGen products.",
      "Reduced manual security assessment effort by 60% through automated frameworks.",
      "Integrated SonarQube, Trivy, OWASP, Terrascan, and ZapProxy into CI/CD pipelines.",
      "Established automated vulnerability management and compliance reporting.",
      "Collaborated with cybersecurity teams to align remediation with compliance standards.",
      "Conducted GCP research and proof-of-concept implementations with detailed documentation."
    ]
  }
];

// ==========================
// Skills Data
// ==========================
export const skillCategories = [
  {
    name: "Cloud Platforms",
    skills: ["AWS (Expert)", "Hetzner Cloud", "Azure", "Google Cloud Platform"]
  },
  {
    name: "Infrastructure as Code",
    skills: ["Terraform", "Ansible", "AWS CloudFormation"]
  },
  {
    name: "Containers & Orchestration",
    skills: ["Kubernetes", "Docker", "Helm Charts", "K3s", "AWS EKS", "AWS ECS", "Istio (Ambient Mode)"]
  },
  {
    name: "CI/CD & GitOps",
    skills: ["GitLab", "GitHub Actions", "OneDev", "Jenkins", "ArgoCD", "Argo Rollouts", "Azure DevOps"]
  },
  {
    name: "Observability Stack",
    skills: ["Prometheus", "Grafana", "Loki", "Jaeger", "Kiali", "AlertManager", "Blackbox Exporter", "Sentry"]
  },
  {
    name: "Monitoring & Logging",
    skills: ["CloudWatch", "Datadog", "Logz.io", "OpenSearch", "Fluentd"]
  },
  {
    name: "Incident Management",
    skills: ["Grafana OnCall", "ServiceNow", "Jira", "Plane.so"]
  },
  {
    name: "Security Tools",
    skills: ["SonarQube", "Trivy", "Terrascan", "OWASP Dependency Check", "OWASP ZapProxy"]
  },
  {
    name: "Networking",
    skills: ["TCP/IP", "DNS", "VPC Design", "Load Balancing", "Network Troubleshooting"]
  },
  {
    name: "Web Servers & Proxies",
    skills: ["Nginx", "Caddy", "Reverse Proxy Configuration"]
  },
  {
    name: "Methodologies",
    skills: ["ITIL", "Agile", "DevOps", "SRE (SLI/SLO)", "GitOps", "Chaos Engineering"]
  },
  {
    name: "Additional Skills",
    skills: ["Cost Optimization", "Certificate Lifecycle Management", "24/7 On-Call Support", "Bash Scripting"]
  }
];

// ==========================
// Projects Data (Old + New)
// ==========================
export const projects = [
  {
    title: "Infrastructure Modernization & Observability Platform",
    period: "Mar 2025 - Present",
    client: "Zuberà",
    description: [
      "Architected and deployed a production-grade Kubernetes platform using AWS EKS and K3s with GitOps workflows.",
      "Built a complete observability stack using Prometheus, Grafana, Loki, Jaeger, and Sentry.",
      "Integrated AlertManager and Grafana OnCall for automated incident response, reducing MTTA by 40%.",
      "Designed RCA dashboards in Grafana for faster post-incident analysis.",
      "Achieved 75% cloud cost reduction by migrating dev and QA workloads from AWS to Hetzner Cloud.",
      "Implemented canary deployments using Argo Rollouts with Istio and monitored traffic using Kiali.",
      "Established SLI/SLO-based monitoring and alerting using OpenSearch dashboards.",
      "Implemented automated SSL certificate lifecycle management using Let’s Encrypt."
    ],
    technologies: [
      "AWS",
      "Kubernetes",
      "ArgoCD",
      "Argo Rollouts",
      "Prometheus",
      "Grafana",
      "Loki",
      "Jaeger",
      "Istio",
      "Terraform",
      "Hetzner Cloud"
    ]
  },

  {
    title: "Retail Platform – SRE & Cloud Operations",
    period: "Feb 2024 - Oct 2024",
    client: "zeb",
    description: [
      "Managed AWS-based production infrastructure supporting thousands of retail stores globally.",
      "Maintained 99.9% uptime SLA with zero major outages.",
      "Provided 24/7 on-call support with sub-15-minute response time for P1 incidents.",
      "Resolved 90% of tickets within SLA using ServiceNow and Jira.",
      "Reduced MTTR by 20% through automated remediation and incident root cause analysis.",
      "Migrated CI/CD pipelines from Jenkins to GitLab, reducing manual deployment effort by 60%.",
      "Optimized AWS Lambda workloads and reduced cold start latency by 40%.",
      "Implemented centralized monitoring using CloudWatch, Datadog, and Logz.io."
    ],
    technologies: [
      "AWS",
      "GitLab",
      "Jenkins",
      "Datadog",
      "CloudWatch",
      "Logz.io",
      "ServiceNow",
      "Jira",
      "Serverless"
    ]
  },

  {
    title: "DevOps & SRE Engineer – AWS, GitLab",
    period: "Jan 2024 - Oct 2024",
    client: "RAC (US Client)",
    description: [
      "Designed and implemented an end-to-end solution for deploying a web application on AWS.",
      "Supported ITIL-based change management processes across environments.",
      "Managed DevOps tickets using ServiceNow and Jira with timely resolution.",
      "Onboarded new applications and repositories into GitLab CI/CD.",
      "Handled ad-hoc requests from development and integrations teams.",
      "Performed hotfix deployments and optimized CI/CD pipelines.",
      "Provided 24/7 on-call production support ensuring minimal downtime."
    ],
    technologies: [
      "AWS",
      "GitLab CI/CD",
      "ServiceNow",
      "Jira",
      "Linux",
      "CI/CD"
    ]
  },

  {
    title: "DevSecOps Engineer – CI/CD & Security Automation",
    period: "Apr 2023 - Dec 2023",
    client: "Zeb",
    description: [
      "Established initial cloud and DevSecOps architecture for NextGen applications.",
      "Integrated security tools into CI/CD pipelines to ensure shift-left security.",
      "Automated vulnerability scanning and compliance checks.",
      "Analyzed security scan reports and provided remediation guidance to developers."
    ],
    technologies: [
      "AWS",
      "Azure DevOps",
      "SonarQube",
      "OWASP Dependency Check",
      "Trivy",
      "CI/CD",
      "Security Automation"
    ]
  }
];
