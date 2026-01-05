# Privacy Policy

**Last Updated: December 24, 2025**

## 1. Introduction

Welcome to PodPDF ("we", "us", "our", or "Service"). This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our PDF generation platform at https://app.podpdf.com, including our web application and API services.

**We operate globally using cloud infrastructure.** PodPDF is built on Amazon Web Services (AWS) and serves **customers worldwide**. We comply with international data protection standards including GDPR and CCPA.

By using PodPDF, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with this Privacy Policy, please do not use our Service.

This Privacy Policy should be read in conjunction with our Terms of Service.

## 2. Information We Collect

### 2.1 Personal Information You Provide

**Account Registration:**
When you create an account, we collect:
- **Email address** (required for authentication and communication)
- **Password** (encrypted and stored securely via AWS Cognito)
- **Display name** (optional)

**Google OAuth Authentication:**
When you sign in using Google, we collect:
- **Google account email address**
- **Google account name** (if provided by Google)
- **Google user ID** (for authentication purposes)

We only access the information you authorize Google to share with us. We do not have access to your Google password. Your use of Google OAuth is also subject to Google's Privacy Policy and Terms of Service.

**Payment Information:**
For paid plan users:
- We may collect billing information through third-party payment processors
- We do not store credit card information directly on our servers
- Payment processors handle sensitive financial data in compliance with PCI-DSS standards

### 2.2 Automatically Collected Information

**Usage Data:**
When you use the Service, we automatically collect:
- **Job Records**: Job ID, status, creation time, completion time, page count, input type (HTML/Markdown/Image), API key ID used (if applicable)
- **API Usage**: Number of API requests, request timestamps, API key IDs used
- **API Key Data**: API key names, creation dates, last used timestamps, revocation status
- **PDF Generation Metrics**: Number of PDFs generated, file sizes, processing times
- **Authentication Logs**: Login timestamps, authentication method used (email/password or Google OAuth)
- **Rate Limit Information**: Request frequency and rate limit status
- **Service Availability Metrics**: Uptime monitoring data for SLA compliance (Paid Standard plans only)
- **Webhook Configurations**: Webhook URLs, names, event subscriptions, active status
- **Webhook Delivery History**: Delivery attempts, success/failure status, HTTP status codes, retry counts, delivery timestamps, payload sizes, duration metrics
- **Credit Transactions**: Purchase amounts, transaction IDs, timestamps, credit balance changes

**Technical Information:**
- **IP Address**: For security, fraud prevention, and rate limiting
- **Browser Type and Version**: For compatibility and debugging
- **Device Information**: Operating system, device type
- **HTTP Headers**: User agent, referrer, request headers

**Cookies and Session Data:**
- **Session Tokens**: JWT tokens for authentication (stored in browser)
- **Session Cookies**: To maintain your logged-in state
- **Preference Settings**: To remember your PDF generation options

### 2.3 Content You Submit

**Input Content:**
- **HTML, Markdown, or Images**: Content you submit for PDF generation
- **PDF Options**: Configuration settings for PDF generation (page size, margins, etc.)

**Important**: Your input content is processed in memory and **not stored persistently** on our servers. It is deleted immediately after PDF generation.

## 3. How We Use Your Information

We use the information we collect for the following purposes:

### 3.1 Service Provision
- **Authentication**: To verify your identity and provide secure access to your account
- **PDF Generation**: To process your content and generate PDFs
- **API Access**: To authenticate API requests and manage API keys
- **API Key Management**: To create, track, and revoke API keys for programmatic access
- **Job Tracking**: To show you job history and status
- **Quota Management**: To track your usage and enforce plan limits
- **Webhook Delivery**: To send job notifications to your configured webhook endpoints
- **Webhook Management**: To manage multiple webhook configurations and track delivery history
- **SLA Monitoring**: To measure uptime and service availability for Paid Standard plans

### 3.2 Billing and Payment
- **Billing Calculation**: To calculate monthly charges for paid plans based on PDF usage
- **Credit Management**: To track credit purchases, balance, and deductions for paid plans
- **Transaction Logging**: To maintain audit trail of all credit transactions (purchases and deductions)
- **Invoice Generation**: To create and send invoices
- **Payment Processing**: To process payments through third-party providers
- **SLA Credit Calculation**: To calculate free PDF credits based on monthly usage when SLA is breached

