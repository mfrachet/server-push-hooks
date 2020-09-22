context("Server sent event", () => {
  describe("Last message for SSE", () => {
    beforeEach(() => {
      cy.visit("http://localhost:1234/last-sse");
    });

    it("should be an empty section at the beginning", () => {
      cy.get("[data-cy=last-sse-message]").invoke("text").should("eq", "");
    });

    it("should have 'Marvin' as first SSE message", () => {
      cy.get("[data-cy=last-sse-message]").should("contain", "Marvin");
    });

    it("should have 'Laetitia' as second SSE message", () => {
      cy.get("[data-cy=last-sse-message]").should("contain", "Laetitia");
    });
  });

  describe("All messages from SSE", () => {
    beforeEach(() => {
      cy.visit("http://localhost:1234/all-sse");
    });

    it("should display all the names", () => {
      cy.get("[data-cy=all-sse-messages]").should("contain", "Marvin");

      cy.get("[data-cy=all-sse-messages]").should("contain", "Laetitia");
    });
  });
});
