export const alertMessages = [
  {
    id: 1,
    icon: "CircleX",
    text: "Wasting valuable analyst time on false positives",
  },
  {
    id: 2,
    icon: "LaptopMinimal",
    text: "Processing one alert at a time, missing the big picture",
  },
  {
    id: 3,
    icon: "Info",
    text: "More time fixing SOAR automation, less time on real threats",
  },
];

export const withSimbianAlertMessages = [
  {
    id: 1,
    icon: "CircleUserRound",
    title: "Less noise",
    text: "90% of alerts resolved automatically, 24/7",
  },
  {
    id: 2,
    icon: "Cable",
    title: "Holistic insights",
    text: "Correlates alerts and your environment into the big picture",
  },
  {
    id: 3,
    icon: "FileJson",
    title: "Adapts automatically",
    text: "No SOAR needed, Investigate every alert, including new ones, with best of Simbian's knowlege and yours.",
  },
];

// Alert cards data array
export const alertCardData = [
  {
    id: "ignored-alerts",
    title: "Ignored Alerts",
    icon: "BellOff",
    defaultCount: 200,
    timeout: 1500,
    alertIcons: [
      { icon: "Mail", text: "Unauthorized Access" },
      { icon: "Lock", text: "Unauthorized Access" },
      { icon: "ShieldX", text: "Unauthorized Access" },
      { icon: "Bug", text: "Unauthorized Access" },
      { icon: "EarthLock", text: "Suspicious Login" },
    ],
    initialAlerts: [
      { id: 1, icon: "Lock", text: "Unauthorized Access" },
      { id: 2, icon: "Mail", text: "Unauthorized Access" },
      { id: 3, icon: "Lock", text: "Unauthorized Access" },
      { id: 4, icon: "ShieldX", text: "Phishing Email" },
      { id: 5, icon: "Bug", text: "Suspicious Login" },
      { id: 6, icon: "ShieldX", text: "Unauthorized Access" },
      { id: 7, icon: "Bug", text: "Unauthorized Access" },
      { id: 8, icon: "EarthLock", text: "Suspicious Login" },
      { id: 9, icon: "ShieldX", text: "Unauthorized Access" },
      { id: 10, icon: "Bug", text: "Unauthorized Access" },
      { id: 11, icon: "EarthLock", text: "Suspicious Login" },
    ],
  },
  {
    id: "wrongly-closed",
    title: "Wrongly Closed",
    icon: "CircleX",
    defaultCount: 35,
    timeout: 3000,
    alertIcons: [
      { icon: "ShieldX", text: "Unauthorized Access" },
      { icon: "Bug", text: "Unauthorized Access" },
      { icon: "EarthLock", text: "Suspicious Login" },
      { icon: "Mail", text: "Unauthorized Access" },
      { icon: "Lock", text: "Unauthorized Access" },
    ],
    initialAlerts: [
      { id: 1, icon: "ShieldX", text: "Phishing Email" },
      { id: 2, icon: "Bug", text: "Suspicious Login" },
      { id: 3, icon: "ShieldX", text: "Unauthorized Access" },
      { id: 4, icon: "Bug", text: "Unauthorized Access" },
      { id: 5, icon: "EarthLock", text: "Suspicious Login" },
      { id: 6, icon: "ShieldX", text: "Unauthorized Access" },
      { id: 7, icon: "Bug", text: "Unauthorized Access" },
      { id: 8, icon: "EarthLock", text: "Suspicious Login" },
      { id: 9, icon: "Mail", text: "Unauthorized Access" },
      { id: 10, icon: "Lock", text: "Unauthorized Access" },
      { id: 11, icon: "Mail", text: "Unauthorized Access" },
      { id: 12, icon: "Lock", text: "Unauthorized Access" },
    ],
  },
  {
    id: "active-threats",
    title: "Active Threats",
    icon: "ShieldQuestion",
    defaultCount: 5,
    timeout: 2500,
    alertIcons: [
      { icon: "Mail", text: "Unauthorized Access" },
      { icon: "Lock", text: "Unauthorized Access" },
      { icon: "ShieldX", text: "Unauthorized Access" },
      { icon: "Bug", text: "Unauthorized Access" },
      { icon: "EarthLock", text: "Suspicious Login" },
    ],
    initialAlerts: [
      { id: 1, icon: "ShieldX", text: "Phishing Email" },
      { id: 2, icon: "Bug", text: "Suspicious Login" },
    ],
  },
];

// Step flow data with icon
export const stepsData = [
  {
    id: 1,
    title: "Triaged & Reported",
    subtitle: "SOC Agent handled investigation and reporting",
    icon: "CheckCircle",
  },
  {
    id: 2,
    title: "Automated Response",
    subtitle: "Incident automatically contained",
    icon: "Zap",
  },
  {
    id: 3,
    title: "Comprehensive Analysis",
    subtitle: "AI recognized patterns",
    icon: "Brain",
  },
  {
    id: 4,
    title: "Accurate Detection",
    subtitle: "Zero false positives",
    icon: "ShieldCheck",
  },
  {
    id: 5,
    title: "24/7 Coverage",
    subtitle: "No analyst fatigue",
    icon: "Clock",
  },
];
