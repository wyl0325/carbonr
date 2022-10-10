import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/dischargeOverview.vue";
// import Discharge from "../views/dischargeOverview.vue";
import ComparionAnalysis from "../views/DischargeAnalyis/comparisonAnalysis.vue";
// import comparionAnalysis from "../views/dischargeOverview.vue";
import DischargeAnalysis from "../views/DischargeAnalyis/dischargeAnalysis.vue";
import KPI from "../views/dischargeAnalyis/KPI.vue";
import DischargeAllow from "../views/DischargeManagement/dischargeAllow.vue";
import DischargeReport from "../views/DischargeManagement/dischargeReport.vue";
import AccounitingUnit from "../views/BasicConfiguration/accountingUnit.vue";
import AccountingSubject from "../views/BasicConfiguration/accountingSubject.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/carbonr1",
    name: "comparionAnalysis",
    component: ComparionAnalysis,
  },
  {
    path: "/carbonr2",
    name: "dischargeAnalysis",
    component: DischargeAnalysis,
  },
  {
    path: "/carbonr3",
    name: "KPI",
    component: KPI,
  },
  {
    path: "/carbonr4",
    name: "dischargeAllow",
    component: DischargeAllow,
  },
  {
    path: "/carbonr5",
    name: "dischargeReport",
    component: DischargeReport,
  },
  {
    path: "/carbonr6",
    name: "accounitingUnit",
    component: AccounitingUnit,
  },
  {
    path: "/carbonr7",
    name: "accountingSubject",
    component: AccountingSubject,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