### 3.3 Communication
- **Service Notifications**: To send important account and service updates
- **Price Change Notifications**: To notify you of pricing changes (required by our Terms of Service)
- **Support Responses**: To respond to your inquiries and support requests
- **Security Alerts**: To notify you of suspicious account activity

### 3.4 Service Improvement
- **Analytics**: To understand usage patterns and improve the Service
- **Error Tracking**: To identify and fix bugs and performance issues
- **Feature Development**: To develop new features based on usage trends

### 3.5 Security and Fraud Prevention
- **Account Security**: To detect and prevent unauthorized access
- **Abuse Prevention**: To identify and prevent service abuse
- **Rate Limiting**: To enforce fair usage policies

### 3.6 Legal Compliance
- **Legal Obligations**: To comply with applicable laws and regulations
- **Law Enforcement**: To respond to valid legal requests
- **Terms Enforcement**: To enforce our Terms of Service

## 4. Data Storage and Infrastructure

### 4.1 Cloud Infrastructure
We use **Amazon Web Services (AWS)** infrastructure for all data storage and processing:
- **AWS Cognito**: User authentication and account management
- **Amazon DynamoDB**: User accounts, job records, billing data, API keys, webhook configurations, webhook delivery history, credit transactions
- **Amazon S3**: Temporary PDF storage (1 hour only)
- **AWS Lambda**: Serverless compute for PDF generation
- **API Gateway**: API request handling and routing

**Data Location**: Your data is primarily stored in AWS data centers. AWS may store data across multiple regions for redundancy and performance.

### 4.2 Authentication and Security
- **AWS Cognito**: Manages user authentication with industry-standard security protocols
- **JWT Tokens**: Used for secure API authentication
- **API Keys**: Securely hashed and stored in DynamoDB with metadata (names, creation dates, last used timestamps)
- **API Key Security**: Full API keys are only shown once upon creation; only prefixes are shown in listings
- **Encryption**: All data transmissions use HTTPS/TLS encryption
- **Password Security**: Passwords are hashed and never stored in plain text

### 4.3 PDF Storage and Deletion
**Critical: PDFs are stored for 1 hour only**

- **Quick Jobs**: PDF returned directly in HTTP response; not stored persistently
- **Long Jobs**: PDF stored in Amazon S3 with pre-signed URL valid for 1 hour
- **Automatic Deletion**: PDFs are automatically deleted after 1 hour
- **No Recovery**: Expired PDFs cannot be recovered
- **Your Responsibility**: Download PDFs immediately if you need to keep them

### 4.4 Input Content
- **In-Memory Processing**: Your HTML, Markdown, and images are processed in server memory
- **No Persistent Storage**: Input content is never stored persistently
- **Immediate Deletion**: Content is deleted immediately after PDF generation completes

### 4.5 Job Metadata Retention
We retain job metadata (not the PDF content) for:
- **Free Tier Users**: 90 days
- **Paid Standard Users**: 365 days

Job metadata includes: Job ID, status, creation time, completion time, page count, input type, API key ID (if used). It does **not** include your actual content or generated PDFs.

### 4.6 Webhook Data Storage
- **Webhook Configurations**: Stored in DynamoDB and retained while your account is active
- **Webhook Delivery History**: Permanently retained (no TTL) for debugging, auditing, and troubleshooting
- **Delivery Records Include**: Delivery ID, webhook ID, job ID, event type, delivery status, HTTP status codes, retry counts, timestamps, duration, payload sizes
- **Webhook URLs**: Stored securely and used only for sending job notifications to your configured endpoints

### 4.7 API Key Data Storage
- **API Keys**: Securely hashed and stored in DynamoDB
- **API Key Metadata**: Names, creation dates, last used timestamps, revocation status retained while account is active
- **Revoked Keys**: Remain in database with revocation timestamp for audit purposes

### 4.8 Credit Transaction Data
- **Credit Transactions**: All purchases and deductions logged in DynamoDB for audit trail
- **Transaction Records**: Include transaction ID, amount, type (purchase/deduction), timestamp, user ID
- **Retention**: Retained for accounting and audit purposes as required by law

