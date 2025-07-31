import { Route } from '@angular/router';
import { HomeComponent } from 'app/modules/admin/crm/home/home.component';
import { AccountsContactsComponent } from 'app/modules/admin/crm/accounts-contacts/accounts-contacts.component';
import { LeadsWorkbooksComponent } from 'app/modules/admin/crm/leads-workbooks/leads-workbooks.component';
import { InboxComponent } from 'app/modules/admin/crm/inbox/inbox.component';
import { TasksWorkflowsComponent } from 'app/modules/admin/crm/tasks-workflows/tasks-workflows.component';
import { CalendarComponent } from 'app/modules/admin/crm/calendar/calendar.component';
import { AiContentComponent } from 'app/modules/admin/crm/ai-content/ai-content.component';
import { ReportingAnalyticsComponent } from 'app/modules/admin/crm/reporting-analytics/reporting-analytics.component';
import { FineTuneAiComponent } from 'app/modules/admin/crm/fine-tune-ai/fine-tune-ai.component';

export default [
    {
        path     : 'home',
        component: HomeComponent,
    },
    {
        path     : 'accounts-contacts',
        component: AccountsContactsComponent,
    },
    {
        path     : 'leads-workbooks',
        component: LeadsWorkbooksComponent,
    },
    {
        path     : 'inbox',
        component: InboxComponent,
    },
    {
        path     : 'tasks-workflows',
        component: TasksWorkflowsComponent,
    },
    {
        path     : 'calendar',
        component: CalendarComponent,
    },
    {
        path     : 'ai-content',
        component: AiContentComponent,
    },
    {
        path     : 'reporting-analytics',
        component: ReportingAnalyticsComponent,
    },
    {
        path     : 'fine-tune-ai',
        component: FineTuneAiComponent,
    },
] as Route[];