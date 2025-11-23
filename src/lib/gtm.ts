export const sendGTMEvent = (eventName: string, eventData: any = {}) => {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...eventData,
  });
};
