const sidebarMenu: any[] = [
    {
        title: "Navigation",
        content: [
            {
                imageUrl: "../../../../assets/images/vertical-sidebar-images/cube.svg",
                title: "Products",
                routerLink: "/seller/app/products"
            },
            {
                imageUrl: "../../../../assets/images/vertical-sidebar-images/truck.svg",
                title: "Orders",
                routerLink: "/seller/app/orders"
            },
            {
                imageUrl: "../../../../assets/images/vertical-sidebar-images/mail.svg",
                title: "Inbox",
                routerLink: "/seller/app/inbox"
            }
        ],
    }
]

const organizationMenu = {
    title: "Organization Settings",
    content: [
        {
            imageUrl: "../../../../assets/images/vertical-sidebar-images/cube.svg",
            title: "Organization Details",
            routerLink: "/seller/app/organization-settings/details"
        },
        {
            imageUrl: "../../../../assets/images/vertical-sidebar-images/users.svg",
            title: "Users",
            routerLink: "/seller/app/organization-settings/users"
        },
        {
            imageUrl: "../../../../assets/images/vertical-sidebar-images/mail.svg",
            title: "Preferences"
        }
    ],
}

export {
    sidebarMenu,
    organizationMenu
}