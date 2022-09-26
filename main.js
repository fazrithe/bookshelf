function allData(){
            
    table.innerHTML = ``
    table2.innerHTML = ``
    bookList = JSON.parse(localStorage.getItem('listItem4')) ?? []

    bookList.forEach(function (value, i){
        var table = document.getElementById('table')
        if(value.isComplete == 0){
        table.innerHTML += `
            <tr>
                <td>${i+1}</td>
                <td>${value.title}</td>
                <td>${value.author}</td>
                <td>${value.year}</td>
                <td><button class="btn btn-sm btn-warning" onclick="read(${value.id},'${value.title}','${value.author}',${value.year})">
                <i class="fa fa-check"></i>
                </button></td>
                <td>
                    <button class="btn btn-sm btn-success" onclick="find(${value.id},'${value.title}','${value.author}',${value.year},${value.isComplete})">
                        <i class="fa fa-edit"></i>
                    </button>
                </td>
                <td>
                    <button class="btn btn-sm btn-danger" onclick="removeData4(${value.id})">
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
            </tr>`
        }else if(value.isComplete == 1){
            var table2 = document.getElementById('table2')
            table2.innerHTML += `
                <tr>
                    <td>${i+1}</td>
                    <td>${value.title}</td>
                    <td>${value.author}</td>
                    <td>${value.year}</td>
                    <td><button class="btn btn-sm btn-warning" onclick="read2(${value.id},'${value.title}','${value.author}',${value.year})">
                    <i class="fa fa-check"></i>
                    </button></td>
                    <td>
                        <button class="btn btn-sm btn-success" onclick="find(${value.id},'${value.title}','${value.author}',${value.year},${value.isComplete})">
                            <i class="fa fa-edit"></i>
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-sm btn-danger" onclick="removeData4(${value.id})">
                            <i class="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>`
        }
    
    })
    
}

function save(){

    var title = document.getElementById('inputBookTitle').value;
    var author = document.getElementById('inputBookAuthor').value;
    var year = document.getElementById('inputBookYear').value;
    var read = document.getElementById('inputBookIsComplete');
    if(title == ''){
        alert("Title not null");
        return false;
    }else if(author == ''){
        alert("Author not null");
        return false;
    }else if(year == ''){
        alert("Year not null");
        return false;
    }else{
        if(read.checked == true){
            bookList = JSON.parse(localStorage.getItem('listItem4')) ?? []

            var id
            bookList.length != 0 ? bookList.findLast((item) => id = item.id) : id = 0
        
            if(document.getElementById('inputBookId').value){

                bookList.forEach(value => {
                    if(document.getElementById('inputBookId').value == value.id){
                        value.title         = document.getElementById('inputBookTitle').value, 
                        value.author        = document.getElementById('inputBookAuthor').value, 
                        value.year          = document.getElementById('inputBookYear').value, 
                        value.isComplete    = 1
                    }
                });

                document.getElementById('inputBookId').value = ''

            }else{

                var item = {
                    id          : id + 1, 
                    title       : document.getElementById('inputBookTitle').value, 
                    author      : document.getElementById('inputBookAuthor').value, 
                    year        : document.getElementById('inputBookYear').value, 
                    isComplete  : 1,
                }

                bookList.push(item)
            }

            localStorage.setItem('listItem4', JSON.stringify(bookList))
        }else{
        

            bookList2 = JSON.parse(localStorage.getItem('listItem4')) ?? []

            var id
            bookList2.length != 0 ? bookList.findLast((item) => id = item.id) : id = 0
            if(document.getElementById('inputBookId').value){

                bookList2.forEach(value => {
                    if(document.getElementById('inputBookId').value == value.id){
                        value.title         = document.getElementById('inputBookTitle').value, 
                        value.author        = document.getElementById('inputBookAuthor').value, 
                        value.year          = document.getElementById('inputBookYear').value, 
                        value.isComplete    = 0
                    }
                });

                document.getElementById('inputBookId').value = ''

            }else{

                var item = {
                    id          : id + 1, 
                    title       : document.getElementById('inputBookTitle').value, 
                    author      : document.getElementById('inputBookAuthor').value, 
                    year        : document.getElementById('inputBookYear').value, 
                    isComplete  : 0,
                }

                bookList2.push(item)
            }

            localStorage.setItem('listItem4', JSON.stringify(bookList2))
        }

        allData()

        document.getElementById('form').reset()
    }
}

function removeData4(id){
    bookList = JSON.parse(localStorage.getItem('listItem4')) ?? []

    bookList = bookList.filter(function(value){ 
        return value.id != id; 
    });
    // localStorage.clear();
    localStorage.setItem('listItem4', JSON.stringify(bookList))

    allData()
}

function find(id1,title1,author1,year1,isComplete1){
        if(isComplete1 == 0){
            document.getElementById('inputBookId').value = id1;
            document.getElementById('inputBookTitle').value = title1;
            document.getElementById('inputBookAuthor').value = author1; 
            document.getElementById('inputBookYear').value = year1;
        }else{
            document.getElementById('inputBookId').value = id1;
            document.getElementById('inputBookTitle').value = title1;
            document.getElementById('inputBookAuthor').value = author1; 
            document.getElementById('inputBookYear').value = year1;
            document.getElementById('inputBookIsComplete').checked = true;
        }
     
}


function read(id1,title1,author1,year1){

    if(id1){
        bookList.forEach(value => {
            if(id1 == value.id){
                value.title         = title1, 
                value.author        = author1, 
                value.year          = year1, 
                value.isComplete    = 1
            }
        });
        localStorage.setItem('listItem4', JSON.stringify(bookList))
    }

    allData()
}

function read2(id1,title1,author1,year1){
    if(id1){
        bookList.forEach(value => {
            if(id1 == value.id){
                value.title         = title1, 
                value.author        = author1, 
                value.year          = year1, 
                value.isComplete    = 0
            }
        });
        localStorage.setItem('listItem4', JSON.stringify(bookList))
    }

    allData()
}