describe("Praca domowa Modul 2", () => {
  it("Wpisz email user888 i haslo 1234567890", () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.login("user888@gmail.com", "1234567890");
    cy.get('#open-navigation-menu-mobile').click();
    cy.get(':nth-child(12) > .next-bve2vl').scrollIntoView().should("be.visible");
    cy.get(':nth-child(12) > .next-bve2vl').click();
  });

  it("Wpisz email testowyqa i haslo QA!automation-1", () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.login("testowyqa@qa.team", "QA!automation-1");
    cy.get('#open-navigation-menu-mobile > svg > path').click();
    cy.get(':nth-child(9) > .next-bve2vl').click();
  });
 });