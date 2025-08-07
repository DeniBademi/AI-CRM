/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'home',
        title: 'Home',
        type : 'basic',
        icon : 'heroicons_outline:home',
        link : '/home'
    },
    {
        id   : 'apps.accounts-contacts',
        title: 'Accounts & Contacts',
        type : 'basic',
        icon : 'heroicons_outline:user-group',
        link : '/apps/accounts-contacts'
    },
    {
        id   : 'apps.leads-workbooks',
        title: 'Leads & Workbooks',
        type : 'basic',
        disabled: true,
        icon : 'heroicons_outline:table-cells',
        link : '/apps/leads-workbooks'
    },
    {
        id   : 'apps.unibox',
        title: 'Unibox',
        type : 'basic',
        icon : 'heroicons_outline:envelope',
        link : '/apps/unibox'
    },
    {
        id   : 'apps.tasks',
        title: 'Tasks',
        type : 'basic',
        icon : 'heroicons_outline:clipboard-document-list',
        link : '/apps/tasks'
    },
    {
        id   : 'apps.workflows',
        title: 'Workflows',
        disabled: true,
        type : 'basic',
        icon : 'heroicons_outline:arrow-path-rounded-square',
        link : '/apps/workflows'
    },
    {
        id   : 'apps.calendar',
        title: 'Calendar',
        disabled: true,
        type : 'basic',
        icon : 'heroicons_outline:calendar',
        link : '/apps/calendar'
    },
    {
        id   : 'apps.ai-content',
        title: 'AI Content',
        type : 'basic',
        disabled: true,
        icon : 'heroicons_outline:sparkles',
        link : '/apps/ai-content'
    },
    {
        id   : 'apps.reporting-analytics',
        title: 'Engage',
        type : 'basic',
        disabled: true,
        icon : 'heroicons_outline:chat-bubble-left-right',
        link : '/apps/engage'
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    },
    {
        id   : 'crm',
        title: 'CRM',
        type : 'group',
        icon : 'heroicons_outline:users',
        children: [
            {
                id   : 'crm.home',
                title: 'Home',
                type : 'basic',
                icon : 'heroicons_outline:home',
                link : '/crm/home'
            },
            {
                id   : 'crm.accounts-contacts',
                title: 'Accounts & Contacts',
                type : 'basic',
                icon : 'heroicons_outline:user-group',
                link : '/crm/accounts-contacts'
            },
            {
                id   : 'crm.leads-workbooks',
                title: 'Leads & Workbooks',
                type : 'basic',
                icon : 'heroicons_outline:table-cells',
                link : '/crm/leads-workbooks'
            },
            {
                id   : 'crm.inbox',
                title: 'Inbox',
                type : 'basic',
                icon : 'heroicons_outline:inbox',
                link : '/crm/inbox'
            },
            {
                id   : 'crm.tasks-workflows',
                title: 'Tasks & Workflows',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-document-list',
                link : '/crm/tasks-workflows'
            },
            {
                id   : 'crm.calendar',
                title: 'Calendar',
                type : 'basic',
                icon : 'heroicons_outline:calendar',
                link : '/crm/calendar'
            },
            {
                id   : 'crm.ai-content',
                title: 'AI Content',
                type : 'basic',
                icon : 'heroicons_outline:sparkles',
                link : '/crm/ai-content'
            },
            {
                id   : 'crm.reporting-analytics',
                title: 'Reporting & Analytics',
                type : 'basic',
                icon : 'heroicons_outline:chart-bar',
                link : '/crm/reporting-analytics'
            },
            {
                id   : 'crm.fine-tune-ai',
                title: 'Fine-tune your AI',
                type : 'basic',
                icon : 'heroicons_outline:cog',
                link : '/crm/fine-tune-ai'
            }
        ]
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    },
    {
        id   : 'crm',
        title: 'CRM',
        type : 'group',
        icon : 'heroicons_outline:users',
        children: [
            {
                id   : 'crm.home',
                title: 'Home',
                type : 'basic',
                icon : 'heroicons_outline:home',
                link : '/crm/home'
            },
            {
                id   : 'crm.accounts-contacts',
                title: 'Accounts & Contacts',
                type : 'basic',
                icon : 'heroicons_outline:user-group',
                link : '/crm/accounts-contacts'
            },
            {
                id   : 'crm.leads-workbooks',
                title: 'Leads & Workbooks',
                type : 'basic',
                icon : 'heroicons_outline:table-cells',
                link : '/crm/leads-workbooks'
            },
            {
                id   : 'crm.inbox',
                title: 'Inbox',
                type : 'basic',
                icon : 'heroicons_outline:inbox',
                link : '/crm/inbox'
            },
            {
                id   : 'crm.tasks-workflows',
                title: 'Tasks & Workflows',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-document-list',
                link : '/crm/tasks-workflows'
            },
            {
                id   : 'crm.calendar',
                title: 'Calendar',
                type : 'basic',
                icon : 'heroicons_outline:calendar',
                link : '/crm/calendar'
            },
            {
                id   : 'crm.ai-content',
                title: 'AI Content',
                type : 'basic',
                icon : 'heroicons_outline:sparkles',
                link : '/crm/ai-content'
            },
            {
                id   : 'crm.reporting-analytics',
                title: 'Reporting & Analytics',
                type : 'basic',
                icon : 'heroicons_outline:chart-bar',
                link : '/crm/reporting-analytics'
            },
            {
                id   : 'crm.fine-tune-ai',
                title: 'Fine-tune your AI',
                type : 'basic',
                icon : 'heroicons_outline:cog',
                link : '/crm/fine-tune-ai'
            }
        ]
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    },
    {
        id   : 'crm',
        title: 'CRM',
        type : 'group',
        icon : 'heroicons_outline:users',
        children: [
            {
                id   : 'crm.home',
                title: 'Home',
                type : 'basic',
                icon : 'heroicons_outline:home',
                link : '/crm/home'
            },
            {
                id   : 'crm.accounts-contacts',
                title: 'Accounts & Contacts',
                type : 'basic',
                icon : 'heroicons_outline:user-group',
                link : '/crm/accounts-contacts'
            },
            {
                id   : 'crm.leads-workbooks',
                title: 'Leads & Workbooks',
                type : 'basic',
                icon : 'heroicons_outline:table-cells',
                link : '/crm/leads-workbooks'
            },
            {
                id   : 'crm.inbox',
                title: 'Inbox',
                type : 'basic',
                icon : 'heroicons_outline:inbox',
                link : '/crm/inbox'
            },
            {
                id   : 'crm.tasks-workflows',
                title: 'Tasks & Workflows',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-document-list',
                link : '/crm/tasks-workflows'
            },
            {
                id   : 'crm.calendar',
                title: 'Calendar',
                type : 'basic',
                icon : 'heroicons_outline:calendar',
                link : '/crm/calendar'
            },
            {
                id   : 'crm.ai-content',
                title: 'AI Content',
                type : 'basic',
                icon : 'heroicons_outline:sparkles',
                link : '/crm/ai-content'
            },
            {
                id   : 'crm.reporting-analytics',
                title: 'Reporting & Analytics',
                type : 'basic',
                icon : 'heroicons_outline:chart-bar',
                link : '/crm/reporting-analytics'
            },
            {
                id   : 'crm.fine-tune-ai',
                title: 'Fine-tune your AI',
                type : 'basic',
                icon : 'heroicons_outline:cog',
                link : '/crm/fine-tune-ai'
            }
        ]
    }
];
