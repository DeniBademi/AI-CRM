import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SupabaseService } from './supabase.service';
import { map, take } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
    const supabaseService = inject(SupabaseService);
    const router = inject(Router);

    return supabaseService.isAuthenticated$.pipe(
        take(1),
        map(isAuthenticated => {
            if (isAuthenticated) {
                return true;
            }

            // Store the attempted URL for redirecting
            const currentUrl = state.url;
            return router.createUrlTree(['/auth/login'], {
                queryParams: { returnUrl: currentUrl }
            });
        })
    );
};

export const noAuthGuard: CanActivateFn = (route, state) => {
    const supabaseService = inject(SupabaseService);
    const router = inject(Router);

    return supabaseService.isAuthenticated$.pipe(
        take(1),
        map(isAuthenticated => {
            if (!isAuthenticated) {
                return true;
            }

            // If user is authenticated, redirect to home
            return router.createUrlTree(['/']);
        })
    );
};