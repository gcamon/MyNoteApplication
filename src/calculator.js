
function NoteApplication(author){
	this.author = author;
	this.listContent = {} 
	this.listContent.id = 0
	this.listContent.content = []	
}

NoteApplication.prototype.create = function(note_content){
	 this.listContent.id += 1;
	 this.listContent.content.push(note_content);

	 return "created successfully"
}

NoteApplication.prototype.list = function(){
	var arr = []
	console.log("note_id : " + this.listContent.id);
	this.listContent.content.forEach(function(item){
		console.log(item)
		arr.push(item)
	});
	console.log("Author : " + this.author);

	if( arr.length > 0){
		return true;
	}

	return "list is empty"
};

NoteApplication.prototype.get = function(note_id){
	var a;
	for(var i = 0; i <= this.listContent.content.length; i++){
		if( i  === note_id){
			console.log(this.listContent.content[i - 1])
			a =  this.listContent.content[i - 1]
		} 
	};
	return (a.length > 0) ? true : false;
};

NoteApplication.prototype.search = function(search_text){	
	for(var i = 0; i < this.listContent.content.length; i++){
		if(search_text === this.listContent.content[i]){
	console.log( "Showing result for the search " + '"' + this.listContent.content[i] + '"')
			console.log("Note ID : " + this.listContent.id)
			this.listContent.content.forEach(function(item){
				console.log(item);
			});

			console.log("By Author : " + this.author)
			return "found";
		};
	};

	return "not found";
};

NoteApplication.prototype.delete = function(note_id){
    var j = this.listContent.content.length - 1
    var state = "not deleted"
	for(var i = 0; i <= this.listContent.content.length - 1; i++){
	    j = i + 1
	   
		if(note_id === j){		    
			this.listContent.content.splice(i,1)
			state = "deleted";
		};
	};

	return state;
};

NoteApplication.prototype.edit = function(note_id,new_content){	
	var state  = "not updated"
	for(var i = 0; i <= this.listContent.content.length; i++){
		if(note_id === i){
			this.listContent.content[i - 1] = new_content;
			state = "updated"
		};
	};

	return state;
};


var obinna = new NoteApplication("obinna");
obinna.create("come on my people")











