// create function

function make_album(author:string,title:string,tracks?:number){
    let album = {author,title}
    if (tracks) {
        album.tracks = tracks; // typescript is not excepted this line because 'track' key is not declare in album object 
    }
    console.log(album);
}

make_album("Author 1","Title 1");
make_album("Author 2","Title 2");
make_album("Author 3","Title 3",9);