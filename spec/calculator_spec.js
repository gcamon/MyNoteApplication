describe("note application", function() {
    
    it("should create a content",function() {    	
        expect(obinna.create("i have a dream")).toBe("created successfully");
    })
    
    it("should return list of content with id and name of author", function () {
        expect(obinna.list()).toBe(true)
    })

    it("should return note_content", function () {
        expect(obinna.get(0)).toBe(true)
    })

    it("should return search result", function () {
        expect(obinna.search("i have a dream")).toBe("found")
    })

    it("should delete note_content", function () {
        expect(obinna.delete(1)).toBe("deleted")
    })

    it("should edit and update the note_content", function () {
        expect(obinna.edit(1,"i believe i can fly")).toBe("updated")
    })

});


