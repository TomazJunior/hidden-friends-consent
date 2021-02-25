import {
    Menu,
    Segment,
    Sidebar,
} from 'semantic-ui-react'
export const DashboardSidebar = () => {
    return (
        <Sidebar.Pushable className="sidebar-wrapper" as={Segment}>
            <Menu.Item className="sidebar-header sidebar-item">
                <div>Dashboards</div>
            </Menu.Item>
        </Sidebar.Pushable>
    )
}
