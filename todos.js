var form = `<form>

<form>
    <div class="row">
    <div class="col-12 mt-5">
        <h1>Berikan Ulasanmu!</h1>
    </div>
        <div class="col">
            <label for="name">Nama</label>
            <input type="name" class="form-control" id="name" placeholder="nama">
        </div>
        <div class="col">
            <label for="name">Tanggal</label>
            <input type="date" class="form-control" id="date" placeholder="tanggal">
        </div>
    </div><br/>
    <div class="form-group">
        <label for="message">Masukkan Ulasan</label>
        <input type="message" class="form-control" id="message" placeholder="masukkan ulasan">
    </div>
    <button type="submit" class="btn btn-primary" onclick="save()">Submit</button>
</form>`;

function table(){
    let table = `<table class="table">
    <thead>
      <tr>
        <th clsaa="col-1">No</th>
        <th clsaa="col-3">Nama</th>
        <th clsaa="col-4">Tanggal</th>
        <th clsaa="col-2">Ulasan</th>
        <th clsaa="col-2">Edit</th>
        <th clsaa="col-2">Hapus</th>
      </tr>
    </thead>
    <tbody>`;

    for (let i = 0; i <details.length; i++){
        table=table + `<tr>
        <th>${i+1}</th>
        <td>${details[i].name}</td>
        <td>${details[i].date}</td>
        <td>${details[i].message}</td>
        <td><button type="button" class="btn btn-warning" onclick="edit(${i})">Edit</button></td>
        <td><button type="button" class="btn btn-danger" onclick="deleteData(${i})">Hapus</button></td>
      </tr>`
    };

    table = table+`</tbody>
    </table>`;
    document.getElementById("table").innerHTML = table ;
};

document.getElementById("form").innerHTML = form;
details = [];
getData();
table();

function getData() {
    let Data = localStorage.getItem("details");
    if (Data) {
        details = JSON.parse(Data);
    }else {
        setData();
    }
};

function setData() {
    localStorage.setItem("details", JSON.stringify(details));
};

function save() {
    let name = document.getElementById("name");
    let date = document.getElementById("date");
    let message = document.getElementById("message");

    if(name.value == 0) {
        alert("Masukkan Nama");
        return
    } else if (date.value === 0) {
        alert("Masukkan Tanggal");
        return
    }
    let data = {
        name: name.value,
        date: date.value,
        message: message.value
    };

    details.push(data);
    setData();

    console.log(details);
    //console.log("date.value");
    //console.log("message.value");

    table();
    name.value = "";
    date.value = "";
    message.value = "";
};

function deleteData(index) {
    details.splice(index, 1);
    setData();
    table();

    //console.log('delete work')
    console.log(details)
};

function edit(index){
    let editForm = `<form>
<h1>Update Ulasanmu!</h1>
<form>
  <div class="row">
        <div class="col">
            <label for="name">Update Nama</label>
            <input type="name" value="${details[index].name}" class="form-control" id="newName" placeholder="update nama">
        </div>
        <div class="col">
            <label for="date">Update Tanggal</label>
            <input type="date" value="${details[index].date}" class="form-control" id="newDate" placeholder="update tanggal">
            </div>
        </div><br/>
    <div class="form-group">
        <label for="message">Masukkan Ulasan</label>
        <input type="message" value="${details[index].message}" class="form-control" id="newMessage" placeholder="update ulasan">
    </div>
    <button type="submit" class="btn btn-primary" onclick="update(${index})">Update</button>
</form>`;
    document.getElementById("form").innerHTML = editForm;
    console.log('edit work');
};

function update(index) {
    let newName = document.getElementById("newName");
    let newDate = document.getElementById("newDate");
    let newMessage = document.getElementById("newMessage");

    details[index] = {
        name: newName.value,
        date: newDate.value,
        message: newMessage.value
    };
    setData();
    table();
    
    console.log('update work')
    console.log(details)
}