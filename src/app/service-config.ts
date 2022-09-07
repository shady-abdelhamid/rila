import { environment } from '../environments/environment';

export const GATEWAY = {
  LIST: `${environment.apiUrl}/gateway`,
  DETAILS: (id: string) => `${environment.apiUrl}/gateway/${id}`,
  CREATE: `${environment.apiUrl}/gateway`,
  UPDATE: (id: string) => `${environment.apiUrl}/gateway/${id}`,
};