## 5. Data Sharing and Disclosure

### 5.1 We Do Not Sell Your Data
**We never sell, rent, or trade your personal information to third parties for marketing purposes.**

### 5.2 Service Providers
We share information with trusted third-party service providers who assist in operating our Service:

**Amazon Web Services (AWS):**
- Provides infrastructure, storage, and compute services
- Subject to AWS Privacy Policy and security standards
- AWS employees do not access your data except as required for infrastructure maintenance

**Google OAuth:**
- Used for authentication when you choose to sign in with Google
- Google receives authentication requests but not your PDF content
- Subject to Google's Privacy Policy

**Payment Processors:**
- Process payments for paid plans
- Receive only information necessary for payment processing
- Do not have access to your PDF content

### 5.3 Legal Requirements
We may disclose your information if required by law or in response to:
- Valid legal processes (subpoenas, court orders, search warrants)
- Requests from law enforcement or government authorities
- Legal obligations under Sri Lankan or international law

We will attempt to notify you of legal requests unless prohibited by law.

### 5.4 Business Transfers
If PodPDF is involved in a merger, acquisition, or asset sale, your information may be transferred. We will provide notice before your information is transferred and becomes subject to a different privacy policy.

### 5.5 With Your Consent
We may share your information with third parties when you explicitly consent or direct us to do so (e.g., configuring webhooks to your own servers).

**Webhook Delivery:**
- When you configure webhooks, we send job completion notifications to your specified webhook URLs
- Webhook payloads include job metadata (job ID, status, timestamps, page count, S3 URLs for completed jobs)
- Webhook delivery history is logged and permanently retained
- You are responsible for the security and privacy practices of your webhook endpoints

### 5.6 Aggregated and Anonymized Data
We may share aggregated, anonymized data that cannot identify you personally for:
- Analytics and research purposes
- Service improvement and optimization
- Public reporting (e.g., total PDFs generated platform-wide)

## 6. Cookies and Tracking Technologies

### 6.1 Cookies We Use
**Essential Cookies:**
- **Session Cookies**: To maintain your logged-in state
- **Authentication Tokens**: JWT tokens stored in browser for API authentication
- **CSRF Protection**: To prevent cross-site request forgery attacks

**Preference Cookies:**
- **PDF Options**: To remember your preferred PDF generation settings
- **UI Preferences**: To remember dashboard settings and preferences

### 6.2 Third-Party Cookies
**Google OAuth:**
- Google may set cookies when you use Google Sign-In
- Subject to Google's cookie and privacy policies

### 6.3 Your Cookie Choices
Most browsers allow you to:
- Block or delete cookies
- Receive warnings before cookies are stored
- Control third-party cookie access

Note: Disabling essential cookies may prevent you from using certain features of the Service.

### 6.4 Do Not Track
We currently do not respond to "Do Not Track" browser signals. If we do so in the future, we will update this Privacy Policy.

## 7. Data Security

### 7.1 Security Measures
We implement industry-standard security measures to protect your information:

**Technical Security:**
- **HTTPS/TLS Encryption**: All data in transit is encrypted
- **AWS Security**: Benefit from AWS's comprehensive security infrastructure
- **API Authentication**: JWT tokens and API keys for secure access
- **Password Hashing**: Passwords never stored in plain text

**Operational Security:**
- **Access Controls**: Limited access to production systems
- **Security Monitoring**: Automated monitoring for suspicious activity
- **Regular Updates**: Software and security patches applied promptly

**Data Security:**
- **No Long-Term PDF Storage**: PDFs deleted after 1 hour reduces exposure risk
- **In-Memory Processing**: Input content not persisted to disk
- **Secure Deletion**: Data securely deleted according to retention policies

### 7.2 Your Security Responsibilities
You are responsible for:
- Keeping your password and API keys confidential
- Using strong, unique passwords
- Securing your Google account (if using Google OAuth)
- Logging out from shared devices
- Revoking compromised API keys immediately
- Securing your webhook endpoints and handling webhook payloads securely
- Protecting API keys stored in your applications or systems

