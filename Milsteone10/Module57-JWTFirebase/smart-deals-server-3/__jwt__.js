/**
 * # FIREBASE JWT built in ( first 2 steps are already done in firebase)
 * 1. after login : server will create a jwt token
 * 2. store it in the client side (localstorage, httponly cookies, in memory)
 * 3. For asking for sensitive data: send a request with jwt token in the header 
 * 4. server will verify the token. if token is valid; then will provide the data
 * 
 * 
 * 
 * 
 * 
 * -----------------------Access token Refresh token ------------------
 * 1. Access Tokens:
 * - Function: Access protected API resources.
 * - Lifespan: Short (minutes/hours) for security.
 * - Transmission: Sent with every API request (e.g., Authorization:    Bearer <token>).
 * Nature: Stateless (validated via signature).
 * 
 * 2. Refresh Tokens:
 * - Function: Obtain new access tokens without re-login.
 * - Lifespan: Long (days/weeks/months) for session persistence.
 * - Transmission: Sent only to a secure refresh endpoint.
 * - Nature: Statefull (stored in database) and revokable.
 * 
 * # Key Concept: Balances security (short access token life) with user experience (long session continuity via refresh tokens).
 * 
 * 
*/

/**
 * # How can we create custom JWT Token
 * 1. generate token
 * 
*/