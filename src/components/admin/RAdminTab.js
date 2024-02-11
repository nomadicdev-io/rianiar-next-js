
const RAdminTab = () => {
  return (
    <div className="r_admin_tab">
        <ul>
            <li>
                <button className="active_"><span>All Registraions</span></button>
            </li>
            <li>
                <button><span>Latest</span></button>
            </li>
            <li>
                <button><span>Viewed</span></button>
            </li>
            <li>
                <button><span>Saved</span></button>
            </li>
            <li>
                <button><span>Blacklisted</span></button>
            </li>
        </ul>
    </div>
  )
}

export default RAdminTab