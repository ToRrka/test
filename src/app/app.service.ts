import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  test = 'test';
  gitCommit = '--amend';
  constructor() { }
}
