document.getElementById("btn").addEventListener("click", function() {
    var text = document.getElementById("inp")

    // Matnni tanlab olish uchun
    text.select()

    // Telefonlar uchun
    text.setSelectionRange(0, 99999)

    // Matnni clipboardga nusxalash uchun
    navigator.clipboard.writeText(text.value)
})