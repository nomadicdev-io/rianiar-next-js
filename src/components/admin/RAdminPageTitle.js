
const RAdminPageTitle = ({title, greetings}) => {

  const currentHour = new Date().getHours()

  return (
    <div className="r_admin_page_title">
        {
          greetings && <p><span>Hello,</span> {currentHour < 12 ? 'Good Morning' : currentHour < 17 ? 'Good Afternoon' : 'Good Evening'}</p>
        }
        { title && <h1>{title}</h1>}
    </div>
  )
}

export default RAdminPageTitle