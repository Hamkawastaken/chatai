console.log("ok!");

var questions = document.getElementById("question");
var answers = document.getElementById("answer");

var apiUrl = "https://widipe.com/openai";

async function sendReq() {
  try {
    const url = `${apiUrl}?text=${questions.value}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    const data = await response.json();
    var htmlResult = renderApiResult(data.result);
    answers.innerHTML = htmlResult;
    // answers.innerHTML = data.result;
    // console.log(data);
  } catch (error) {
    console.log(error.massage);
  }
}

function renderApiResult(result) {
  // Pisahkan teks berdasarkan blok kode dan teks lainnya
  let formattedHtml = result
    .replace(/```html([^```]+)/g, "<pre><code>$1</code></pre>") // Mengubah blok kode menjadi <pre><code>
    .replace(/### (.+)/g, "<h3>$1</h3>") // Mengubah heading menjadi <h3>
    .replace(/\n/g, "<br>") // Mengganti line break dengan <br>
    .replace(/\- (.+)/g, "<li>$1</li>") // Mengganti bullet point dengan <li>
    .replace(/(\n\n)/g, "</p><p>") // Memisahkan paragraf
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  // Tambahkan wrapper <p> di awal dan akhir
  return `<p>${formattedHtml}</p>`;
}

// Fungsi untuk menampilkan respon API
// function displayApiContent(response) {
//   // Menambahkan nama creator
//   const creatorElement = document.createElement("p");
//   creatorElement.classList.add("text-sm", "text-gray-500", "mb-4");
//   creatorElement.textContent = `Creator: ${response.creator}`;
//   answers.appendChild(creatorElement);

//   // Menambahkan konten hasil
//   const resultElement = document.createElement("div");
//   resultElement.classList.add("prose", "prose-lg", "text-gray-800");

//   // Gunakan innerHTML untuk merender konten dengan format bold
//   resultElement.innerHTML = response.result.replace(/\n/g, "<br>"); // Mengganti newline (\n) dengan <br> untuk membuat line break
//   answers.appendChild(resultElement);
// }

// // Panggil fungsi untuk menampilkan konten API
// displayApiContent(apiResponse);
