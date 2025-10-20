---
title: "Create a New Self‑Serve Cloud Billing Account"
seoTitle: "Setup Your Self-Serve Cloud Billing"
seoDescription: "Learn how to create and manage a self-serve Cloud Billing account with this step-by-step Google Cloud guide"
datePublished: Mon Oct 20 2025 05:25:43 GMT+0000 (Coordinated Universal Time)
cuid: cmgyozgwb000802l26s3ua0qn
slug: create-a-new-selfserve-cloud-billing-account

---

Here is a concise **version** of the official Google Cloud guide for creating a new Cloud Billing account.​

## Create a New Self‑Serve Cloud Billing Account

**1\. Before you start**

* Review the Cloud Billing account overview to ensure a new account is required.
    
* Confirm you have the necessary permissions.
    
    * If within a Google Cloud Organization → must have the *Billing Account Creator* role.
        
    * If no Organization → no special role needed.
        

**2\. Sign in**

* Go to the **Manage billing accounts** page in the [Google Cloud Console](https://console.cloud.google.com/billing).
    

**3\. Create a new billing account**

* Click **Create account**.
    
* Enter a **Name** for your Cloud Billing account.
    
* Choose **Organization** (if visible) or **Country**.
    
    * Country determines **currency** and **payment methods** (cannot be changed later).
        
* Click **Continue**.
    

**4\. Associate a Google Payments profile**

* Select an existing **Google payments profile** or **create a new one**.
    
    * If new, you must select the **Account Type**:
        
        * **Business** for multiple users or tax identity use.
            
        * **Individual** for personal use (only one associated user).
            
* Complete any required **tax information** if prompted.
    
* Click **Submit and enable billing**.
    

**5\. Authorization check**

* Expect a temporary $0.00 (or $1 equivalent) card authorization — not an actual charge.
    

**6\. (India only) Identity verification**

* You must verify identity within 30 days via **Billing account overview → Verify now**.
    
    * **Organizations** provide:
        
        * Mobile number and executive contact details.
            
        * One of: Certificate of incorporation, GST registration, Udyam certificate, or recent utility bill.
            
    * **Individuals** provide:
        
        * Government ID (Passport, PAN, Driver’s License, or Voter ID).
            
        * Proof of address (recent utility/phone bill).
            

**7\. Verify your payment email**

* Open **Payment settings → Manage payments users**.
    
* Click **Resend verification email** if not verified.
    

**8\. Post‑setup recommendations**

* **Configure access control:**
    
    * Assign multiple Billing Account Administrators via IAM.
        
    * Assign multiple Google Payments Admins and a verified **Primary Contact**.
        
* **Set up a FinOps project:**
    
    * Create a dedicated GCP project for billing tools, APIs, and data exports.
        
* **Set budgets and alerts:**
    
    * Create budgets to monitor spend and trigger email notifications.
        
* **Export billing data to BigQuery:**
    
    * Enable data export for cost analysis and visualization.
        

---

This is ready for use as a **procedure or automation guide** for onboarding new team members or training FinOps administrators in Google Cloud billing setup.[cloud.google](https://cloud.google.com/billing/docs/how-to/create-billing-account)​

1. [https://cloud.google.com/billing/docs/how-to/create-billing-account](https://cloud.google.com/billing/docs/how-to/create-billing-account)