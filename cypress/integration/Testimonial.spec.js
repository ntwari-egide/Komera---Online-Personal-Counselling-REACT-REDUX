describe("Testing on ListOfTestimonial page", () => {
  
  it("Checking the delete button", () => {
    cy.visit("http://localhost:3000");

    cy.get("div#testimonials").within(() => {
      cy.get("button#delete").should("contain.text", "Delete");
    });
  });

  // check if on clicking the delete button, the testimonial dissappears

  it("On Click the delete button, testimonial dissappears", () => {
    cy.get("button#delete:first").click();
    cy.get("h4").should("contain.text", "");
  });

  it("On inserting search input value", () => {
    cy.get("input#search").type("Ntwari").should("have.value", "Ntwari");
  });
});
