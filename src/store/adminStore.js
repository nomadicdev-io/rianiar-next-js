const adminStore ={
    shortTitle: 'RianAir',
    title: 'RianAir-The Sky is Ours',
    pages: [
        {
            key: 'admin',
            title: 'Dashboard',
            slug: '/admin',
            breadcrumb: [
                {
                   title: 'Dashboard',
                   slug: '/admin'
                }
             ]
        },
        {
            key: 'registrations',
            title: 'Registraions',
            slug: '/admin/registrations',
            breadcrumb: [
                {
                    title: 'Dashboard',
                    slug: '/admin'
                },
                {
                    title: 'Registraion',
                    slug: '/admin/registrations'
                    }
            ],
            children: [
                {
                    key: 'all_registraions',
                    title: 'All Registration',
                    slug: '/admin/registrations'
                },
                {
                    key: 'new_registraions',
                    title: 'New',
                    slug: '/admin/registrations/new'
                },
                {
                    key: 'viewed_registraions',
                    title: 'Viewed',
                    slug: '/admin/registrations/viewed'
                },
                {
                    key: 'saved_registraions',
                    title: 'Saved',
                    slug: '/admin/registrations/saved'
                },
                {
                    key: 'blacklisted_registraions',
                    title: 'Blacklisted',
                    slug: '/admin/registrations/blacklisted'
                }
            ]
        },
        {
            key: 'account',
            title: 'User Account',
            slug: '/admin/account',
            breadcrumb: [
                {
                    title: 'Dashboard',
                    slug: '/admin'
                },
                {
                    title: 'User Account',
                    slug: '/admin/account'
                    }
            ]
        },
        {
            key: 'assistance',
            title: 'Assistance',
            slug: '/admin/assistance',
            breadcrumb: [
                {
                    title: 'Dashboard',
                    slug: '/admin'
                },
                {
                    title: 'Assistance',
                    slug: '/admin/assistance'
                    }
            ]
        },
        {
            key: 'programs',
            title: 'Programs',
            slug: '/admin/programs',
            breadcrumb: [
                {
                    title: 'Dashboard',
                    slug: '/admin'
                },
                {
                    title: 'Programs',
                    slug: '/admin/programs'
                    }
            ]
        },
        {
            key: 'questions',
            title: 'Questions',
            slug: '/admin/questions',
            breadcrumb: [
                {
                    title: 'Dashboard',
                    slug: '/admin'
                },
                {
                    title: 'Questions',
                    slug: '/admin/questions'
                    }
            ]
        },
        {
            key: 'settings',
            title: 'App Settings',
            slug: '/admin/settings',
            breadcrumb: [
                {
                    title: 'Dashboard',
                    slug: '/admin'
                },
                {
                    title: 'App Settings',
                    slug: '/admin/settings'
                    }
            ]
        },
        {
            key: 'social-links',
            title: 'Social Media Links',
            slug: '/admin/social-links',
            breadcrumb: [
                {
                    title: 'Dashboard',
                    slug: '/admin'
                },
                {
                    title: 'Social Media Links',
                    slug: '/admin/social-links'
                    }
            ]
        }
    ]
}

export default adminStore; 