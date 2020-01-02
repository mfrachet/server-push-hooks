context("Socket.io", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234/");
  });

  describe("Last message section", () => {
    afterEach(() => {
      // cy.get("[data-cy=clear-last-message]").click();
    });

    it("should be an empty section at the beginning", () => {
      cy.get("[data-cy=last-message]")
        .invoke("text")
        .should("eq", "");
    });

    it("should display a message in the last message section", () => {
      cy.get("[data-cy=add-one-last-message]").click();

      cy.get("[data-cy=last-message]")
        .invoke("text")
        .should("eq", "This is one new message");
    });

    it("should display only the last message in the last message section while triggering three", () => {
      cy.get("[data-cy=add-three-last-messages]").click();

      cy.get("[data-cy=last-message]")
        .invoke("text")
        .should("eq", "This is a third new message");
    });

    it("should successfully manage subscription and unsubscription for a specific event", () => {
      cy.get("[data-cy=add-one-last-message]").click();
      cy.wait(100);
      cy.get("[data-cy=unsubscribe-last-message]").click();
      cy.get("[data-cy=add-three-last-messages]").click();

      cy.get("[data-cy=last-message]")
        .invoke("text")
        .should("eq", "This is one new message");

      cy.get("[data-cy=subscribe-last-message]").click();
      cy.wait(100);
      cy.get("[data-cy=add-three-last-messages]").click();

      cy.get("[data-cy=last-message]")
        .invoke("text")
        .should("eq", "This is a third new message");
    });
  });

  describe('All "message" event messages', () => {
    beforeEach(() => {
      cy.get("[data-cy=clear-messages]").click();
    });

    it("should be an empty section at the beginning", () => {
      cy.get("[data-cy=messages]")
        .invoke("text")
        .should("eq", "");
    });

    it("should display 3 messages", () => {
      cy.get("[data-cy=add-three-messages]").click();

      cy.wait(100);

      cy.get("[data-cy=messages]")
        .children("li")
        .eq(2)
        .invoke("text")
        .should("eq", "This is one new message");

      cy.get("[data-cy=messages]")
        .children("li")
        .eq(1)
        .invoke("text")
        .should("eq", "This is a second new message");

      cy.get("[data-cy=messages]")
        .children("li")
        .eq(0)
        .invoke("text")
        .should("eq", "This is a third new message");
    });

    it("should manage the subscription and unsubscription flows", () => {
      cy.get("[data-cy=add-three-messages]").click();
      cy.wait(100);

      cy.get("[data-cy=messages]")
        .children("li")
        .its("length")
        .should("eq", 3);

      cy.get("[data-cy=unsubscribe-messages").click();

      cy.get("[data-cy=add-three-messages]").click();
      cy.wait(100);

      cy.get("[data-cy=messages]")
        .children("li")
        .its("length")
        .should("eq", 3);

      cy.get("[data-cy=subscribe-messages").click();

      cy.get("[data-cy=add-three-messages]").click();
      cy.wait(100);

      cy.get("[data-cy=messages]")
        .children("li")
        .its("length")
        .should("eq", 6);
    });
  });
});
