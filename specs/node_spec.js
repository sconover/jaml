require("./spec_helper.js");

describe("Jaml.Node", function() {
  
  beforeEach(function(){
    fooBar = new Jaml.Node("fooBar");
  });
  
  describe("basics", function() {
    it("renders nothing inside if there's nothing in the node", function(){
      assert.equal("<fooBar></fooBar>\n", new Jaml.Node("fooBar").render());
    });

    it("properly prepends the specified amount of left padding", function(){
      assert.equal("     <fooBar></fooBar>\n", new Jaml.Node("fooBar").render(5));
    });
  });
  
  describe("attributes", function() {
    it("renders attributes as key value pairs separate by = in the tag", function(){
      assert.equal("<fooBar a=\"b\"></fooBar>\n", fooBar.setAttributes({a:"b"}).render());
    });
  });
});