### 7.3 Security Incident Response
In the event of a data breach that affects your personal information:
- We will notify you via email as soon as reasonably possible
- We will describe the nature of the breach and steps being taken
- We will comply with applicable data breach notification laws

### 7.4 No Absolute Security
**Important**: No method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.

## 8. Your Privacy Rights

### 8.1 Rights Under GDPR (European Users)
If you are in the European Economic Area, you have the following rights:

**Right to Access:**
- Request a copy of the personal information we hold about you
- Request details about how we process your information

**Right to Rectification:**
- Request correction of inaccurate personal information
- Update your account information in Settings

**Right to Erasure ("Right to be Forgotten"):**
- Request deletion of your personal information
- Delete your account through Settings page

**Right to Restriction:**
- Request restriction of processing in certain circumstances

**Right to Data Portability:**
- Request your data in a machine-readable format
- Transfer your data to another service

**Right to Object:**
- Object to processing of your personal information
- Opt out of marketing communications

**Right to Withdraw Consent:**
- Withdraw consent where processing is based on consent

### 8.2 Rights Under CCPA (California Users)
If you are a California resident, you have the following rights:

**Right to Know:**
- Request information about data we collect, use, and disclose
- Request specific pieces of personal information we have collected

**Right to Delete:**
- Request deletion of your personal information (subject to exceptions)

**Right to Opt-Out:**
- Opt out of sale of personal information (we do not sell personal information)

**Right to Non-Discrimination:**
- Equal service and prices regardless of exercising privacy rights

### 8.3 Exercising Your Rights
To exercise any of these rights:
- **Email us**: podpdf@gmail.com
- **Delete Account**: Use the account deletion feature in Settings
- **Update Information**: Update your information in account Settings

We will respond to requests within 30 days. We may need to verify your identity before processing requests.

### 8.4 Account Deletion
To permanently delete your account:
1. Go to Settings → Danger Zone
2. Click "Delete Account" and confirm
3. The following will be permanently deleted:
   - Your account information
   - All job records
   - All API keys (revoked immediately)
   - All webhook configurations
   - Rate limit data
4. This action cannot be undone

**Note on Webhook Delivery History:**
- Webhook delivery history records may be retained for audit and troubleshooting purposes
- These records contain job IDs and delivery metadata but not your personal information
- Historical delivery records help us maintain service quality and debug issues

**Note on Credit Transactions:**
- Credit transaction records may be retained for accounting and tax compliance purposes
- These records are necessary for financial audit trails

**Note on Billing Records:**
- Billing records may be retained as required by law for tax compliance

## 9. International Data Transfers

**We operate globally using cloud infrastructure** and welcome customers from around the world.

### 9.1 Global Operations
- **Infrastructure**: Amazon Web Services (AWS) global infrastructure
- **Data Centers**: Multiple AWS regions worldwide for performance and redundancy
- **Company Jurisdiction**: Sri Lanka (for legal purposes only)
- **Customer Base**: Worldwide - we serve customers in all countries
- **Compliance**: GDPR, CCPA, and international data protection standards

### 9.2 Cross-Border Transfers
**Customers worldwide may use the Service.** When you access PodPDF:
- Your data is processed using AWS global infrastructure
- Data may be transferred to and processed in multiple AWS regions for performance and reliability
- We implement appropriate safeguards for international data transfers
- We rely on AWS's compliance certifications (ISO 27001, SOC 2, GDPR, etc.)
- Your data benefits from AWS's industry-leading security regardless of your location

### 9.3 EU-US Data Transfers
For users in the European Economic Area:
- Data transfers comply with GDPR requirements
- AWS complies with applicable data protection frameworks
- We implement appropriate safeguards for international transfers

## 10. Children's Privacy

### 10.1 Age Restriction
**PodPDF is not intended for use by children under 13 years of age.**

We do not knowingly collect personal information from children under 13. If you are under 13, do not:
- Use the Service
- Create an account
- Provide any personal information

### 10.2 Parental Notice
If we learn we have collected personal information from a child under 13:
- We will delete that information as quickly as possible
- We will terminate the account
- Parents/guardians should contact us at podpdf@gmail.com if they believe we have collected information from a child under 13

