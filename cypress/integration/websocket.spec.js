context("Socket.io", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234/websocket");
    cy.contains("Clear all messages").click();
  });

  describe("Connection", () => {
    it("should open a websocket connection", () => {
      cy.contains("Connection is opened.").should("be.visible");
    });
  });

  describe("Last message section", () => {
    beforeEach(() => {
      cy.contains("Switch to Last message").click();
    });

    it("should be an empty section at the beginning", () => {
      cy.contains("No last messages").should("be.visible");
    });

    it("should show one last message", () => {
      cy.contains("Ask for one last message").click();
      cy.contains("One last message").should("be.visible");
    });

    it("should show three last message", () => {
      cy.contains("Ask for three last messages").click();
      cy.contains("Three last message of three").should("be.visible");
    });
  });

  describe("All message section", () => {
    it("should be an empty section at the beginning", () => {
      cy.contains("No messages").should("be.visible");
    });

    it("should show three messages", () => {
      cy.contains("Ask for messages").click();
      cy.contains("One of three messages").should("be.visible");
      cy.contains("Two of three messages").should("be.visible");
      cy.contains("Three of three messages").should("be.visible");
    });
  });
});
