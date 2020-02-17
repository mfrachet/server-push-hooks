context("Socket.io", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234/");
  });

  describe("Last message for SSE", () => {
    it("should be an empty section at the beginning", () => {
      cy.get("[data-cy=last-sse-message]")
        .invoke("text")
        .should("eq", "");
    });

    it("should have 'Marvin' as first SSE message", () => {
      cy.get("[data-cy=last-sse-message]")
        .invoke("text")
        .should("eq", "Marvin");
    });

    it("should have 'Laetitia' as second SSE message", () => {
      cy.get("[data-cy=last-sse-message]")
        .invoke("text")
        .should("eq", "Laetitia");
    });
  });
});