### 10.3 Jurisdictional Age Requirements
Some jurisdictions have higher age requirements (e.g., 16 in some EU countries). Users must comply with age requirements in their jurisdiction.

## 11. Third-Party Services and Links

### 11.1 Third-Party Authentication
**Google OAuth:**
- When you use Google Sign-In, you are subject to Google's Privacy Policy and Terms of Service
- We only receive information you authorize Google to share
- We do not control Google's data practices

### 11.2 Webhook Integrations
When you configure webhooks:
- You can create multiple webhook configurations (subject to plan-based limits)
- You direct us to send job notifications to your specified URLs based on subscribed events
- Webhook payloads include job metadata (job ID, status, timestamps, S3 URLs for completed jobs)
- All webhook delivery attempts are logged and permanently retained for audit purposes
- Your webhook endpoints are subject to your own privacy and security practices
- We are not responsible for how you handle data received via webhooks
- You are responsible for securing your webhook endpoints and handling webhook payloads securely

### 11.3 Third-Party Links
Our Service may contain links to third-party websites or services:
- We are not responsible for the privacy practices of third parties
- We encourage you to read their privacy policies
- This Privacy Policy applies only to information collected by PodPDF

## 12. Data Retention

### 12.1 Account Information
We retain your account information while your account is active and for as long as needed to provide services.

### 12.2 PDFs (Generated Output)
- **Storage Duration**: 1 hour only
- **Automatic Deletion**: PDFs are automatically deleted after 1 hour
- **No Archival**: We do not archive or backup generated PDFs

### 12.3 Input Content
- **Storage Duration**: Not stored persistently
- **In-Memory Processing**: Processed in memory and deleted immediately after PDF generation

### 12.4 Job Metadata
- **Free Tier**: Retained for 90 days
- **Paid Standard**: Retained for 365 days
- Includes: Job ID, status, timestamps, page count, input type, API key ID (if used)
- Does not include: Actual content or generated PDFs

### 12.5 API Key Data
- **Active API Keys**: Retained while account is active
- **Revoked API Keys**: Retained with revocation timestamp for audit purposes
- **API Key Metadata**: Names, creation dates, last used timestamps retained while account is active

### 12.6 Webhook Data
- **Webhook Configurations**: Retained while account is active, deleted upon account deletion
- **Webhook Delivery History**: Permanently retained (no TTL) for debugging, auditing, and troubleshooting
- **Delivery Records**: Include delivery ID, webhook ID, job ID, event type, status, HTTP status codes, retry counts, timestamps, duration, payload sizes
- **Purpose**: Long-term retention helps maintain service quality and enables troubleshooting of delivery issues

### 12.7 Credit Transaction Records
- **Retention**: Retained for accounting and audit purposes as required by law
- **Typically**: 7 years or as required by Sri Lankan tax law
- **Includes**: Transaction ID, amount, type (purchase/deduction), timestamp, user ID
- **Purpose**: Financial audit trail and tax compliance

### 12.8 Billing Records
- Retained as required by law for tax and accounting purposes
- Typically 7 years or as required by Sri Lankan tax law
- Monthly PDF usage counts retained for 12 months for SLA credit calculation and verification

### 12.9 Analytics and Logs
- Aggregated usage data may be retained indefinitely (anonymized)
- Server logs retained for 90 days for security and debugging
- SLA uptime metrics retained for 12 months (for Paid Standard plans) for SLA credit verification
- Monthly PDF usage counts retained for 12 months to calculate SLA credits based on usage percentage

### 12.10 After Account Deletion
When you delete your account:
- Personal information is deleted within 30 days
- Some information may be retained for legal compliance (e.g., billing records)
- Anonymized analytics data may be retained

## 13. Changes to This Privacy Policy

### 13.1 Right to Modify
We reserve the right to modify this Privacy Policy at any time.

### 13.2 Notification of Changes
When we make material changes to this Privacy Policy:
- We will notify you via email to your registered email address
- We will post a notice on our dashboard
- We will update the "Last Updated" date at the top of this policy

### 13.3 Review Responsibility
You are responsible for periodically reviewing this Privacy Policy for changes.

