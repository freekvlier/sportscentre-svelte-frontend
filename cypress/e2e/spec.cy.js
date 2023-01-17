/// <reference types="cypress" />
import { login } from "./auth";

let cachedTokenExpiryTime = new Date().getTime();
let cachedTokenResponse = null;

Cypress.Commands.add("login", () => {
  // Clear our cache if tokens are expired
  if (cachedTokenExpiryTime <= new Date().getTime()) {
    cachedTokenResponse = null;
  }

  return login(cachedTokenResponse).then((tokenResponse) => {
    cachedTokenResponse = tokenResponse;
    // Set expiry time to 50 minutes from now
    cachedTokenExpiryTime = new Date().getTime() + 50 * 60 * 1000;
  });
});

// context("sampleTest", () => {
//   beforeEach(function () {
//     cy.login();
//   });
// });

describe('template spec', () => {
  it('passes', () => {
    cy.login();
    cy.visit('https://freekvlier.github.io/sportscentre-frontend/');
    debugger;
  })
})