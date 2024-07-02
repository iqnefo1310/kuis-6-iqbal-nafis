const animals = [
    {
        id: 1,
        name: "kucing",
        image: "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg",
        kategori: "cat",
        price: "100.000"
    },
    {
        id: 1,
        name: "kucing",
        image: "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg",
        kategori: "cat",
        price: "100.000"
    },
    {
        id: 1,
        name: "kucing",
        image: "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg",
        kategori: "cat",
        price: "100.000"
    },
    {
        id: 1,
        name: "kucing",
        image: "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg",
        kategori: "cat",
        price: "100.000"
    },
]

function beli() {
    let cek = confirm("pakah anda yakin ingin bembeli");

    if (cek == true) {
        alert("anda membeli selahkan cek console")
        console.log("dibeli")
    }
    else {
        alert("anda tidak jadi membeli terimakasih!!!")
    }
}
function like() {
    alert("anda menglike");
    console.log("like")
}

function coment() {
    let komen = prompt("masukan komentar anda")
    console.log(komen)
    alert("dikomentari dan masuk ke console")
}

document.getElementsByTagName('main').appendChild(document.write(`<h1>iqbal</h1>`));

