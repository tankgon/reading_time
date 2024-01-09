import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//Layout
import AdminLayout from "./layouts/AdminLayout";
import TeacherLayout from "./layouts/TeacherLayout";
//admin
import AssignmentFreeTrial from "./pages/admin/AssignmentManagement/Assignment/Free-Trial";
import AssignmentRegular from "./pages/admin/AssignmentManagement/Assignment/Regular";
import MonthlyDashboard from "./pages/admin/AssignmentManagement/Dashboard/MonthlyDashboard";
import TodayDashboard from "./pages/admin/AssignmentManagement/Dashboard/TodayDashboard";
import ClassFreeTrial from "./pages/admin/ClassManagement/Free_TrialClass";
import ClassRegular from "./pages/admin/ClassManagement/RegularClass";
import Book from "./pages/admin/ContentsManagement/Book";
import Curriculum from "./pages/admin/ContentsManagement/Curriculum";
import CurriculumComposition from "./pages/admin/ContentsManagement/CurriculumComposition";
import PaymentManagement from "./pages/admin/PaymentManagement/payment_management";
import FreeTrial from "./pages/admin/ProductManagement/Free-Trial";
import Regular from "./pages/admin/ProductManagement/Regular";
import TeacherReport from "./pages/admin/Reports/Teacher";
import UserReport from "./pages/admin/Reports/User";
import RoleAccountList from "./pages/admin/RoleManagement/account_list/AccountList";
import RoleAddNewAccount from "./pages/admin/RoleManagement/add_new_account";
import HolidayManagment from "./pages/admin/Setting/holiday";
import MenuPermission from "./pages/admin/Setting/menu";
import PaymentRefund from "./pages/admin/Setting/terms/PaymentRefund";
import PrivacyPolicy from "./pages/admin/Setting/terms/PrivacyPolicy";
import PromotionTerms from "./pages/admin/Setting/terms/PromotionTerms";
import TermsUse from "./pages/admin/Setting/terms/TermsUse";
import AdminSetting from "./pages/admin/Setting/web/AdminSetting";
import MailSetting from "./pages/admin/Setting/web/MailSetting";
import PGSetting from "./pages/admin/Setting/web/PGSetting";
import SMSSetting from "./pages/admin/Setting/web/SMSSetting";
import WebSetting from "./pages/admin/Setting/web/WebSetting";
import TeacherAccountList from "./pages/admin/TeacherManagement/account_list";
import TeacherAddNewAccount from "./pages/admin/TeacherManagement/add_new_account";
import ClassFeedback from "./pages/admin/TeacherManagement/class_feedback";
import Payment from "./pages/admin/TeacherManagement/payment";
import PointPenalty from "./pages/admin/TeacherManagement/point_penalty";
import TeacherVacationAndResignation from "./pages/admin/TeacherManagement/vacation_and_resignation";
import TeacherWorkingHours from "./pages/admin/TeacherManagement/working_hours";
import DetailWorking from "./pages/admin/TeacherManagement/working_hours/AccountList/DetailWorking";
import UserAccountList from "./pages/admin/UserManagement/account_list";
import UserAddNewAccount from "./pages/admin/UserManagement/add_new_account";
import Banner from "./pages/admin/WebsiteManagement/Banner";
import FAQ from "./pages/admin/WebsiteManagement/Board/FAQ";
import TitleFAQ from "./pages/admin/WebsiteManagement/Board/FAQ/title";
import Notice from "./pages/admin/WebsiteManagement/Board/Notice";
import TitleNotice from "./pages/admin/WebsiteManagement/Board/Notice/title";
import Support from "./pages/admin/WebsiteManagement/Board/Support";
import Coupon from "./pages/admin/WebsiteManagement/Coupon";

//authen
import SignIn from "./pages/authentication/signin";
//teacher
import AssignmentStatus from "./pages/teacher/Assignment Status";
import ClassFeedbackTeacher from "./pages/teacher/ClassFeedback";
import ClassManagement from "./pages/teacher/ClassManagement";
import TeacherDashboard from "./pages/teacher/Dashboard";
import MyPage from "./pages/teacher/Mypage";

