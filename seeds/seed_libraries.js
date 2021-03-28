exports.seed = function(knex, Promise){
    return knex('library').del()
        .then(function(){
            return knex('library').insert([
                {id:1, LibraryName: "Brooklyn Library", Location: "Brooklyn", LeadLibrarian: "John Smith"},
                {id:2, LibraryName: "Manhattan Library", Location: "Manhattan", LeadLibrarian: "Henry J. Waternoose III"},
                {id:3, LibraryName: "Queens Library", Location: "Queens", LeadLibrarian: "Jane Doe"},
                {id:4, LibraryName: "Bronx Library", Location: "Brnx", LeadLibrarian: "Tibbles the Kitten"},
                {id:5, LibraryName: "Staten Island Library", Location: "Staten Island", LeadLibrarian: "Bilbo Baggins"}
            ])
        })
}
