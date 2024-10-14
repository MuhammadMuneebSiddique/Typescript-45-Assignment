// create function
function make_album(author, title, tracks) {
    var album = { author: author, title: title };
    if (tracks) {
        album.tracks = tracks; // typescript is not excepted this line because 'track' key is not declare in album object 
    }
    console.log(album);
}
make_album("Author 1", "Title 1");
make_album("Author 2", "Title 2");
make_album("Author 3", "Title 3", 9);
var num;
var addd = {
    body: "jhfdjf",
    shjhd: "kdnln"
};
addd.num = num;
console.log(addd);
