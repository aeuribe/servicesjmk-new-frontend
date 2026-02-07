import { useTranslations } from "next-intl";

export const useServicesTranslations = () => {
  const t = useTranslations("ServicesPage");

  return {
    hero: {
      badge: t("hero.badge"),
      title1: t("hero.title1"),
      title2: t("hero.title2"),
      description: t("hero.description"),
      button: t("hero.button"),
    },
    services: {
      engineering: {
        sectionNumber: t("services.engineering.sectionNumber"),
        title: t("services.engineering.title"),
        subtitle: t("services.engineering.subtitle"),
        description: t("services.engineering.description"),
        metrics: {
          projectsDelivered: t("services.engineering.metrics.projectsDelivered"),
          efficiencyGain: t("services.engineering.metrics.efficiencyGain"),
        },
        benefits: {
          processOptimization: t("services.engineering.benefits.processOptimization"),
          digitalTwinDesign: t("services.engineering.benefits.digitalTwinDesign"),
          feasibilityStudies: t("services.engineering.benefits.feasibilityStudies"),
        },
      },
      automation: {
        sectionNumber: t("services.automation.sectionNumber"),
        title: t("services.automation.title"),
        subtitle: t("services.automation.subtitle"),
        description: t("services.automation.description"),
        metrics: {
          uptimeImprovement: t("services.automation.metrics.uptimeImprovement"),
          costReduction: t("services.automation.metrics.costReduction"),
        },
        keywords: {
          predictiveAnalytics: t("services.automation.keywords.predictiveAnalytics"),
          iotIntegration: t("services.automation.keywords.iotIntegration"),
          realTimeMonitoring: t("services.automation.keywords.realTimeMonitoring"),
          support247: t("services.automation.keywords.support247"),
        },
      },
      machinery: {
        sectionNumber: t("services.machinery.sectionNumber"),
        title: t("services.machinery.title"),
        subtitle: t("services.machinery.subtitle"),
        description: t("services.machinery.description"),
        metrics: {
          unitsSupplied: t("services.machinery.metrics.unitsSupplied"),
          countriesServed: t("services.machinery.metrics.countriesServed"),
        },
        keywords: {
          globalSourcing: t("services.machinery.keywords.globalSourcing"),
          customConfig: t("services.machinery.keywords.customConfig"),
          rapidDeployment: t("services.machinery.keywords.rapidDeployment"),
          lifecycleManagement: t("services.machinery.keywords.lifecycleManagement"),
        },
        externalLink: t("services.machinery.externalLink"),
        externalLinkText: t("services.machinery.externalLinkText"),
      },
      maintenance: {
        sectionNumber: t("services.maintenance.sectionNumber"),
        title: t("services.maintenance.title"),
        subtitle: t("services.maintenance.subtitle"),
        description: t("services.maintenance.description"),
        metrics: {
          uptimeImprovement: t("services.maintenance.metrics.uptimeImprovement"),
          responseTime: t("services.maintenance.metrics.responseTime"),
        },
        keywords: {
          preventiveMaintenance: t("services.maintenance.keywords.preventiveMaintenance"),
          predictiveAnalytics: t("services.maintenance.keywords.predictiveAnalytics"),
          support247: t("services.maintenance.keywords.support247"),
          remoteDiagnostics: t("services.maintenance.keywords.remoteDiagnostics"),
        },
      },
    },
    contactForm: {
      badge: t("contactForm.badge"),
      title: t("contactForm.title"),
      description: t("contactForm.description"),
      form: {
        fullName: t("contactForm.form.fullName"),
        fullNamePlaceholder: t("contactForm.form.fullNamePlaceholder"),
        email: t("contactForm.form.email"),
        emailPlaceholder: t("contactForm.form.emailPlaceholder"),
        phone: t("contactForm.form.phone"),
        phoneOptional: t("contactForm.form.phoneOptional"),
        phonePlaceholder: t("contactForm.form.phonePlaceholder"),
        company: t("contactForm.form.company"),
        companyPlaceholder: t("contactForm.form.companyPlaceholder"),
        message: t("contactForm.form.message"),
        messagePlaceholder: t("contactForm.form.messagePlaceholder"),
        sendMessage: t("contactForm.form.sendMessage"),
        sendingMessage: t("contactForm.form.sendingMessage"),
        messageSent: t("contactForm.form.messageSent"),
        errorTitle: t("contactForm.form.errorTitle"),
        errorDescription: t("contactForm.form.errorDescription"),
        contactEmail: t("contactForm.form.contactEmail"),
      },
      validation: {
        nameRequired: t("contactForm.validation.nameRequired"),
        nameMinLength: t("contactForm.validation.nameMinLength"),
        emailRequired: t("contactForm.validation.emailRequired"),
        emailInvalid: t("contactForm.validation.emailInvalid"),
        phoneInvalid: t("contactForm.validation.phoneInvalid"),
        messageRequired: t("contactForm.validation.messageRequired"),
        messageMinLength: t("contactForm.validation.messageMinLength"),
      },
      directContact: {
        title: t("contactForm.directContact.title"),
        phone: t("contactForm.directContact.phone"),
        email: t("contactForm.directContact.email"),
      },
    },
  };
};

