import RAdminTab from "@/components/admin/RAdminTab"

const AdminLayout = ({children}) => {

  return (
    <>
        <RAdminTab />
        {children}
    </>
  )
}

export default AdminLayout  