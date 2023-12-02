import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//Layout
import DefaultLayout from "~/layouts";
//Setting
import HolidayManagment from "./pages/Setting/holiday/HolidayManagment";
import MenuPermission from "./pages/Setting/menu/MenuPermission";
import PaymentRefund from "./pages/Setting/terms/PaymentRefund";
import PrivacyPolicy from "./pages/Setting/terms/PrivacyPolicy";
import PromotionTerms from "./pages/Setting/terms/PromotionTerms";
import TermsUse from "./pages/Setting/terms/TermsUse";
import AdminSetting from "./pages/Setting/web/AdminSetting";
import MailSetting from "./pages/Setting/web/MailSetting";
import PGSetting from "./pages/Setting/web/PGSetting";
import SMSSetting from "./pages/Setting/web/SMSSetting";
import WebSetting from "./pages/Setting/web/WebSetting";
//RoleManagement
import RoleAccountList from "./pages/RoleManagement/account_list/AccountList";
import RoleAddNewAccount from "./pages/RoleManagement/add_new_account";
//UserManagement
import UserAccountList from "./pages/UserManagement/account_list";
import UserAddNewAccount from "./pages/UserManagement/add_new_account";
//TeacherManagement
import Book from "./pages/ContentsManagement/Book";
import Curriculum from "./pages/ContentsManagement/Curriculum";
import CurriculumComposition from "./pages/ContentsManagement/CurriculumComposition";
import TeacherAccountList from "./pages/TeacherManagement/account_list";
import TeacherAddNewAccount from "./pages/TeacherManagement/add_new_account";
import ClassFeedback from "./pages/TeacherManagement/class_feedback";
import Payment from "./pages/TeacherManagement/payment";
import PointPenalty from "./pages/TeacherManagement/point_penalty";
import TeacherVacationAndResignation from "./pages/TeacherManagement/vacation_and_resignation";
import TeacherWorkingHours from "./pages/TeacherManagement/working_hours";

function App() {
  return (
    <Router>
      <div className="App">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/setting/webSetting" element={<WebSetting />} />
            <Route path="/setting/mailSetting" element={<MailSetting />} />
            <Route path="/setting/adminSetting" element={<AdminSetting />} />
            <Route path="/setting/smsSetting" element={<SMSSetting />} />
            <Route path="/setting/pgSetting" element={<PGSetting />} />

            <Route path="/setting/terms" element={<TermsUse />} />
            <Route path="/setting/privacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/setting/paymentRefund" element={<PaymentRefund />} />
            <Route
              path="/setting/promotionTerms"
              element={<PromotionTerms />}
            />
            <Route path="/setting/holiday" element={<HolidayManagment />} />
            <Route path="/setting/menu" element={<MenuPermission />} />

            <Route path="/role/accountlist" element={<RoleAccountList />} />
            <Route path="/role/addnewaccount" element={<RoleAddNewAccount />} />

            <Route path="/user/accountlist" element={<UserAccountList />} />
            <Route path="/user/addnewaccount" element={<UserAddNewAccount />} />

            <Route
              path="/teacher/accountlist"
              element={<TeacherAccountList />}
            />
            <Route
              path="/teacher/addnewaccount"
              element={<TeacherAddNewAccount />}
            />
            <Route
              path="/teacher/workinghours"
              element={<TeacherWorkingHours />}
            />
            <Route
              path="/teacher/vacationandresignation"
              element={<TeacherVacationAndResignation />}
            />
            <Route path="/teacher/pointpenalty" element={<PointPenalty />} />
            <Route path="/teacher/classfeedback" element={<ClassFeedback />} />
            <Route path="/teacher/payment" element={<Payment />} />

            <Route path="/contents/book" element={<Book />} />
            <Route path="/contents/curriculum" element={<Curriculum />} />
          </Route>

          <Route path="/contents/curriculum/page" element={<CurriculumComposition />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