const admin = [
  {
    router: "/setting/webSetting",
    content: <WebSetting />,
  },
  {
    router: "/setting/mailSetting",
    content: <MailSetting />,
  },
  {
    router: "/setting/adminSetting",
    content: <AdminSetting />,
  },
  {
    router: "/setting/smsSetting",
    content: <SMSSetting />,
  },
  {
    router: "/setting/pgSetting",
    content: <PGSetting />,
  },
  {
    router: "/setting/terms",
    content: <TermsUse />,
  },
  {
    router: "/setting/privacyPolicy",
    content: <PrivacyPolicy />,
  },
  {
    router: "/setting/paymentRefund",
    content: <PaymentRefund />,
  },
  {
    router: "/setting/promotionTerms",
    content: <PromotionTerms />,
  },
  {
    router: "/setting/holiday",
    content: <HolidayManagment />,
  },
  {
    router: "/setting/menu",
    content: <MenuPermission />,
  },
  {
    router: "/role/accountlist",
    content: <RoleAccountList />,
  },
  {
    router: "/role/addnewaccount",
    content: <RoleAddNewAccount />,
  },
  {
    router: "/user/accountlist",
    content: <UserAccountList />,
  },
  {
    router: "/user/addnewaccount",
    content: <UserAddNewAccount />,
  },
  {
    router: "/teacher/accountlist",
    content: <TeacherAccountList />,
  },
  {
    router: "/teacher/addnewaccount",
    content: <TeacherAddNewAccount />,
  },
  {
    router: "/teacher/workinghours",
    content: <TeacherWorkingHours />,
  },
  {
    router: "/teacher/workinghours/detailworking",
    content: <DetailWorking />,
  },
  {
    router: "/teacher/vacationandresignation",
    content: <TeacherVacationAndResignation />,
  },
  {
    router: "/teacher/pointpenalty",
    content: <PointPenalty />,
  },
  {
    router: "/teacher/classfeedback",
    content: <ClassFeedback />,
  },
  {
    router: "/teacher/payment",
    content: <Payment />,
  },
  {
    router: "/contents/book",
    content: <Book />,
  },
  {
    router: "/contents/curriculum",
    content: <Curriculum />,
  },
  {
    router: "/product/regular",
    content: <Regular />,
  },
  {
    router: "/product/freetrial",
    content: <FreeTrial />,
  },
  {
    router: "/payment/paymentmanagement",
    content: <PaymentManagement />,
  },
  {
    router: "/assignment/dashboard/monthlydashboard",
    content: <MonthlyDashboard />,
  },
  {
    router: "/assignment/dashboard/todaydashboard",
    content: <TodayDashboard />,
  },
  {
    router: "/assignment/assignment/assignmentregular",
    content: <AssignmentRegular />,
  },
  {
    router: "/assignment/assignment/assignmentfreetrial",
    content: <AssignmentFreeTrial />,
  },
  {
    router: "/class/classregular",
    content: <ClassRegular />,
  },
  {
    router: "/class/classfreetrial",
    content: <ClassFreeTrial />,
  },
  {
    router: "/website/coupon",
    content: <Coupon />,
  },
  {
    router: "/website/banner",
    content: <Banner />,
  },
  {
    router: "/website/board/notice",
    content: <Notice />,
  },
  {
    router: "/website/board/notice/title",
    content: <TitleNotice />,
  },
  {
    router: "/website/board/FAQ",
    content: <FAQ />,
  },
  {
    router: "/website/board/FAQ/title",
    content: <TitleFAQ />,
  },
  {
    router: "/website/board/support",
    content: <Support />,
  },
  {
    router: "/report/usereport",
    content: <UserReport />,
  },
  {
    router: "/report/teacherreport",
    content: <TeacherReport />,
  },
  {
    router: "/contents/curriculum/page",
    content: <CurriculumComposition />,
  },
];

const teacher = [
  {
    router: "dashboard",
    content: <TeacherDashboard />,
  },
  {
    router: "assignment",
    content: <AssignmentStatus />,
  },
  {
    router: "classmanagement",
    content: <ClassManagement />,
  },
  {
    router: "classfeedbackteacher",
    content: <ClassFeedbackTeacher />,
  },
  {
    router: "mypage",
    content: <MyPage />,
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="" element={<AdminLayout />}>
            {admin.map((item) => {
              return (
                <Route
                  key={item.router}
                  path={item.router}
                  element={item.content}
                />
              );
            })}
          </Route>
          <Route path="" element={<TeacherLayout />}>
            {teacher.map((item) => {
              return (
                <Route
                  key={item.router}
                  path={item.router}
                  element={item.content}
                />
              );
            })}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
