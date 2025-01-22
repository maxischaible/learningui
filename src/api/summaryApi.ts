export interface SummaryData {
  summaryText: string;
  summaryImage: string;
  summaryPdf: string;
  mindMapPdf: string;
}

export const fetchSummaryData = async (videoId: string): Promise<SummaryData> => {
  // Simulierte API-Antwort
  
    if (videoId === "123e4567-e89b-12d3-a456-426614174000") {return {
    summaryText:
      "An asylum application is a formal legal process through which an individual seeks protection in a foreign country because they fear persecution, severe harm, or threats to their life in their country of origin. This fear may arise due to specific reasons, such as persecution based on race, religion, nationality, political opinion, or membership in a particular social group. These categories are recognized under international law, particularly in the 1951 Refugee Convention, to ensure protection for those whose fundamental rights are at risk in their home countries. In Germany, the asylum process is overseen by the Federal Office for Migration and Refugees (BAMF), which evaluates each application carefully.\n\nThe asylum procedure begins when the individual files an application with the BAMF. This marks the start of a multi-stage process aimed at determining whether the applicant qualifies for protection under German and international law. The first step is the registration process, during which the applicant's personal details, including biometric data like fingerprints, are recorded. This step ensures that the applicant is properly identified and helps avoid duplicate applications. Following registration, the applicant is usually issued a temporary residence permit. This document allows them to remain legally in Germany while their application is under review and provides access to basic services, such as housing, healthcare, and, in some cases, limited work opportunities.\n\nA critical part of the process is the personal interview conducted by the BAMF. During this interview, the applicant is given an opportunity to present their story in detail, explaining the reasons for their flight and the specific dangers they face in their home country. This step is essential as it provides the authorities with firsthand insight into the applicant's situation. The interview is typically conducted with the assistance of an interpreter if needed and is documented thoroughly to ensure accuracy and transparency.\n\nThe BAMF then assesses the credibility of the applicant's statements and evaluates whether the conditions for granting asylum, subsidiary protection, or other forms of humanitarian protection are met. Asylum is granted to individuals who face persecution due to the aforementioned grounds. Subsidiary protection is provided to those who do not qualify as refugees under the 1951 Convention but would face serious harm, such as torture or death, if returned to their home country. In cases where neither asylum nor subsidiary protection is granted, the BAMF may issue a ban on deportation if the return would lead to significant threats to the individual's life or health due to specific circumstances in their home country.\n\nThe asylum procedure in Germany is designed to ensure that every application is reviewed comprehensively and fairly. While the process may involve several stages and take time, it reflects Germany's commitment to upholding human rights and international obligations to protect those fleeing persecution and danger.\n\nDisclosure: This text was automatically generated. Please read here for more information.",
    summaryImage: "mind_map.png",
    summaryPdf: "summary.pdf",
    mindMapPdf: "mindmap.pdf",
  }}
  else{return {
    summaryText:
      "This course provides practical and in-depth guidance on the entire lifecycle of refugee data, from ethical collection methods and secure storage practices to insightful analysis techniques and responsible utilization strategies.",
    summaryImage: "mind_map.png",
    summaryPdf: "summary.pdf",
    mindMapPdf: "mindmap.pdf",
  }}
};
