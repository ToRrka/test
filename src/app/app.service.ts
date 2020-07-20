import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  test: string;
  gitCommit = '--amend';

  constructor() { }
}
