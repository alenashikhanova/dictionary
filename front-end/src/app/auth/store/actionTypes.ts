/* eslint-disable @typescript-eslint/naming-convention */
export enum ActionTypes {
  REGISTER = '[Auth] Register',
  REGISTER_SUCCESS = '[Auth] Register success',
  REGISTER_FAILURE = '[Auth] Register failure',

  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login success',
  LOGIN_FAILURE = '[Auth] Login failure',

  GOOGLE_AUTH = '[Auth] Google auth',
  GOOGLE_AUTH_SUCCESS = '[Auth] Google auth success',
  GOOGLE_AUTH_FAILURE = '[Auth] Google auth failure',

  SEND_MAIL_TO_RESET_PASSWORD = '[Auth] Send mail to reset password',
  SEND_MAIL_TO_RESET_PASSWORD_SUCCESS = '[Auth] Send mail to reset password success',
  SEND_MAIL_TO_RESET_PASSWORD_FAILURE = '[Auth] Send mail to reset password failure',

  RESET_PASSWORD = '[Auth] Reset password',
  RESET_PASSWORD_SUCCESS = '[Auth] Reset password success',
  RESET_PASSWORD_FAILURE = '[Auth] Reset password failure',

  GET_CURRENT_USER = '[Auth] Get current user',
  GET_CURRENT_USER_SUCCESS = '[Auth] Get current user success',
  GET_CURRENT_USER_FAILURE = '[Auth] Get current user failure',

  LOGOUT = '[Auth] Logout'
}
