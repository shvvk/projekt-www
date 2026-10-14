const GA_ID = "G-9X4GP70LSD";
const CHOICE_KEY = "course-analytics-choice";
let analyticsStarted = false;
window.dataLayer = window.dataLayer || [];

window.gtag = function () {
window.dataLayer.push(arguments);
};

function startAnalytics() {
if (analyticsStarted) return;
analyticsStarted = true;
gtag("consent", "default", {
analytics_storage: "granted",
ad_storage: "denied",
ad_user_data: "denied",
ad_personalization: "denied"
});
gtag("js", new Date());
const config = {};
if (new URLSearchParams(location.search).get("debug") === "1") {
config.debug_mode = true;
}
gtag("config", GA_ID, config);
const tag = document.createElement("script");
tag.async = true;
tag.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
const status = document.getElementById("analytics-status");
document.getElementById("analytics-accept")
.addEventListener("click", () => {
sessionStorage.setItem(CHOICE_KEY, "accepted");
startAnalytics();
status.textContent = "Analytics accepted for this tab.";
});
document.getElementById("analytics-decline")
.addEventListener("click", () => {
sessionStorage.setItem(CHOICE_KEY, "declined");
location.reload();
});
if (sessionStorage.getItem(CHOICE_KEY) === "accepted") {
startAnalytics();
status.textContent = "Analytics accepted for this tab.";
} else {
status.textContent = "Analytics has not been started.";
}}