export interface Response {
  IsSuccess: boolean;
  Data: any
  Message: string;
  IsSessionExpired: boolean;
  Errors: any[];
}
