describe(" Take an array and returns the sum of elements", function(){
    it(" the sum of elements is", function(){
        assert.equal(sum([1, 2, 3, 4]),10);
    });
    it(" the sum of elements is", function(){
        assert.notEqual(sum([1, 2, 3, 4]),12);
    });
});

describe(" Take an array and returns the product of elements", function(){
    it(" the product of elements is", function(){
        assert.equal(multiply([1, 2, 3, 4]),24);
    });
    it(" the product of elements is", function(){
        assert.notEqual(multiply([1, 2, 3, 4]),26);
    });
});

describe("Take a string and return its reverse", function(){
    it(" There reverse string" ,function(){
     assert.equal(reverse("Emile"),"elimE");
    });
    it("There reverse string" ,function(){
     assert.notEqual(reverse("Gisele"),"eleGis");
    });
});

describe("Takes an array of strings and returns words longer than  a given length", function(){    
    it("Words longer than 5 letters are", function(){
        assert.equal(filterLongWords(["Element", "li", "Iterating", "Chai"], 5).toString(), ["Element", "Iterating"].toString());
    });  
    
    it("Words longer than 0 letters are", function(){
        assert.notEqual(filterLongWords(["1", "11", "111"], 2), ["111","1"]);
    });    
});


