const adminStore ={
    shortTitle: 'RianAir',
    title: 'RianAir-The Sky is Ours',
    pages: {
        dashboard: {
            title: 'Dashboard',
            slug: '/admin',
            breadcrumb: [
                {
                   title: 'Dashboard',
                   slug: '/admin'
                }
             ]
        },
        registrations: {
            title: 'Registraion',
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
                    title: 'All Registration',
                    slug: '/admin/registrations'
                },
                {
                    title: 'New',
                    slug: '/admin/registrations/new'
                },
                {
                    title: 'Viewed',
                    slug: '/admin/registrations/viewed'
                },
                {
                    title: 'Saved',
                    slug: '/admin/registrations/saved'
                },
                {
                    title: 'Blacklisted',
                    slug: '/admin/registrations/blacklisted'
                }
            ]
        },
        account: {
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
        assistance: {
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
        programs: {
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
        questions: {
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
        settings: {
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
        socialMediaLinks: {
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
    }

}

export default adminStore;