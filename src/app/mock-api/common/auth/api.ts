import { Injectable } from '@angular/core';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import { user as userData } from 'app/mock-api/common/user/data';
import { cloneDeep } from 'lodash-es';
import { SupabaseService } from 'app/core/auth/supabase.service';
import { firstValueFrom, from } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthMockApi {
    private _user: any = userData;

    /**
     * Constructor
     */
    constructor(
        private _fuseMockApiService: FuseMockApiService,
        private _supabaseService: SupabaseService
    ) {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void {
        // -----------------------------------------------------------------------------------------------------
        // @ Sign in with token - POST
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPost('api/auth/sign-in-with-token')
            .reply(({ request }) => {
                // Get the access token
                const accessToken = request.body.accessToken;

                // Create a Promise that returns the expected response type
                const responsePromise = new Promise<[number, any]>(async (resolve) => {
                    try {
                        // Verify the token with Supabase
                        const isValid = await firstValueFrom(
                            this._supabaseService.verifyToken(accessToken)
                        );

                        if (isValid) {
                            resolve([
                                200,
                                {
                                    user: cloneDeep(this._user),
                                    accessToken,
                                    tokenType: 'bearer'
                                }
                            ]);
                            return;
                        }

                        resolve([
                            401,
                            {
                                error: 'Invalid token'
                            }
                        ]);
                    } catch (error) {
                        resolve([
                            401,
                            {
                                error: 'Invalid token'
                            }
                        ]);
                    }
                });

                return from(responsePromise);
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Sign up - POST
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService.onPost('api/auth/sign-up', 1500).reply(() =>
            // Simply return true
            [200, true]
        );

        // -----------------------------------------------------------------------------------------------------
        // @ Reset password - POST
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService.onPost('api/auth/reset-password', 1500).reply(() =>
            // Simply return true
            [200, true]
        );

        // -----------------------------------------------------------------------------------------------------
        // @ Reset password with token - POST
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPost('api/auth/reset-password-with-token')
            .reply(() =>
                // Simply return true
                [200, true]
            );
    }
}
