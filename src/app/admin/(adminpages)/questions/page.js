import RAdminBanner from "@/components/admin/RAdminBanner"
import { questionsData } from "@/store/adminData"

export const metadata = {
  title: questionsData.siteTitle,
}

const AdminQuestions = () => {
    return (
      <>
        <RAdminBanner 
            breadcrumbData={questionsData.questions.breadcrumb}
            title={questionsData.questions.title}
        ></RAdminBanner>
      </>
    )
  }
  
  export default AdminQuestions