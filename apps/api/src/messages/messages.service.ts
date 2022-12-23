/**
 * Service Methods
 */

export const getPublicMessage = () => ({
  message: "The API doesn't require an access token to share this message.",
});

export const getProtectedMessage = () => ({
  message: 'The API successfully validated your access token.',
});