### 13.4 Continued Use
Your continued use of the Service after changes take effect constitutes acceptance of the revised Privacy Policy.

### 13.5 Material Changes
For material changes that significantly affect your rights:
- We will provide at least 14 days advance notice
- You may choose to stop using the Service if you do not agree

## 14. Contact Us

If you have questions, concerns, or requests regarding this Privacy Policy or our data practices:

**Email**: podpdf@gmail.com

**Website**: https://app.podpdf.com

**Response Time**: We aim to respond to privacy inquiries within 30 days.

### 14.1 Data Protection Officer
For GDPR-related inquiries, you may contact our Data Protection Officer at podpdf@gmail.com.

### 14.2 Supervisory Authority
If you are in the European Economic Area, you have the right to lodge a complaint with your local data protection authority if you believe our processing of your personal information violates data protection laws.

### 14.3 Company Information
PodPDF is operated by **XadLabs (PVT) Ltd**, registered in Sri Lanka.

## 15. Compliance and Certifications

### 15.1 GDPR Compliance
We comply with the General Data Protection Regulation (GDPR) for users in the European Economic Area.

### 15.2 CCPA Compliance
We comply with the California Consumer Privacy Act (CCPA) for California residents.

### 15.3 AWS Security Standards
Our infrastructure provider (AWS) maintains numerous security certifications and compliance programs, including:
- ISO 27001
- SOC 1, 2, and 3
- PCI DSS Level 1
- GDPR compliance

### 15.4 Industry Best Practices
We follow industry best practices for data security, including:
- Regular security audits and assessments
- Encryption of data in transit and at rest
- Access controls and authentication
- Incident response procedures

## 16. Additional Information for Specific Jurisdictions

**We operate globally using cloud infrastructure and serve customers worldwide.** While our company is based in Sri Lanka for legal purposes, we comply with data protection laws wherever our customers are located.

### 16.1 Global Operations
- **Infrastructure**: AWS global cloud infrastructure
- **Company Jurisdiction**: Sri Lanka (legal headquarters)
- **Service Availability**: Worldwide
- **Data Protection**: We comply with GDPR, CCPA, and international standards regardless of where you're located

### 16.2 Sri Lanka
Our company is legally based in Sri Lanka. However, **customers worldwide may use the Service** and benefit from our compliance with international data protection standards.

### 16.3 European Economic Area (EEA)
We process personal data of EEA residents in full compliance with GDPR. We provide all rights required under GDPR as outlined in Section 8.1, including:
- Right to access, rectify, and erase your data
- Right to data portability
- Right to object to processing
- Right to lodge complaints with supervisory authorities

### 16.4 California (United States)
California residents have additional rights under CCPA as outlined in Section 8.2, including rights to know, delete, and opt-out.

### 16.5 Other Jurisdictions
If you are accessing the Service from other jurisdictions with data protection laws:
- We will comply with applicable local laws
- We respect data protection rights in all jurisdictions
- Contact us at podpdf@gmail.com with jurisdiction-specific questions
- Our use of AWS infrastructure ensures compliance with international standards

---

## Summary of Key Privacy Points

- ✅ **Minimal Data Collection**: We collect only essential information (email, name, usage data, API key metadata, webhook configurations)
- ✅ **No Data Selling**: We never sell your personal information
- ✅ **Short PDF Storage**: PDFs stored for 1 hour only, then automatically deleted
- ✅ **No Content Storage**: Input content processed in memory, not stored persistently
- ✅ **API Key Security**: Full API keys shown only once; securely hashed and stored
- ✅ **Webhook Transparency**: Webhook delivery history permanently retained for audit and troubleshooting
- ✅ **Credit Transaction Logging**: All credit transactions logged for financial audit trail
- ✅ **AWS Infrastructure**: Industry-leading security and compliance
- ✅ **GDPR & CCPA Compliant**: Full compliance with data protection regulations
- ✅ **Your Control**: Easy account deletion and data access requests
- ✅ **Transparent**: Clear explanation of data practices

---

**By using PodPDF, you acknowledge that you have read, understood, and agree to this Privacy Policy.**

---

*Last Updated: December 24, 2025*

