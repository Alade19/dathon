import {createRouter, createWebHashHistory} from 'vue-router'
import NewHome from '../views/NewHome.vue'
import LoginView from '../views/LoginView.vue'
import ForgotPasswordView from '../views/ForgotPasswordView.vue'
import SignUp from '../views/SignUp.vue'
import AdminPanel from '../views/admin/AdminPanel.vue'
import AdminDashboard from '../views/admin/AdminDashboard.vue'

import NewStudent from '../views/admin/enroll/NewStudent.vue'
import MultipleEnroll from '../views/admin/enroll/MultipleEnroll.vue'
import Branches from '../views/admin/BranchDash.vue'
//import for students####
import ActiveStud from '../views/admin/student/activeStudent/ActiveStudent.vue'
import InactiveStud from '../views/admin/student/InactiveStudent.vue'
import StudentProfile from '../views/admin/student/activeStudent/StudentProfile.vue'
import Promotion from '../views/admin/student/Promotion.vue'
//impots for academics session
import Academic from '../views/admin/academics/AcademicSession.vue'
import SubjectView from '../views/admin/academics/SubjectView.vue'
import AssignSubjectView from '../views/admin/academics/AssignSubjectView.vue'
import ClassSection from '../views/admin/academics/class&Section/ClassSection.vue'
//imports for classshedule
import Timing from "../views/admin/classSchedule/Timing.vue"
import ClassShedule from "../views/admin/classSchedule/ClassSchedule.vue"

// attendance
import TodayAttend from '../views/admin/attendance/TodayAttend.vue'
import PastAttend from '../views/admin/attendance/PastAttend.vue'

// exam master
import MarkDis from '../views/admin/exammaster/MarkDis.vue'
import MarkEntries from '../views/admin/exammaster/MarkEntries.vue'
import GradesScore from '../views/admin/exammaster/GradesScore.vue'

// guardian imports
import GuardianList from '../views/admin/guardian/GuardianList.vue'
import NewGuardian from '../views/admin/guardian/NewGuardian.vue'
import GuardianProfile from '../views/admin/guardian/GuardianProfile.vue'

// setting
import Setting from '../views/admin/setting/SettingCom.vue'

// config
import BranchConfig from '../views/admin/branchconfig/BranchConfig.vue'

//administration imports#######
//emplyeee routes
import EmployeeList from '../views/admin/employee/EmployeeList.vue'
import EditProfile from '../views/admin/employee/EditProfile.vue'
import AddEmployee from '../views/admin/employee/AddEmployee.vue'
import AddDesignation from '../views/admin/employee/AddDesignation.vue'
import AddDepartment from '../views/admin/employee/NewDepartment.vue'
//stduent accounting routes imports
import FeeBreakDown from '../views/admin/accounting/FeeBreakdown.vue'
import FeeGroup from '../views/admin/accounting/FeeGroup.vue'
import Pricing from '../views/admin/accounting/Pricing.vue'

// office accounting
import AccPage from '../views/admin/oaccounting/AccPage.vue'
import AllTrans from '../views/admin/oaccounting/AllTrans.vue'
import NewDeposite from '../views/admin/oaccounting/NewDeposite.vue'
import NewExpense from '../views/admin/oaccounting/NewExpense.vue'
import VouchHead from '../views/admin/oaccounting/VouchHead.vue'

import NewPricing from '../views/admin/accounting/NewPricing.vue'
import FeeAsign from '../views/admin/accounting/FeeAsign.vue'
import Invoice from '../views/admin/accounting/Invoice.vue'
import Fines from '../views/admin/accounting/Fines.vue'
import SetupFine from '../views/admin/accounting/SetFine.vue'
//role and permition imports
import RolePermition from '../views/admin/role/rolePermition.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'newhome',
      component: NewHome
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgotPasswordView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    //side nav
    //The admin  route part
    {
      path: '/admin',
      name: 'admin',
      component: AdminPanel,
      children: [
        {path: "", redirect: 'admin/dashboard'},
        {path: "dashboard", component: AdminDashboard},
        {path: "/admin/branches", component: Branches},

        {
          path: "enroll",
          children: [
            {path: "new-student", component: NewStudent},
            {path: "multiple-enroll", component: MultipleEnroll}
          ]
        },

        {
          path: "student",
          children: [
            {path: "active-student", component: ActiveStud},
            {path: "inactive-student", component: InactiveStud},
            {path: "promotion", component:Promotion },
            {path: "student-profile", component: StudentProfile}
          ]
        },

        {
          path: "academics", children: [
            {path: "academic-session", component: Academic},
            {
              path: "subjects", children: [
                {path: "", component: SubjectView},
                {path: "assign", component: AssignSubjectView},
              ]
            },
            {path:"class-session", component:ClassSection}
          ]
        },

        {
          path: "attendance",
          children: [
            {path: "today-attendance", component: TodayAttend},
            {path: "past-attendance", component: PastAttend}
          ]
        },
        
        //shedule
        {
          path:"class-schedule", children:[
            {path:'timing', component:Timing},
            {path:'class-shed', component:ClassShedule}
          ]
        },
        //exammaster
        {
          path: "exammaster",
          children: [
            {path: "mark-dis", component: MarkDis},
            {path: "mark-entries", component: MarkEntries},
            {path: "grade-score", component: GradesScore},
          ]
        },
        //guardian
        {
          path:"guardian",
          children:[
            {path:"guardian-list", component: GuardianList},
            {path:"guardian-profile", component:GuardianProfile },
            {path:"new-guardian", component: NewGuardian}
          ]
        },
        {
          path:"setting",
          children:[
            {path:"settings", component: Setting},
            
          ]
        },
        {
          path:"branchconfig",
          children:[
            {path:"branch-config", component: BranchConfig},
            
          ]
        },

        //Administartion######
        {
          path:"employee", children:[
            {path:'employee-list', children:[
              {path:'', component:EmployeeList},
              {path:"edit-profile", component:EditProfile}
            
            ]},
            {path:"add-employee", component:AddEmployee},
            {path:'new-designation', component:AddDesignation},
            {path:'new-department', component:AddDepartment}
          ]
        },
        //student accounting 
        {
          path:"accounting", children:[
            {path:"fee-breakdown", component:FeeBreakDown},
            {path:"fee-group", component:FeeGroup},
            {path:"pricing", component:Pricing},
            {path:"new-pricing", component:NewPricing},
            {path:"fee-assign", component:FeeAsign},
            {path:"invoice", component:Invoice},
            {path:'fines', component:Fines},
            {path:'setup-fine', component:SetupFine}
          ]
        },
        //role and permition
        {
          path:"role", children:[
            {path:'permition', children:[
              {path:'', component:RolePermition}
            ]}
          ]
        },

        // office accounting
        {
          path:"oaccounting", children:[
            {path:"acc-page", component:AccPage },
            {path:"all-trans", component:AllTrans},
            {path:"new-deposite", component:NewDeposite},
            {path:"new-expense", component:NewExpense},
            {path:"vouch-head", component:VouchHead}
          ]
        }

      ]
    },
    //admin route part here

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
