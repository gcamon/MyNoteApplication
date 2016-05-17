function NoteApplication(author){
	this.author = author;
	this.list = {} 
	this.list.id = 0
	this.list.content = []	
}

NoteApplication.prototype.create = function(note_content){
	 this.list.id += 0

}

NoteApplication.prototype.list = function(){
	this.list.forEach(function(content){

	})
}

NoteApplication.prototype.get =function(note_id){

}

NoteApplication.prototype.search = function(search_text){

}

NoteApplication.prototype.delete = function(note_id){

}

NoteApplication.prototype.edit = function(note_id,new_content){

}