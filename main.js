// let car = {
//     // properti (variable)
//     type: "Fiat",
//     model: "500",
//     color: "white",
//     // method (function)
//     start: function () {
//         console.log("Ini adalah methode Start")
//     },
//     drive: function () {
//         console.log("Ini adalah methode Drive")
//     },
//     brake: function () {
//         console.log("Ini adalah methode Brake")
//     },
//     stop: function () {
//         console.log("Ini adalah methode Stop")
//     }
// }

// let bioData ={
//     name:"iqbal",
//     prodi:"d3 mi",
//     hobi:["otomotif","renang","gaming"]
// }
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
animals.forEach((animal) => {
    document.write(`
    <main>
        <figure>
            <img src="${animal.image}" alt="">
                <figcaption>
                    <h1>nama: ${animal.name}</h1>
                    <h2>kategori:${animal.kategori}</h1>
                    <h3>harga: Rp.${animal.price}</h1>
                 </figcaption>
                <tom>
                    <button onclick="beli()">beli sekarang</button> 
                    <button onclick="like()">like</button> 
                    <button onclick="coment()">coment</button>
                </tom>
        </figure>
    </main>
    `)
});
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
    let komen= prompt("masukan komentar anda")
    console.log(komen)
    alert("dikomentari dan masuk ke console")
}


