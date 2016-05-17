function NoteApplication(author){
	this.author = author;
	this.listContent = {} 
	this.listContent.id = 0
	this.listContent.content = []	
}

NoteApplication.prototype.create = function(note_content){
	 this.listContent.id += 1;
	 this.listContent.content.push(note_content);

}

NoteApplication.prototype.list = function(){
	console.log("note_id : " + this.listContent.id);
	this.listContent.content.forEach(function(item){
		console.log(item)
	});
	console.log("Author : " + this.author);
};

NoteApplication.prototype.get = function(note_id){
	for(var i = 0; i <= this.listContent.content.length; i++){
		if( i  === note_id){
			console.log(this.listContent.content[i - 1])
		}; 
	};
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
		};
	};
};

NoteApplication.prototype.delete = function(note_id){
    var j = this.listContent.content.length - 1
	for(var i = 0; i <= this.listContent.content.length - 1; i++){
	    j = i + 1
	   
		if(note_id === j){		    
			this.listContent.content.splice(i,1)
		};
	};
};

NoteApplication.prototype.edit = function(note_id,new_content){
	for(var i = 0; i < this.listContent.content.length; i++){
		if(note_id === i){
			this.listContent.content[i - 1] = new_content;
		};
	};
};






